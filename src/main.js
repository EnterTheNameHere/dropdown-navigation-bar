/* global atom */

import { CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved

import { NavigationBar } from './navigationBar';
import { NavigationBarView } from './navigationBarView';

class DropdownNavigationBarPackage {
    _active = false;
    toggled = false;
    autoToggle = false;
    navigationBarView = null;
    subscriptions = null;
    panel = null;
    _visible = true;
    currentActiveEditor = null;

    activate( serialized = {} ) {
        console.debug( 'DropdownNavigationBarPackage::activate', serialized );
        
        if( this._active ) return;

        this.subscriptions = new CompositeDisposable();
        this.navigationBar = new NavigationBar();

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

    deactivate() {
        console.debug( 'DropdownNavigationBarPackage::deactivate' );
        
        if( !this._active ) return;

        this.subscriptions.dispose();
        this.navigationBar.dispose();

        this.toggled = false;
        this._active = false;
    }

    toggle() {
        console.debug( 'DropdownNavigationBarPackage::toggle' );
        
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

    navigationBarViewProvider( navigationBar ) {
        if( !(navigationBar instanceof NavigationBar) ) return null;

        const view = new NavigationBarView();
        view.setModel( navigationBar );
        return view;
    }
}

module.exports = new DropdownNavigationBarPackage();
