/* global atom */

import { CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved
import { DropdownBoxView } from './dropdownBoxView';
import { DropdownBoxSettingsButtonView } from './dropdownBoxSettingsButtonView';
import { Identifier } from './identifier';
import { EmptyIdentifier } from './emptyIdentifier';

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

        this.refs.leftDropbox.onDidChangeSelected( (event) => {
            //console.log( 'onDidChangeSelected left', event.item );
            this.getModel().setSelectedIdentifier( event.item );
            const pos = event.item.getStartPosition();
            if( pos ) {
                this.getModel()._previousActiveEditor.setCursorBufferPosition( pos );
            }
        });
        this.refs.rightDropbox.onDidChangeSelected( (event) => {
            //console.log( 'onDidChangeSelected right', event.item );
            this.getModel().setSelectedIdentifier( event.item );
            const pos = event.item instanceof EmptyIdentifier
                ? event.item.getEndPosition()
                : event.item.getStartPosition();
            if( pos ) {
                this.getModel()._previousActiveEditor.setCursorBufferPosition( pos );
            }
        });
    }

    async destroy() {
        this._subscriptions.dispose();
        await etch.destroy(this);
    }

    update( newProps = {}/*, newChildren = {}*/ ) {
        this.props = {...this.props, ...newProps};



        return etch.update(this);
    }

    updateDropdownBoxes() {
        let parentIdentifiers = new Array();
        let childrenIdentifiers = new Array();
        let parentSelectedIndex = 0;
        let childrenSelectedIndex = 0;

        const textEditor = atom.workspace.getActiveTextEditor();
        const provider = this.getModel().getProviderForTextEditor( textEditor );
        if( provider ) {
            //provider.generateIdentifiers();
            const selectedIdentifier = this.getModel().getSelectedIdentifier() ?? provider.getTopScopeIdentifier();
            parentIdentifiers = provider.getIdentifiersForParentsDropbox();
            if( selectedIdentifier.hasChildren() ) {
                childrenIdentifiers = provider.getIdentifiersForChildrenDropbox( selectedIdentifier );
            } else {
                childrenIdentifiers = provider.getIdentifiersForChildrenDropbox( selectedIdentifier.getParent() );
            }

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
                    if( selectedIdentifier instanceof EmptyIdentifier ) {
                        // EmptyIdentifier should be the topmost item
                        childrenSelectedIndex = 0;
                    } else {
                        // Sh... The selectedIdentifier is not in childrenIdentifiers...
                        childrenSelectedIndex = 0;
                        console.error( 'NavigationBarView::updateDropdownBoxes',
                            'SelectedIdentifier is not found in childrenIdentifiers array!',
                            selectedIdentifier, parentIdentifiers );
                    }
                }
            }
        }

        const renderItem = ( item ) => {
            if( item instanceof Identifier ) {
                let name = '';
                if( item.isKind('multiple') ) {
                    const children = item.getChildren().map( (child) => {
                        const kinds = child.getKind().map( (kind) => `[${kind}]` ).join(' ');
                        const additionals = Array.from( child.getAdditionalDataMap() ).map( (value) => {
                            return `{${value[0]}=${value[1]}}`;
                        } ).join(' ');
                        const childName = child.getName();
                        return ( kinds ? `${kinds} ` : '' ) + childName + ( additionals ? ` ${additionals}` : '' );
                    });

                    name = children.join(' ');
                } else {
                    name = item.getName();
                }

                if( item.isKind('function') || item.isKind('method') ) {
                    name += '(';
                    const paramsPart = item.getChildren().map( (param) => { return param.getName(); } ).join(', ');
                    name += paramsPart ? ` ${paramsPart} ` : '';
                    name += ')';
                }

                const kinds = item.getKind().map( (kind) => `[${kind}]` ).join(' ');
                const additionals = Array.from( item.getAdditionalDataMap() ).map( (value) => `{${value[0]}=${value[1]}}` ).join(' ');

                const start = item.getStartPosition();
                const end = item.getEndPosition();
                const positions = ` <${start?`${start.row}:${start.column}`:'x:x'}-${end?`${end.row}:${end.column}`:'x:x'}>`;

                //return `${(kinds?`${kinds} `:'')}${name}${(additionals?` ${additionals}`:'')}${positions}`;
                const getIconSpan = () => {
                    if( item.isKind('const') ) return $.span( {class: 'icon variable'}, 'const' );
                    if( item.isKind('let') ) return $.span( {class: 'icon variable'}, 'let' );
                    if( item.isKind('var') ) return $.span( {class: 'icon variable'}, 'var' );
                    if( item.isKind('class') ) return $.span( {class: 'icon class'}, 'class' );
                    if( item.isKind('function') ) return $.span( {class: 'icon function'}, 'func' );
                    if( item.isKind('constructor') ) return $.span( {class: 'icon constructor'}, 'func' );
                    if( item.isKind('method') ) return $.span( {class: 'icon method'}, 'func' );
                    if( item.isKind('property') ) return $.span( {class: 'icon property'}, 'prop' );
                    return $.span( {class: 'icon'}, '' );
                };

                return [
                    getIconSpan(),
                    $.span( {class: 'name'}, name ),
                    $.span( {class: 'debug'}, kinds ),
                    $.span( {class: 'debug'}, additionals ),
                    $.span( {class: 'debug'}, positions ),
                ];
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
        this._subscriptions.add( this._navigationBar.onDidChangeActiveTextEditor( () => {
            this.updateDropdownBoxes();
        }));
        this._subscriptions.add( this._navigationBar.onDidChangeSelectedIdentifier( () => {
            this.updateDropdownBoxes();
        }));
    }
}
