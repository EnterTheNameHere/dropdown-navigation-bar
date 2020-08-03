/* global atom */

import { CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved

import { NavigationBar } from './navigationBar';
import { NavigationBarView } from './navigationBarView';

class DropdownNavigationBarPackage {
    active = false;
    toggled = false;
    autoToggle = false;
    navigationBarView = null;
    subscriptions = null;
    editorSubscriptions = null;
    panel = null;
    visible = true;
    currentActiveEditor = null;

    activate( serialized = {} ) {
        if( this.active ) return;

        console.log( 'DropdownNavigationBarPackage::activate', serialized );

        this.deserialize( serialized );

        this.subscriptions = new CompositeDisposable();
        this.editorSubscriptions = new CompositeDisposable();
        this.navigationBar = new NavigationBar();

        this.panel = atom.workspace.addTopPanel({
            item: this.navigationBar.getView().element,
            visible: this.visible,
            className: 'dropdown-navigation-bar-panel'
        });

        this.subscriptions.add( atom.commands.add( 'atom-workspace', {
            'dropdown-navigation-bar:toggle': () => this.toggle(),
        }));

        if( this.autoToggle ) {
            this.toggle();
        }

        this.active = true;
    }

    deactivate() {
        console.log( 'DropdownNavigationBarPackage::deactivate' );
        if( !this.active ) return;

        this.subscriptions.dispose();
        this.navigationBar.destroy();

        this.toggled = false;
        this.active = false;
    }

    toggle() {
        console.log( 'DropdownNavigationBarPackage::toggle' );
        if( !this.active ) return;

        if( this.toggled ) {
            this.toggled = false;
        } else {
            this.toggled = true;
        }

        if( this.visible ) {
            this.visible = false;
            this.panel.show();
        } else {
            this.visible = true;
            this.panel.hide();
        }
    }

    navigationBarViewProvider( navigationBar ) {
        if( !(navigationBar instanceof NavigationBar) ) return null;

        const view = new NavigationBarView();
        view.setModel( navigationBar );
        return view;
    }

    serialize() {
        console.log( 'DropdownNavigationBarPackage::serialize' );

        return {
            autoToggle: this.autoToggle,
        };
    }

    deserialize( serialized = {} ) {
        console.log( 'DropdownNavigationBarPackage::deserialize', serialized );

        if( Object.prototype.hasOwnProperty.call( serialized, 'autoToggle' ) ) {
            this.autoToggle = serialized.autoToggle;
        }
    }
}

module.exports = new DropdownNavigationBarPackage();
