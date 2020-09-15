/* global atom */

import { CompositeDisposable, Disposable } from 'atom';
import { dom as $, default as etch } from 'etch';

etch.setScheduler(atom.views);

export class NavigationBarSettingsView {
    _itemsList = new Array();
    _whileShownSubscriptions = null;
    
    constructor( props = {}/*, children = {}*/ ) {
        this._props = { ...{ hidden: true }, ...props };
        
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
    
    addSettings( settings ) {
        this._itemsList.push( settings );
        
        this.update();
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
        
        const renderCheckbox = ( item ) => {
            const checked = atom.config.get( `dropdown-navigation-bar.${item.keyPath}`, item.default );
            return [
                $.input({
                    id: String(item.keyPath),
                    name: String(item.keyPath),
                    type: 'checkbox',
                    class: 'input-checkbox',
                    checked: checked,
                    on: { change: ( changeEvent ) => {
                        atom.config.set( `dropdown-navigation-bar.${item.keyPath}`, changeEvent.target.checked );
                        this._props.navigationBarView.update();
                    }}
                }),
                $.label({
                    htmlFor: String(item.keyPath),
                    class: 'input-label'
                }, String(item.shortDesc)
                )
            ];
        };
        
        const renderGroup = ( group ) => {
            return $.fieldset( {},
                $.legend( { class: 'panel-heading' }, group.desc ),
                group.items.map( ( item ) => { return $.div( {}, renderItem( item ) ); } )
            );
        };
        
        const renderItem = ( item ) => {
            // Check if multiple items are grouped
            // inside an array... Process the array
            // in that case.
            if( !item.type && Array.isArray( item ) ) {
                if( item.length > 0 && item[0].type ) {
                    for( const subItem of item ) {
                        return renderItem( subItem );
                    }
                }
            }
            
            if( item.type === 'checkbox' ) return renderCheckbox( item );
            else if( item.type === 'group' ) return renderGroup( item );
            else if( !item.type ) return $.span( {}, 'Error, item doesn\'t have a type property set.' );
            return $.span( {}, `Error, item.type of '${item?.type}' has no rendering handler.` );
        };
        
        if( !this._renderedItems ) {
            this._renderedItems = new Array();
            
            for( const item of this._itemsList ) {
                this._renderedItems.push( $.li( {}, renderItem( item ) ) );
            }
        }
        
        return $.div( { class: classList.join(' '), style: styleList.join(';') },
            $.ol( { class: 'list-group' },
                ...this._renderedItems
            )
        );
    }
}
