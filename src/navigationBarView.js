/* global atom */

import { CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved
import { DropdownBoxView } from './dropdownBoxView';
import { DropdownBoxSettingsButtonView } from './dropdownBoxSettingsButtonView';
import { Identifier } from './identifier';

const etch = require('etch');
const $ = etch.dom;

export class NavigationBarView {
    _navigationBar = null;
    _subscriptions = null;

    constructor( props = {}/*, children = {}*/ ) {
        this.props = props;
        this._subscriptions = new CompositeDisposable();

        etch.initialize(this);
    }

    async destroy() {
        this._subscriptions.destroy();
        await etch.destroy(this);
    }

    update( newProps = {}/*, newChildren = {}*/ ) {
        this.props = {...this.props, ...newProps};



        return etch.update(this);
    }

    updateDropdownBoxes() {
        //console.log('NavigationBarView::updateDropdownBoxes');

        let parentIdentifiers = null;
        let childrenIdentifiers = null;
        let parentSelectedIndex = 0;
        let childrenSelectedIndex = 0;

        const textEditor = atom.workspace.getActiveTextEditor();
        if( textEditor ) {
            const provider = this.getModel().getProviderForTextEditor( textEditor );
            provider.generateIdentifiers();
            let selectedIdentifier = this.getModel().getSelectedIdentifier();
            if( !selectedIdentifier ) selectedIdentifier = provider.getTopScopeIdentifier();
            parentIdentifiers = provider.getIdentifiersForParentsDropbox();
            childrenIdentifiers = provider.getIdentifiersForChildrenDropbox( selectedIdentifier );
            parentSelectedIndex = 0;
            childrenSelectedIndex = 0;

            // Is selectedIdentifier a parent identifier?
            let index = parentIdentifiers.findIndex( (identifier) => {
                return identifier.getID() === selectedIdentifier.getID();
            });

            if( index !== -1 ) {
                // selectedIdentifier is a parent identifier...
                // We can use index as a parent identifier index
                parentSelectedIndex = index;
                childrenSelectedIndex = 0;
            } else {
                // selectedIdentifier is a child...
                // We need to find parent's index...
                const parent = selectedIdentifier.getParent();
                if( parent ) {
                    index = parentIdentifiers.findIndex( (identifier) => {
                        return identifier.getID() === parent.getID();
                    });

                    if( index !== -1 ) {
                        parentSelectedIndex = index;
                    } else {
                        // Sh... The parent of selectedIdentifier is not in parentIdentifiers...
                        parentSelectedIndex = 0;
                        console.error( 'NavigationBarView::updateDropdownBoxes',
                            'SelectedIdentifier\'s parent is not found in parentIdentifiers array!',
                            parent, parentIdentifiers );
                    }
                } else {
                    parentSelectedIndex = 0;
                    console.error( 'NavigationBarView::updateDropdownBoxes',
                        'Parent of selectedIdentifier is not a valid Identifier!',
                        selectedIdentifier );
                }

                // And we need to find child's index too...
                index = childrenIdentifiers.findIndex( (identifier) => {
                    return Identifier.areEqual( selectedIdentifier, identifier );
                });

                if( index !== -1 ) {
                    childrenSelectedIndex = index;
                } else {
                    // Sh... The selectedIdentifier is not in childrenIdentifiers...
                    childrenSelectedIndex = 0;
                    console.error( 'NavigationBarView::updateDropdownBoxes',
                        'SelectedIdentifier is not found in childrenIdentifiers array!',
                        selectedIdentifier, parentIdentifiers );
                }
            }
        } else {
            // No text editor means no identifiers...
            parentIdentifiers = new Array();
            childrenIdentifiers = new Array();
            parentSelectedIndex = 0;
            childrenSelectedIndex = 0;
        }

        const renderItem = ( item ) => {
            if( item instanceof Identifier ) {
                return [
                    item.getKind().map( (kind) => `[${kind}]` ).join(' '),
                    item.getName(),
                    Array.from( item.getAdditionalDataMap() ).map( (value) => `[${value[0]},${value[1]}]` ).join(' ')
                ].join(' ');
            }

            return '';
        };

        this.refs.leftDropbox.update({
            items: parentIdentifiers,
            selectedIndex: parentSelectedIndex,
            itemRenderer: renderItem,
        });
        this.refs.rightDropbox.update({
            items: childrenIdentifiers,
            selectedIndex: childrenSelectedIndex,
            itemRenderer: renderItem,
        });
    }

    render() {
        return $.div(
            { class: 'dropdown-navigation-bar' },
            $(DropdownBoxView, { ref: 'leftDropbox' }),
            $(DropdownBoxView, { ref: 'rightDropbox' }),
            $(DropdownBoxSettingsButtonView, {})
        );
    }

    getModel() {
        return this._navigationBar;
    }

    setModel( navigationBar ) {
        this._subscriptions.dispose();
        this._subscriptions = new CompositeDisposable();

        this._navigationBar = navigationBar;
        this._subscriptions.add( this._navigationBar.onDidChangeTextEditor( () => {
            this.updateDropdownBoxes();
        }));
        this._subscriptions.add( this._navigationBar.onDidChangeSelectedIdentifier( () => {
            this.updateDropdownBoxes();
        }));
    }
}
