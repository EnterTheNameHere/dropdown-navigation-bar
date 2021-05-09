/* global atom */

import { CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved

import { NavigationBar } from './navigationBar';
import { NavigationBarView } from './navigationBarView';

import { outlineProviderRegistry } from './outlineProvider';

//import { logged } from './debug';

const identifiersProviders = new Set();

class DropdownNavigationBarPackage {
    _active = false;
    toggled = false;
    autoToggle = false;
    navigationBarView = null;
    subscriptions = null;
    panel = null;
    _visible = true;
    currentActiveEditor = null;

    //@logged
    activate() {
        if( this._active ) return;

        this.subscriptions = new CompositeDisposable();
        this.navigationBar = new NavigationBar();
        this.navigationBar.setProviders( identifiersProviders );

        this.panel = atom.workspace.addTopPanel({
            item: this.navigationBar.getView().element,
            visible: this._visible,
            className: 'dropdown-navigation-bar-panel'
        });

        this.subscriptions.add( atom.commands.add( 'atom-workspace', {
            'dropdown-navigation-bar:toggle': () => { this.toggle(); },
        }));

        this._active = true;
    }
    
    //@logged
    deactivate() {
        if( !this._active ) return;

        this.subscriptions.dispose();
        this.navigationBar.dispose();

        this.toggled = false;
        this._active = false;
    }

    //@logged
    toggle() {
        if( !this._active ) return;

        if( this._visible ) {
            this._visible = false;
            this.panel.hide();
            this.navigationBar.deactivate();
        } else {
            this._visible = true;
            this.navigationBar.activate();
            this.panel.show();
        }
    }
    
    //@logged
    navigationBarViewProvider( navigationBar ) {
        if( !(navigationBar instanceof NavigationBar) ) return null;

        const view = new NavigationBarView( { navigationBar: navigationBar } );
        return view;
    }
    
    consumeOutlineProvider( provider ) {
        console.log( 'consumeOutlineProvider()', provider );
        outlineProviderRegistry.addProvider(provider);
    }
    
    consumeIdentifiersProvider( provider ) {
        console.log( 'consumeIdentifiersProvider', provider );
        identifiersProviders.add( provider );
    }
}

module.exports = new DropdownNavigationBarPackage();
