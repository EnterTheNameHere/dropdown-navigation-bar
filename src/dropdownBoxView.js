/* global atom */

import { CompositeDisposable, Disposable, Emitter } from 'atom'; // eslint-disable-line import/no-unresolved
import { DropdownBoxItemWrapperView } from './dropdownBoxItemWrapperView';
import { DropdownBoxEvent } from './dropdownBoxEvent';
export { DropdownBoxEvent };

import * as etch from 'etch';
/**
 * Shorthand for etch.dom
 */
const $ = etch.dom;

etch.setScheduler(atom.views);

/**
 * DropdownBoxView
 */
export class DropdownBoxView {
    /**
     * Holds an instance of event {@link Emitter}.
     *
     * @type {Emitter}
     *
     * @private
     */
    emitter = new Emitter();

    /**
     * Holds currently highlighted item on dropdown list.
     *
     * @type {number}
     *
     * @private
     */
    highlightedIndex = -1;

    /**
     * Holds an array of {@link DropdownBoxItemWrapperView}s displayed on dropdown list.
     *
     * @type {Array<DropdownBoxItemWrapperView>}
     *
     * @private
     */
    listItems = null;

    /**
     * When dropdown is opened, holds subscriptions to various events handling input.
     *
     * @type {CompositeDisposable}
     *
     * @private
     */
    dropdownSubscriptions = null;

    /**
     * Holds etch component properties.
     *
     * @type {Object}
     *
     * @private
     */
    props = null;

    /**
     * Creates new DropdownBoxView.
     *
     * @param {Object}                                 [props]                 - Component (etch) props object.
     * @param {Array<Object>}                          [props.items]           - An array of items to populate DropdownBox.
     * @param {number}                                 [props.selectedIndex=0] - Which item to display in header.
     * @param {function(item: Object): string|Element} [props.itemRenderer]    - Function taking item and returning Element or text to display in DropdownBox.
     */
    constructor( props = {} /*, children = {} */ ) {
        this.props = {
            ...{
                items: [],
                selectedIndex: 0,
                itemRenderer: null,
                dropdownOpened: false,
            },
            ...props
        };

        etch.initialize(this);
    }

    /**
     * Updates the state of DropdownBox. Does not fire any event.
     * Etch framework function implementation.
     *
     * @param {Object}                                 [newProps]               - Component (etch) props object. Set properties you want to change.
     * @param {Array<Object>}                          [newProps.items]         - An array of items to populate DropdownBox.
     * @param {number}                                 [newProps.selectedIndex] - Which item to display in header.
     * @param {function(item: Object): string|Element} [newProps.itemRenderer]  - Function taking item and returning Element or text to display in DropdownBox.
     *
     * @return {Promise}
     */
    update( newProps = {} /*, newChildren = {} */ ) {
        if( Object.prototype.hasOwnProperty.call( newProps, 'items' ) ) {
            // New items, so 'reset' selection and highlight.
            this.highlightedIndex = -1;
            if( !Object.prototype.hasOwnProperty.call( newProps, 'selectedIndex' ) ) {
                this.props.selectedIndex = 0;
            }
        }

        this.props = {...this.props, ...newProps};
        return etch.update(this);
    }

    /**
     * Releases all resources and Elements of DropdownBox.
     * Etch framework function implementation.
     *
     * @return {Promise}
     */
    async destroy() {
        await etch.destroy(this);
    }

    /**
     * Returns Element representing visual part of DropdownBox
     * component ready to add into HTML page DOM.
     * Etch framework function implementation.
     *
     * @return {Element}
     */
    render() {
        return $.div(
            { class: 'dropdown-box' },
            this.renderHeader(),
            this.renderList(),
        );
    }

    /**
     * Returns Element of {@link DropdownBoxView}'s header,
     * contaning selected item's value and up/down button.
     *
     * @return {Element}
     *
     * @private
     */
    renderHeader() {
        return $.div({ class: 'dropdown-box-header', on:{ click: this.toggleDropdown }},
            this.renderHeaderItem(),
            this.renderDropdownButton(),
        );
    }

