/* global atom */

import { Behavior } from './behaviors/behavior';
import * as packageJSON from './../package.json';

/**
 * Manages {@link Behavior}'s settings by mapping them to Atom's config key paths
 * and watching for changes.
 *
 * Takes {@link Behavior}'s settings and processes them to *DataStructures which
 * can then be used to register config events and notify when settings are changed.
 */
export class BehaviorSettingsManager {
    /**
     * Boolean representing if this BehaviorSettingsManager is disposed of.
     * @type {boolean}
     */
    _disposed = false;
    
    /**
     * Holds instance of BehaviorManager this object belongs to.
     * @type {BehaviorManager}
     */
    _behaviorManager = null;
    
    /**
     * Holds processed {@link BehaviorSettingsDataStructure}s for Behaviors.
     * @type {Map<Behavior,BehaviorSettingsDataStructure>}
     */
    _behaviorSettings = new Map();
    
    /**
     * Holds subscription to atom.config.onDidChange for Behavior.
     * @type {Map<Behavior,Disposable>}
     */
    _watchBehaviorSettingsSubscriptions = new Map();
    
    /**
     * Create new instance of {@link this}.
     * @param {BehaviorManager} behaviorManager this instance will belong to.
     */
    constructor( behaviorManager ) {
        this._behaviorManager = behaviorManager;
    }
    
    /**
     * Disposes of all resources owned by the instance of this class.
     * If object has been disposed of, this method has no effect.
     */
    dispose() {
        this._behaviorSettings.clear();
        
        for( const [,value] of this._watchBehaviorSettingsSubscriptions ) {
            value.dispose();
        }
        
        this._disposed = true;
    }
    
    /**
     * Registers Behavior's settings if it provides any.
     * If object has been disposed of, this method has no effect.
     * @param {Behavior} behavior Behavior with settings() function.
     */
    registerBehavior( behavior ) {
        if( this._disposed ) return;
        
        if( Behavior.isBehavior( behavior ) ) {
            this.processBehaviorSettingsConfig( behavior );
        }
    }
    
    /**
     * Unregisters Behavior's settings if it provides any.
     * @param {Behavior} behavior Behavior with (optional) settings() function.
     */
    unregisterBehavior( behavior ) {
        // Won't hurt if run while disposed...
        
        const disposeHandler = this._watchBehaviorSettingsSubscriptions.get( behavior );
        if( disposeHandler ) {
            disposeHandler.dispose();
            this._watchBehaviorSettingsSubscriptions.delete( behavior );
        }
        this._behaviorSettings.delete( behavior );
    }
    
