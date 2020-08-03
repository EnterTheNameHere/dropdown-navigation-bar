
/**
 * Represents arguments of {@link DropdownBoxView} events. You can call
 * {@link DropdownBoxEvent#getDropdownBox} to get the source
 * {@link DropdownBoxView} instance which fired up the event.
 * In case a new item is selected or highlighted, you can call
 * {@link DropdownBoxEvent#getItem} to retrieve that item.
 * {@link DropdownBoxEvent#hasItem} can be called to check if
 * item is present.
 */
export class DropdownBoxEvent {
    /**
     * Holds {@link DropdownBoxView}, the source of this event.
     *
     * @type {DropdownBoxView}
     *
     * @private
     */
    dropdownBox = null;
    /**
     * An item, if event is a new item was selected or highlighted.
     *
     * @type {object}
     *
     * @private
     */
    item = null;

    /**
     * Creates new {@link DropdownBoxEvent}.
     *
     * @param {DropdownBoxView} dropdownBox The source of event.
     * @param {object}          [item=null] The item, if event involves one.
     */
    constructor( dropdownBox, item = null ) {
        this.dropdownBox = dropdownBox;
        this.item = item;
    }

    /**
     * Returns {@link DropdownBoxView}, the source of this event.
     *
     * @return {DropdownBoxView} The source of this event.
     */
    getDropdownBox() {
        return this.dropdownBox;
    }

    /**
     * Returns item if event involves one.
     *
     * @return {object}
     */
    getItem() {
        return this.item;
    }

    /**
     * Returns true if item is present, false otherwise.
     *
     * @return {boolean}
     */
    hasItem() {
        return this !== null;
    }
}