    /**
     * Returns Element with value of {@link DropdownBox#getSelectedItem()}
     * item to be displayed in header.
     *
     * @return {Element}
     *
     * @private
     */
    renderHeaderItem() {
        return $.div(
            { class: 'dropdown-box-item' },
            this.renderItem( this.getSelectedItem() )
        );
    }

    /**
     * Returns Element of up/down button opening or closing dropdown.
     *
     * @return {Element}
     *
     * @private
     */
    renderDropdownButton() {
        const upOrDown = this.isDropdownOpened() ? 'up' : 'down';
        return $.button({
            class: `btn btn-default icon icon-chevron-${upOrDown}`,
        });
    }

    /**
     * Returns dropdown list Element with {@link DropdownBoxItemWrapperView}s as children.
     *
     * @return {Element}
     *
     * @private
     */
    renderList() {
        const hiddenClass = this.isDropdownOpened() ? '' : ' hidden';
        return $.div({ class: `dropdown-box-list select-list popover-list${hiddenClass}` },
            $.ol({ class: 'list-group' },
                this.renderListItems(),
            )
        );
    }

    /**
     * Returns an array of {@link DropdownBoxItemWrapperView}s
     * created by going through each item in props.items.
     *
     * @return {Array<DropdownBoxItemWrapperView>}
     *
     * @private
     */
    renderListItems() {
        const selectedIndex = this.getSelectedIndex();
        const highlightedIndex = this.getHighlightedIndex();
        this.listItems = this.getItems().map( ( item, index ) => {
            return $(DropdownBoxItemWrapperView, {
                selected: ( index === selectedIndex ),
                active: ( index === highlightedIndex ),
                eventHandlers:{
                    click: () => { this.confirmSelection(); },
                    mouseover: () => { this.changeHighlightedToIndex(index); },
                },
            }, this.renderItem( item ) );
        });
        return this.listItems;
    }

    /**
     * Returns text or Element to display on dropdown box item.
     *
     * Steps:
     * 1) If item is null or undefined, return empty string.
     * 2) If user provided props.itemRenderer function to {@link DropdownBoxView#constructor}
     *     it will be called with item as an argument. Value returned by props.itemRenderer
     *     is then returned by this function.
     * 3) If item is primitive, return it's value as string.
     * 4) Else, if item has element property, eg. might be some component, return the element.
     * 5) Else, if item has item.render function it will be called. Value returned by the
     *     item.render function is then returned by this function.
     * 6) Else, if item has item.text property, then value of item.text is returned by this
     *     function.
     * 7) If neither of previous steps produce value, return a note to provide a way to get value.
     *
     * @param  {object} item Any object representing
     * @return {string|Element}
     *
     * @private
     */
    renderItem( item ) {
        if( item !== null && item !== undefined ) {
            // Did user supplied itemRenderer function to DropdownBoxView?
            if( this.props.itemRenderer && typeof( this.props.itemRenderer ) === 'function' ) {
                const renderedItem = this.props.itemRenderer( item );
                if( renderedItem === undefined || renderedItem === null ) {
                    // function somehow failed to give us anything to display...
                    return 'Rendering function provided to DropdownBox failed to produce string or Element.';
                }
                return renderedItem;
            }
            // If object is primitive, return it's value...
            else if( typeof(item) === 'number'
            || typeof(item) === 'boolean'
            || typeof(item) === 'bigint'
            || typeof(item) === 'symbol' ) {
                return String(item);
            }
            else if( typeof(item) === 'string' ) {
                return item;
            }
            // Object might be component which has element property.
            else if( Object.prototype.hasOwnProperty.call( item, 'element' ) ) {
                return item.element;
            }
            // User can supply object which has it's own render function defined...
            else if( typeof(item.render) === 'function' ) {
                return item.render();
            }
            // User can supply object with text property set...
            else if( Object.prototype.hasOwnProperty.call( item, 'text' ) ) {
                return item.text;
            }
            // Well and if no way is found...
            return 'Please provide text property or a render function returning Element to display value of this item.';
        }

        // List Item might be null or undefined, in such case render
        // it as empty since we expect items array might be empty.
        return '';
    }

