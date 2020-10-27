/* global atom */

import { CompositeDisposable, Disposable } from 'atom';
import { dom as $, default as etch } from 'etch';

etch.setScheduler(atom.views);

export class NavigationBarSettingsView {
    /**
     * Holds instance of {@link BehaviorSettingsManager} {@link this} belongs to.
     * @type {BehaviorSettingsManager}
     */
    _behaviorSettingsManager = null;
    
    /**
     * Holds subscriptions of listeners to events while config popup dialog is opened.
     * @type {CompositeDisposable}
     */
    _whileShownSubscriptions = null;
    
    constructor( props = {}/*, children = {}*/ ) {
        this._props = { ...{ hidden: true }, ...props };
        this._behaviorSettingsManager = props.behaviorSettingsManager;
        
        etch.initialize(this);
    }
    
    async destroy() {
        await etch.destroy(this);
    }
    
    update( newProps = {}/*, newChildren = {}*/ ) {
        this._props = { ...this._props, ...newProps };
        
        if( this._renderedItems ) {
            this._renderedItems.forEach( (item) => {
                if( typeof item.destroy === 'function' ) {
                    item.destroy();
                } else if( item.component && typeof item.component.destroy === 'function' ) {
                    item.component.destroy();
                }
            });
        }
        this._renderedItems = null;
        
        return etch.update(this);
    }
    
    onEventWhileShown( ev ) {
        // console.debug( 'onEventWhileShown', ev );
        
        // Safety check: we're here catching input only because
        // user have settings shown. So let's make sure it
        // is shown before we stop any event propagation...
        if( this.isHidden() ) {
            console.warn('NavigationBarSettings: Settings are hidden, onEventWhileShown handler should not be executed!');
            this.hide();
            return;
        }
        
        if( ev instanceof MouseEvent ) {
            // If click comes from outside of NavigationBarSettings,
            // then default behavior is to close.
            if( ev.path && Array.isArray( ev.path )
            && ev.path.includes( this.element ) === false ) {
                this.hide();
            }
        } else if( ev instanceof KeyboardEvent ) {
            // Close on escape, cancel etc.
            if( ev.key === 'Escape'
            || ev.key === 'Cancel' ) {
                ev.stopPropagation();
                this.hide();
            }
        }
    }
    
    show() {
        if( !this.isHidden() ) return;
        
        const that = this;
        const clickFunction = function (clickEvent) { that.onEventWhileShown(clickEvent); };
        const keydownFunction = function (keydownEvent) { that.onEventWhileShown(keydownEvent); };
        const touchstartFunction = function (touchstartEvent) { that.onEventWhileShown(touchstartEvent); };
        
        this._whileShownSubscriptions = new CompositeDisposable();
        this._whileShownSubscriptions.add( new Disposable( () => {
            document.removeEventListener( 'click', clickFunction );
            document.removeEventListener( 'keydown', keydownFunction, {capture: true} );
            document.removeEventListener( 'touchstart', touchstartFunction );
        }));

        document.addEventListener( 'click', clickFunction );
        // Need to use capture phase because bubbling phase is stopped somewhere...
        document.addEventListener( 'keydown', keydownFunction, {capture: true} );
        document.addEventListener( 'touchstart', touchstartFunction );
        
        this.update({ hidden: false });
    }
    
    hide() {
        if( this._whileShownSubscriptions ) this._whileShownSubscriptions.dispose();
        this._whileShownSubscriptions = null;
        
        this.update({ hidden: true });
    }
    
    isHidden() {
        return this._props.hidden === true;
    }
    
    toggle() {
        if( this._props.hidden ) {
            this.show();
        } else {
            this.hide();
        }
    }
    
    renderRadio( configItem ) {
        const selectedValue = atom.config.get( configItem.keyPath ) ?? configItem.default;
        
        const availableValues = [];
        if( configItem.predefinedValues ) {
            for( const enumItem of configItem.predefinedValues ) {
                const valueId = `${configItem.keyPath}.${enumItem.value}`;
                availableValues.push( $.li( {},
                    $.input({
                        id:      String( valueId ),
                        name:    String( configItem.keyPath ),
                        type:    'radio',
                        value:   String( enumItem.value ),
                        checked: selectedValue === enumItem.value,
                        on: {
                            change: (changeEvent) => {
                                atom.config.set( configItem.keyPath, changeEvent.target.value );
                                this._props.navigationBarView.update();
                            }
                        }
                    }),
                    $.label({
                        htmlFor: String( valueId )
                    },           String( enumItem.value ))
                ));
            }
        }
        return $.li( {},
            $.div( {}, configItem.title ),
            $.ol( {}, ...availableValues )
        );
    }
    
    renderCheckbox( configItem ) {
        const checked = atom.config.get( configItem.keyPath ) ?? configItem.default;
        return $.li( {},
            $.input({
                id:      String( configItem.keyPath ),
                name:    String( configItem.keyPath ),
                type:    'checkbox',
                class:   'input-checkbox',
                checked: checked,
                on: {
                    change: ( changeEvent ) =>
                    {
                        atom.config.set( configItem.keyPath, changeEvent.target.checked );
                        this._props.navigationBarView.update();
                    }
                }
            }),
            $.label({
                htmlFor: String( configItem.keyPath ),
                class:   'input-label'
            },           String( configItem.title ))
        );
    }
    
    prerender() {
        this._renderedItems = [];
        for( const [,behaviorSettings] of this._behaviorSettingsManager.getSettings() ) {
            for( const configItem of behaviorSettings.configItems ) {
                if( configItem.type === 'boolean' ) {
                    this._renderedItems.push( this.renderCheckbox( configItem ) );
                } else if( typeof configItem.desiredRepresentation === 'string' ) {
                    if( configItem.desiredRepresentation === 'radio' ) {
                        this._renderedItems.push( this.renderRadio( configItem ) );
                    }
                }
            }
        }
    }
        
    render() {
        const classList = [
            'navigation-bar-settings',
            'select-list',
            'popover-list'
        ];
        this._props.hidden ? classList.push( 'hidden' ) : '';
        
        const button = this._props.navigationBarView.getSettingsButton().element;
        const rect = button?.getBoundingClientRect() ?? { top: 0, height: 0, right: 0 };
        
        const styleList = new Array();
        styleList.push( 'position: absolute;' );
        styleList.push( `top: ${(rect.height)}px;` );
        styleList.push( 'right: 5px;' );
        styleList.push( 'width: 200px;' );
        styleList.push( 'height: auto;' );
        
        if( !this._renderedItems ) this.prerender();
        
        return $.div( { class: classList.join(' '), style: styleList.join(';') },
            $.ol( { class: 'list-group' },
                ...this._renderedItems
            )
        );
    }
    
    /**
     * Sets model for this component.
     * @param {BehaviorSettingsManager} behaviorSettingsManager
     */
    setModel( behaviorSettingsManager ) {
        this._behaviorSettingsManager = behaviorSettingsManager;
    }
}
