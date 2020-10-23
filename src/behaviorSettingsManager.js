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
     * Holds processed {@link BehaviorSettingsDataStructure}s for Behaviors.
     * @type {Map<Behavior,BehaviorSettingsDataStructure>}
     */
    _settings = new Map();
    
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
        this._settings.clear();
        
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
        
        if( Behavior.checkInstanceIsBehavior( behavior ) ) {
            this.processBehaviorSettings( behavior );
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
        this._settings.delete( behavior );
    }
    
    /**
     * Processes {@link BehaviorSettings}' config to internal representation.
     * Has no effect if Behavior is not a valid {@link Behavior}.
     * If object has been disposed of, this method has no effect.
     *
     * @param {Behavior} behavior
     *
     * @private
     */
    processBehaviorSettings( behavior ) {
        if( this._disposed ) return;
        if( !Behavior.checkInstanceIsBehavior( behavior ) ) return;
                
        const settings = behavior.settings();
        const behaviorKey = settings.name.toLowerCase().split(' ').join('_'); // replace space with underscore
        
        const packageKey = `${packageJSON.name}.behaviors`;
        
        const behaviorSettingsDS = {};
        behaviorSettingsDS.behavior = behavior;
        behaviorSettingsDS.configItems = [];
        
        if( typeof settings.config === 'object' ) {
            for( const propertyName in settings.config ) {
                if( !Object.prototype.hasOwnProperty.call( settings.config, propertyName ) ) continue;
                
                // We're accessing settings.config property, name of property is not known ahead of time...
                // We are accessing known property names of this property.
                // Checks are made as we go on.
                const configItem = settings.config[propertyName]; // do not silence eslint
                const processedConfigItem = {};
                processedConfigItem.propertyName = propertyName;
                processedConfigItem.keyPath = `${packageKey}.${behaviorKey}.${propertyName}`;
                if( typeof configItem.title !== 'string' ) {
                    atom.notifications.addError(`Config item of '${settings.name}' behavior has no title set! Title is text to display on settings popup dialog so it must be set for all config items!`);
                    continue;
                }
                processedConfigItem.title = configItem.title;
                
                if( typeof configItem === 'object' ) {
                    if( typeof configItem.type === 'string' ) {
                        
                        if( configItem.type === 'boolean' ) {
                            processedConfigItem.type = 'boolean';
                            
                            // In case default is not present or not boolean, make it false by default
                            if( typeof configItem.default !== 'boolean' ) {
                                processedConfigItem.default = false;
                            } else {
                                processedConfigItem.default = configItem.default;
                            }
                            
                            processedConfigItem.description = '';
                            if( typeof configItem.description === 'string' ) {
                                processedConfigItem.description = configItem.description;
                            }
                            
                            behaviorSettingsDS.configItems.push( processedConfigItem );
                        } else if( configItem.type === 'string' ) {
                            processedConfigItem.type = 'string';
                            
                            // Do we have pre-set values?
                            if( typeof processedConfigItem.enum === 'object' && Array.isArray( processedConfigItem.enum ) ) {
                                
                            }
                        } else {
                            atom.notifications.addWarning(`${settings.name} behavior has unexpected config item of ${configItem.type} type.`);
                        }
                    }
                }
            }
        } else if( typeof settings.config !== 'undefined' ) {
            // No config for this behavior
            atom.notifications.addWarning(`${settings.name} behavior has unexpected config type, object is expected!`);
        }
        
        this._settings.set( behavior, behaviorSettingsDS );
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
        return this._settings;
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