    /**
     * Opens or closes dropdown list.
     *
     * @emits did-close-dropdown if dropdown was opened.
     * @emits did-open-dropdown if dropdown was closed.
     */
    toggleDropdown() {
        if( this.isDropdownOpened() ) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    }

    /**
     * Returns true if dropdown list is opened, false otherwise.
     *
     * @return {boolean}
     */
    isDropdownOpened() {
        if( this.props.dropdownOpened === undefined ) this.props.dropdownOpened = false;
        if( typeof(this.props.dropdownOpened) !== 'boolean' ) this.props.dropdownOpened = false;

        return this.props.dropdownOpened;
    }

    /**
     * We need to check events fired when dropdown list is opened to
     * check if either user wants to close dropdown list by cancelling
     * selection, confirming selection or by completely clicking
     * outside of DropdownBox...
     * @param {Event} ev
     *
     * @private
     */
    onEventWhileDropdownOpened( ev ) {
        // Safety check: we're here catching input only because
        // user have dropdown opened. So let's make sure it
        // is opened before we stop any event propagation...
        if( !this.isDropdownOpened() ) {
            console.warn('DropdownBoxView: dropdown is closed, which it shouldn\'t be right now!');
            this.closeDropdown();
            return;
        }

        if( ev instanceof MouseEvent ) {
            // If click comes from outside of DropdownBox,
            // then default behavior is to cancel and close.
            if( ev.path && Array.isArray( ev.path )
            && ev.path.includes( this.element ) === false ) {
                this.cancelSelection();
            }
        } else if( ev instanceof KeyboardEvent ) {
            // Close on escape, cancel etc.
            if( ev.key === 'Escape'
            || ev.key === 'Cancel' ) {
                ev.stopPropagation();
                this.cancelSelection();
            }
            // Select on enter, accept etc.
            else if( ev.key === 'Enter'
            || ev.key === 'Accept'
            || ev.key === 'Commit'
            || ev.key === 'OK' ) {
                ev.stopPropagation();
                this.confirmSelection();
            }
            // Handle arrow movement
            else if( ev.key === 'ArrowUp' ) {
                ev.stopPropagation();
                this.highlightPrevious();
            } else if( ev.key === 'ArrowDown' ) {
                ev.stopPropagation();
                this.highlightNext();
            }
            // Hoping up and down...
            else if( ev.key === 'PageUp' ) {
                ev.stopPropagation();
                this.highlightFirst();
            } else if( ev.key === 'PageDown' ) {
                ev.stopPropagation();
                this.highlightLast();
            }
        }
    }

    /**
     * Opens dropdown list.
     *
     * @emits {did-open-dropdown}
     */
    openDropdown() {
        const newProps = {
            dropdownOpened: true,
        };

        const that = this;
        const clickFunction = function (clickEvent) { that.onEventWhileDropdownOpened(clickEvent); };
        const keydownFunction = function (keydownEvent) { that.onEventWhileDropdownOpened(keydownEvent); };
        const touchstartFunction = function (touchstartEvent) { that.onEventWhileDropdownOpened(touchstartEvent); };

        this.dropdownSubscriptions = new CompositeDisposable();
        this.dropdownSubscriptions.add( new Disposable( () => {
            document.removeEventListener( 'click', clickFunction );
            document.removeEventListener( 'keydown', keydownFunction, {capture: true} );
            document.removeEventListener( 'touchstart', touchstartFunction );
        }));

        document.addEventListener( 'click', clickFunction );
        // Need to use capture phase because bubbling phase is stopped somewhere...
        document.addEventListener( 'keydown', keydownFunction, {capture: true} );
        document.addEventListener( 'touchstart', touchstartFunction );

        this.update(newProps);
        this.emitter.emit( 'did-open-dropdown', new DropdownBoxEvent( this ) );
    }

