/* global atom */

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
     * Holds {@link BehaviorSettingsDataStructure}s for Behavior.
     * @type {Map<Behavior,BehaviorSettingsDataStructure>}
     */
    _settings = new Map();
    
    /**
     * Holds subscription to atom.config.onDidChange for Behavior.
     * @type {Map<Behavior,Disposable>}
     */
    _watchBehaviorSettingsSubscriptions = new Map();
    
    /**
     * Registers Behavior's settings if it provides any.
     * @param {Behavior} behavior Behavior with (optional) settings() function.
     */
    registerBehavior( behavior ) {
        if( typeof behavior.settings === 'function' ) {
            const behaviorSettings = this.processBehaviorSettings( behavior );
            this._settings.set( behavior, behaviorSettings );
            
            this.mapSettingsToAtomConfig( behaviorSettings );
        }
    }
    
    /**
     * Unregisters Behavior's settings if it provides any.
     * @param {Behavior} behavior Behavior with (optional) settings() function.
     */
    unregisterBehavior( behavior ) {
        const disposeHandler = this._watchBehaviorSettingsSubscriptions.get( behavior );
        if( disposeHandler ) {
            disposeHandler.dispose();
            this._watchBehaviorSettingsSubscriptions.delete( behavior );
        }
        this.settings.delete( behavior );
    }
    
    /**
     * Returns {@link BehaviorSettingsDataStructure}.
     *
     * @param  {Behavior} behavior             Must implement settings() function.
     * @return {BehaviorSettingsDataStructure} Behavior's settings datastructure.
     */
    processBehaviorSettings( behavior ) {
        // Behavior's settings.
        const settings = behavior.settings();
        
        // Holds Behavior's settings processed to DataStructures.
        const settingsItems = new Array();
        
        // Settings could be stored as array...
        if( Array.isArray( settings ) ) {
            if( settings.length > 0 ) {
                for( const item of settings ) {
                    const itemDS = this.processItem( item );
                    if( itemDS ) settingsItems.push( itemDS );
                }
            }
        } else {
            const itemDS = this.processItem( settings );
            if( itemDS ) settingsItems.push( itemDS );
        }
        
        if( settingsItems.length === 0 ) {
            throw new Error('Behavior settings must have at least one item!');
        }
        
        return { behavior: behavior, settingsItems: settingsItems };
    }
    
    /**
     * Returns {@link SettingsItemDataStructure}.
     * @param  {object} settingsItem       Settings item from Behavior's settings.
     * @return {SettingsItemDataStructure} Settings item's datastructure.
     */
    processItem( settingsItem ) {
        if( !Object.prototype.hasOwnProperty.call( settingsItem, 'type' ) ) {
            throw new Error('Settings item is missing "type" property! "type" defines type of settings item like checkbox etc.');
        }
        
        if( settingsItem.type === 'group' ) {
            return this.buildGroupDataStructure( settingsItem );
        } else if( settingsItem.type === 'checkbox' ) {
            return this.buildCheckboxDataStructure( settingsItem );
        }
        
        throw new Error(`Settings item has unknown type! ${settingsItem.type}`);
    }
    
    /**
     * Returns {@link SettingsGroupDataStructure}.
     * @example
     * return {
     *     type: 'group',
     *     text: 'What will be displayed in header',
     *     items: {
     *         // more settings items here
     *     }
     * }
     * @param {object} group Settings group from Behavior's settings.
     * @param {string} group.type  Equals "group".
     * @param {string} group.text  Text to show as header to group of controls.
     * @param {array}  group.items Array of settings items to group together.
     * @returns {SettingsGroupDataStructure} Group datastructure.
     */
    buildGroupDataStructure( group ) {
        if( group.type === 'group' ) {
            // Group must have text to display in header
            if( !Object.prototype.hasOwnProperty.call( group, 'text' ) ) {
                throw new Error('group is missing "text" property! "text" specifies text to show as header to group of controls.');
            }
            
            // Group must have group of settings under it...
            if( !Object.prototype.hasOwnProperty.call( group, 'items' ) ) {
                throw new Error('group is missing "items" property! "items" specifies array of settings items to group together.');
            }
            
            if( !Array.isArray( group.items ) ) {
                throw new Error('group items property is expected to be an array!');
            }
            
            const groupItems = new Array();
            for( const item of group.items ) {
                const itemDS = this.processItem( item );
                if( itemDS ) groupItems.push( itemDS );
            }
            
            return { type: 'group', text: group.text, items: groupItems };
        }
        
        throw new Error(`Settings group is expected, but type "${group.type}" received!`);
    }
    
    /**
     * Returns settings checkbox datastructure.
     * @example
     * return {
     *     type: 'checkbox',
     *     keyPath: 'behaviorName.settingName',
     *     property: 'BehaviorPropertyName'
     *     text: 'text to display',
     *     desc: 'description to show if user hover over text', // optional
     *     default: true | false // optional; false is default
     * }
     * @param {object}  checkbox Settings checkbox from Behavior's settings.
     * @param {string}  checkbox.type            Equals "checkbox".
     * @param {string}  checkbox.keyPath         Atom config key path under which the checkbox's value is stored.
     * @param {string}  checkbox.property        Name of property of Behavior object instance which maps to checkbox value.
     * @param {string}  checkbox.text            Text to show next to checkbox.
     * @param {boolean} [checkbox.default=false] Default value.
     * @param {string}  [checkbox.desc]          Text to show if user hovers over checkbox's text. Should be used to give more details.
     * @return {SettingsItemDataStructure} Checkbox datastructure.
     */
    buildCheckboxDataStructure( checkbox ) {
        if( checkbox.type === 'checkbox' ) {
            // Settings must have keyPath mapping to atom config key...
            if( !Object.prototype.hasOwnProperty.call( checkbox, 'keyPath' ) ) {
                throw new Error('checkbox is missing "keyPath" property! "keyPath" specifies atom config '
                + 'key path under which the checkbox\'s value is stored.');
            }
            
            // Settings must have property of Behavior instance it will map to...
            if( !Object.prototype.hasOwnProperty.call( checkbox, 'property' ) ) {
                throw new Error('checkbox is missing "property" property! "property" specifies name of property '
                + 'of Behavior object instance which maps to checkbox value.');
            }
            
            // Without text the checkbox kinda have no useful meaning...
            if( !Object.prototype.hasOwnProperty.call( checkbox, 'text' ) ) {
                throw new Error('checkbox is missing "text" property! "text" specifies text to show next to checkbox.');
            }
            
            // false is default value
            const defaultValue = Object.prototype.hasOwnProperty.call( checkbox, 'default' ) ? checkbox.default : false;
            const description = Object.prototype.hasOwnProperty.call( checkbox, 'desc' ) ? checkbox.desc : '';
            
            // keyPath is expected to begin with
            let startAt = 0;
            let keyPath = '';
            // 'dropdown-navigation-bar'
            if( checkbox.keyPath.startsWith( packageJSON.name ) ) {
                startAt = packageJSON.name.length + 1;
            }
            keyPath += `${packageJSON.name}.`;
            // followed by 'behaviors'
            if( checkbox.keyPath.startsWith( 'behavior.' , startAt )) {
                // Use plural...
                startAt += 9;
            } else if( checkbox.keyPath.startsWith( 'behaviors.', startAt )) {
                startAt += 10;
            }
            keyPath += 'behaviors.';
            // and then the Behavior's settings item keyPath itself
            keyPath += checkbox.keyPath.substring( startAt );
            
            return {
                type: 'checkbox',
                keyPath: keyPath,
                property: checkbox.property,
                text: checkbox.text,
                default: defaultValue,
                desc: description
            };
        }
        
        throw new Error(`Settings checkbox is expected, but type "${checkbox.type}" received!`);
    }
    
    /**
     * Maps settings items to atom config key paths.
     * @param {BehaviorSettingsDataStructure} behaviorSettings Behavior Settings datastructure.
     */
    mapSettingsToAtomConfig( behaviorSettings ) {
        const behavior = behaviorSettings.behavior;
        for( const item of behaviorSettings.settingsItems ) {
            // Skip group
            if( item.type === 'group' ) continue;
            
            // First we load the setting from atom's config...
            behavior[item.property] = atom.config.get( item.keyPath, item.default );
            
            // Watch for change of setting
            this._watchBehaviorSettingsSubscriptions.set( behavior,
                atom.config.onDidChange( item.keyPath, ({ newValue }) => {
                    behavior[item.property] = newValue;
                    if( typeof behavior.settingsChanged === 'function' ) {
                        behavior.settingsChanged();
                    }
                })
            );
        }
    }
}


/**
 * @typedef {Object} BehaviorSettingsDataStructure
 * @property {Object} behavior
 * @property {Array<SettingsItemDataStructure>} settingsItems
 * @private
 */

/**
 * @typedef {Object} SettingsItemDataStructure
 * @property {string}  type      "checkbox"
 * @property {string}  keyPath   Atom config key path under which the items's value is stored.
 * @property {string}  property  Name of property of Behavior object instance which maps to item's value.
 * @property {string}  text      Text to show next to checkbox.
 * @property {boolean} default   Default value.
 * @property {string}  desc      Text to show if user hovers over item's text. Should be used to give more details.
 * @private
 */

/**
 * @typedef {Object} SettingsGroupDataStructure
 * @property {string}                           type        Equals "group"
 * @property {string}                           text        Text to show as header to group of controls.
 * @property {Array<SettingsItemDataStructure>} items Array of settings items to group together.
 * @private
 */
