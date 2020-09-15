/* global atom */

import { CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved
import { DropdownBoxView } from './dropdownBoxView';
import { NavigationBarSettingsButtonView } from './navigationBarSettingsButtonView';
import { NavigationBarSettingsView } from './navigationBarSettingsView';

import * as etch from 'etch';
/**
 * Shorthand for etch.dom
 */
const $ = etch.dom;

etch.setScheduler(atom.views);

export class NavigationBarView {
    _navigationBar = null;
    _subscriptions = null;

    constructor( props = {}/*, children = {}*/ ) {
        this.props = props;
        this._subscriptions = new CompositeDisposable();
        
        etch.initialize(this);
    }

    async destroy() {
        this._subscriptions.dispose();
        await etch.destroy(this);
    }

    update( newProps = {}/*, newChildren = {}*/ ) {
        this.props = {...this.props, ...newProps};



        return etch.update(this);
    }

    render() {
        return $.div(
            { class: 'dropdown-navigation-bar' },
            $(DropdownBoxView, { ref: 'leftDropbox' }),
            $(DropdownBoxView, { ref: 'rightDropbox' }),
            $(NavigationBarSettingsButtonView, { ref: 'settingsButton', navigationBarView: this }),
            $(NavigationBarSettingsView, { ref: 'settings', navigationBarView: this })
        );
    }

    getModel() {
        return this._navigationBar;
    }

    setModel( navigationBar ) {
        this._subscriptions.dispose();
        this._subscriptions = new CompositeDisposable();

        this._navigationBar = navigationBar;
    }
    
    /**
     * Returns instance of left {@link DropdownBoxView} (the one where classes etc. should be displayed)
     * @return {DropdownBoxView} Left DropdownBoxView
     */
    getLeftDropdownBox() {
        return this.refs.leftDropbox;
    }
    
    /**
     * Returns instance of right {@link DropdownBoxView} (the one where members of classes etc. should be displayed)
     * @return {DropdownBoxView} Right DropdownBoxView
     */
    getRightDropdownBox() {
        return this.refs.rightDropbox;
    }
    
    /**
     * Returns instance of {@link DropdownBoxSettingsButtonView} of this NavigationBarView.
     * @return {DropdownBoxSettingsButtonView} The button view.
     */
    getSettingsButton() {
        return this.refs.settingsButton;
    }
    
    /**
     * Returns instance of {@link NavigationBarSettings} associated with this NavigationBarView.
     * @return {NavigationBarSettings} The settings view.
     */
    getSettings() {
        return this.refs.settings;
    }
}