    /**
     * Processes {@link BehaviorSettings}' config to internal representation.
     * Has no effect if Behavior is not a valid {@link Behavior}.
     * Has no effect if config is not an object.
     * Config item is not processed if it doesn't have a valid schema.
     * If object has been disposed of, this method has no effect.
     *
     * @param {Behavior} behavior
     *
     * @private
     */
    processBehaviorSettingsConfig( behavior ) {
        if( this._disposed ) return;
        if( !Behavior.isBehavior( behavior ) ) return;
                
        const settings = behavior.settings();
        
        if( typeof settings.config === 'undefined' ) {
            // Behavior defines no config, so nothing to do...
            return;
        }
        
        if( typeof settings.config !== 'object' ) {
            atom.notifications.addWarning(`Behavior ${settings.name} settings: config property is of type: '${typeof settings.config}'. Settings.config is expected to be an object defining config items as properties!`);
            // We can't process config, so nothing to do...
            return;
        }
        
        // Use package name as beginning of config keyPath
        const packageKey = `${packageJSON.name}.behaviors`;
        // Use name of behavior as middle for config keyPath
        const behaviorKey = settings.name.toLowerCase().split(' ').join('_'); // replace space with underscore
        
        const behaviorSettingsDS = {};
        behaviorSettingsDS.behavior = behavior;
        behaviorSettingsDS.configItems = [];
        
        for( const propertyName in settings.config ) {
            if( !Object.prototype.hasOwnProperty.call( settings.config, propertyName ) ) continue;
            
            // We're accessing settings.config property, name of property is not known ahead of time...
            // We are accessing known property names of this property.
            // Checks are made as we go on.
            const configItem = settings.config[propertyName]; // do not silence eslint
            
            if( typeof configItem !== 'object' ) {
                atom.notifications.addWarning(`Behavior ${settings.name} settings: '${propertyName}' config item has unexpected type: '${typeof configItem}'. Config item should be an object defining a schema!`);
                continue;
            }
            
            const processedConfigItem = {};
            processedConfigItem.propertyName = propertyName;
            processedConfigItem.keyPath = `${packageKey}.${behaviorKey}.${propertyName}`;
            
            if( typeof configItem.title !== 'string' ) {
                atom.notifications.addError(`Behavior ${settings.name} settings: ${propertyName} config item has no title set! Title is text to display on settings popup dialog so it must be set for all config items!`);
                continue;
            }
            processedConfigItem.title = configItem.title;
            
            processedConfigItem.description = '';
            if( typeof configItem.description === 'string' ) {
                processedConfigItem.description = configItem.description;
            }
            
            if( typeof configItem.type !== 'string' ) {
                atom.notifications.addWarning(`Behavior ${settings.name} settings: config item '${propertyName}' must set 'type' property which must be a string. Currently it's '${typeof configItem.type}'. Please set 'type' property as a string like "boolean", "string" etc.`);
                continue;
            }
            
            if( configItem.type === 'boolean' ) {
                processedConfigItem.type = 'boolean';
                
                // In case default is not present or not boolean, make it false by default
                if( typeof configItem.default !== 'boolean' ) {
                    processedConfigItem.default = false;
                } else {
                    processedConfigItem.default = configItem.default;
                }
            } else if( configItem.type === 'string' ) {
                processedConfigItem.type = 'string';
                
                // Are values pre-set?
                if( typeof configItem.enum === 'object' && Array.isArray( configItem.enum ) ) {
                    const predefinedValues = [];
                    for( const enumValue of configItem.enum ) {
                        if( typeof enumValue.value !== 'string' ) {
                            atom.notifications.addWarning(`Behavior ${settings.name} settings: Enumeration of values of '${propertyName}' config item contains value which is not string!`);
                            continue;
                        }
                        
                        const predefinedValue = {};
                        predefinedValue.value = enumValue.value;
                        
                        predefinedValue.description = '';
                        if( typeof enumValue.description === 'string' ) {
                            predefinedValue.description = enumValue.description;
                        }
                        
                        predefinedValues.push( predefinedValue );
                    }
                    processedConfigItem.predefinedValues = predefinedValues;
                }
                
                processedConfigItem.default = '';
                if( typeof configItem.default === 'string' ) {
                    if( processedConfigItem.predefinedValues ) {
                        if( !processedConfigItem.predefinedValues.find( (item) => { return item.value === configItem.default; } ) ) {
                            atom.notifications.addWarning(`Behavior ${settings.name} settings: config item ${propertyName} has default value, which is not defined in values enumeration! Default value should be available in enumerated values!`);
                        }
                    }
                    processedConfigItem.default = configItem.default;
                }
                
                if( typeof configItem.radio === 'boolean' ) {
                    if( configItem.radio ) {
                        processedConfigItem.desiredRepresentation = 'radio';
                    }
                }
            } else {
                atom.notifications.addWarning(`Behavior ${settings.name} settings: config item '${propertyName}' has unexpected type: ${configItem.type}.`);
                continue;
            }
            
            behaviorSettingsDS.configItems.push( processedConfigItem );
        }
        
        this._behaviorSettings.set( behavior, behaviorSettingsDS );
        this.mapSettingsToAtomConfig( behaviorSettingsDS );
    }
    
    /**
     * Maps config items to atom config key paths.
     * If object has been disposed of, this method has no effect.
     * @param {BehaviorSettingsDataStructure} behaviorSettings Behavior Settings datastructure.
     */
    mapSettingsToAtomConfig( behaviorSettings ) {
        if( this._disposed ) return;
        
        const behavior = behaviorSettings.behavior;
        for( const item of behaviorSettings.configItems ) {
            // First we load the setting from atom's config...
            behavior[item.propertyName] = atom.config.get( item.keyPath, item.default );
            
            // Watch for change of setting
            this._watchBehaviorSettingsSubscriptions.set( behavior,
                atom.config.onDidChange( item.keyPath, ({ newValue }) => {
                    behavior[item.propertyName] = newValue;
                    if( typeof behavior.settingsChanged === 'function' ) {
                        behavior.settingsChanged();
                    }
                })
            );
        }
    }
    
    /**
     * Returns processed settings.
     * @return {Map<Behavior,BehaviorSettingsDataStructure>} contains processed settings.
     */
    getSettings() {
        return this._behaviorSettings;
    }
}


/**
 * @typedef {Object} BehaviorSettingsDataStructure
 * @property {Object} behavior    Behavior instance this datastructure was processed from.
 * @property {string} behaviorKey Name of Behavior which can be used in Atom config key path.
 * @property {Array<ConfigItemDataStructure>} configItems
 * @private
 */

/**
 * @typedef {Object} ConfigItemDataStructure
 * @property {string}  type         "checkbox"
 * @property {string}  keyPath      Atom config key path under which the items's value is stored.
 * @property {string}  propertyName Name of property of Behavior object instance which maps to item's value.
 * @property {string}  title        Text to show next to checkbox.
 * @property {boolean} default      Default value.
 * @property {string}  description  Text to show if user hovers over item's text. Should be used to give more details.
 * @private
 */