    /**
     * Closes dropdown list.
     *
     * @emits {did-close-dropdown}
     */
    closeDropdown() {
        const newProps = {
            dropdownOpened: false,
        };

        this.dropdownSubscriptions.dispose();

        this.update(newProps);
        this.emitter.emit( 'did-close-dropdown', new DropdownBoxEvent( this ) );
    }

    /**
     * Notifies subscriber that dropdown list closed and is no longer visible.
     * @param  {function(arg: DropdownBoxEvent)} callback Function to invoke.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @event {did-close-dropdown}
     */
    onDidCloseDropdown( callback ) {
        return this.emitter.on( 'did-close-dropdown-list', callback );
    }

    /**
     * Notifies subscriber that dropdown list opened and is visible.
     * @param  {function(arg: DropdownBoxEvent)} callback Function to invoke.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @event {did-open-dropdown}
     */
    onDidOpenDropdown( callback ) {
        return this.emitter.on( 'did-open-dropdown-list', callback );
    }

    /**
     * Returns array of all DropdownBox's items.
     *
     * @return {Array<Object>}
     */
    getItems() {
        // We're expecting an array, so if user provided just
        // one object, well... We expect array, sorry...
        if( !this.props.items || !Array.isArray(this.props.items) ) {
            console.warn('DropdownBoxView is expecting props.items to be an array!');
            this.props.items = [];
        }
        return this.props.items;
    }

    /**
     * Return index of item in header under which it is stored in dropdown box's items array.
     *
     * @return {number}
     */
    getSelectedIndex() {
        if( typeof(this.props.selectedIndex) !== 'number' ) this.props.selectedIndex = 0;
        return this.props.selectedIndex;
    }

    /**
     * Returns item shown in header.
     *
     * @return {object|undefined} Returns undefined if nothing is found.
     */
    getSelectedItem() {
        return this.getItems()[this.getSelectedIndex()];
    }

    /**
     * Returns index of current selection in dropdown list.
     *
     * @return {number}
     */
    getHighlightedIndex() {
        if( typeof(this.highlightedIndex) !== 'number' ) this.highlightedIndex = -1;
        return this.highlightedIndex;
    }

    /**
     * Return item currently selected in dropdown list.
     *
     * @return {object|undefined} Returns undefined if nothing is found.
     */
    getHighlightedItem() {
        return this.getItems()[this.getHighlightedIndex()];
    }

    /**
     * Discards current selection and closes dropdown list.
     *
     * @emits {did-close-dropdown}
     * @emits {did-cancel-selection}
     */
    cancelSelection() {
        this.closeDropdown();

        this.emitter.emit( 'did-cancel-selection', new DropdownBoxEvent( this ) );
    }

    /**
     * Notifies subscriber that selection on dropdown box was canceled.
     *
     * @param  {function(arg: DropdownBoxEvent)} callback Function to invoke.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @event {did-cancel-selection}
     */
    onDidCancelSelection( callback ) {
        return this.emitter.on( 'did-cancel-selection', callback );
    }

    /**
     * Confirms current selection and closes dropdown list.
     *
     * @emits {did-change-selected}
     * @emits {did-close-dropdown}
     * @emits {did-confirm-selection}
     */
    confirmSelection() {
        this.changeSelected( this.getHighlightedIndex() );
        this.closeDropdown();

        this.emitter.emit( 'did-confirm-selection', new DropdownBoxEvent( this, this.getSelectedItem() ) );
    }

    /**
     * Notifies subscriber that selection on dropdown box was confirmed.
     * Selected item is passed as an argument to the callback function.
     *
     * @param  {function(arg: DropdownBoxEvent)} callback Function to invoke.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @event {did-confirm-selection}
     */
    onDidConfirmSelection( callback ) {
        return this.emitter.on( 'did-confirm-selection', callback );
    }

    /**
     * Changes selected item on dropdown box to item
     * stored itemIndex in dropdown box's items array.
     *
     * @param  {number} itemIndex
     *
     * @emits {did-change-selected}
     */
    changeSelected( itemIndex ) {
        const newProps = {
            selectedIndex: itemIndex,
        };

        this.update(newProps);
        this.emitter.emit( 'did-change-selected', new DropdownBoxEvent( this, this.getSelectedItem() ) );
    }

    /**
     * Notifies subscriber that new item was selected on dropdown box.
     * Selected item is passed as an argument to the callback function.
     *
     * @param  {function(arg: DropdownBoxEvent)} callback Function to invoke.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @event {did-change-selected}
     */
    onDidChangeSelected( callback ) {
        return this.emitter.on( 'did-change-selected', callback );
    }

    /**
     * Highlights previous item (the item above) in dropdown list.
     * Does nothing if list is empty.
     *
     * @emits {did-change-highlighted}
     */
    highlightPrevious() {
        this.changeHighlightedToIndex( this.getHighlightedIndex() - 1 );
    }

    /**
     * Highlights next item (the item below) in dropdown list.
     * Does nothing if list is empty.
     *
     * @emits {did-change-highlighted}
     */
    highlightNext() {
        this.changeHighlightedToIndex( this.getHighlightedIndex() + 1 );
    }

    /**
     * Highlights first item (the top-most) in dropdown list.
     * Does nothing if list is empty.
     *
     * @emits {did-change-highlighted}
     */
    highlightFirst() {
        this.changeHighlightedToIndex( 0 );
    }

    /**
     * Highlights last item (the bottom-least) in dropdown list.
     * Does nothing if list is empty.
     *
     * @emits {did-change-highlighted}
     */
    highlightLast() {
        this.changeHighlightedToIndex( this.getItems().length - 1 );
    }

    /**
     * Changes highlighted item in dropdown list to item stored
     * in props.items under given index. Does nothing if list
     * is empty.
     *
     * @param {number} index
     *
     * @emits {did-change-highlighted}
     */
    changeHighlightedToIndex( index = 0 ) {
        const items = this.getItems();
        if( !items.length ) {
            this.highlightedIndex = -1;
            return;
        }

        if( typeof(index) !== 'number' ) return;

        const oldIndex = this.getHighlightedIndex();

        if( index < 0 ) {
            this.highlightedIndex = 0;
        } else if( index > (items.length - 1) ) {
            this.highlightedIndex = items.length - 1;
        } else {
            this.highlightedIndex = index;
        }

        if( oldIndex !== this.highlightedIndex ) {
            // oldIndex comes from this object, not from outside
            // eslint-disable-next-line security/detect-object-injection
            const oldIndexComponent = this.listItems[oldIndex]?.component;
            if( oldIndexComponent ) {
                oldIndexComponent.update({ active: false });
            }

            const newIndexComponent = this.listItems[this.highlightedIndex].component;
            if( newIndexComponent ) {
                newIndexComponent.update({ active: true });

                if( typeof(newIndexComponent.element.scrollIntoViewIfNeeded) === 'function' ) {
                    newIndexComponent.element.scrollIntoViewIfNeeded(false);
                } else {
                    newIndexComponent.element.scrollIntoView(false);
                }
            }
        }

        this.emitter.emit( 'did-change-highlighted', new DropdownBoxEvent( this, this.getHighlightedItem() ) );
    }

    /**
     * Notifies subscriber that new item in dropdown list was highlighted.
     * Highlighted item is passed as an argument to the callback function.
     * @param  {function(arg: DropdownBoxEvent)} callback Function to invoke.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @event {did-change-highlighted}
     */
    onDidChangeHighlighted( callback ) {
        return this.emitter.on( 'did-change-highlighted', callback );
    }
}
