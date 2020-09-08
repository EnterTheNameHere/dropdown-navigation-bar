/* global atom */

import * as etch from 'etch';
/**
 * Shorthand for etch.dom
 */
const $ = etch.dom;

etch.setScheduler(atom.views);

/**
 * **You don't need to use this class directly.**
 *
 * Wraps around the value to display on dropdown list.
 *
 * constructor and update functions accept properties objects
 * which allows user to specify whether item should be styled
 * as selected or/and active, and provides chance to register
 * event handlers by supplying an object with event names as
 * properties, defining functions to be registered as handlers.
 *
 * @example
 * import * as etch from 'etch';
 * const $ = etch.dom;
 *
 * // In parent component
 * render() {
 *     return $(DropdownBoxItemWrapperView, {
 *         selected: true,
 *         active: false,
 *         eventHandlers:{
 *             click: (event) => { return 'react to clicking' },
 *             mouseover: (event) => { return 'react to mouse over' },
 *         },
 *     }, 'Text\Element to display' );
 * }
 *
 * @private
 */
export class DropdownBoxItemWrapperView {
    /**
     * Holds object with user supplied event handlers which are currently listened to.
     * @type {object}
     * @private
     */
    _currentEventHandlers = null;

    /**
     * Holds etch props object.
     * @type {object}
     * @private
     */
    _props = null;

    /**
     * Holds value to display.
     * @type {object|Element}
     * @private
     */
    _children = null;

    /**
     * Creates new DropdownBoxItemWrapperView.
     *
     * @param {object}  props               Component (etch) props object.
     * @param {boolean} props.selected      True if item should be styles as selected.
     * @param {boolean} props.active        True if item should be styled as highlighted.
     * @param {object}  props.eventHandlers Event handlers, like {mouseover: () => {}, click: () => {}}
     * @param {object|Element} children     Value to display.
     */
    constructor( props, children ) {
        if( !props ) {
            throw new Error('DropdownBoxItemWrapperView\'s constructor expects valid props (etch) object as first argument!');
        }

        this._props = {...{ selected: false, active: false }, ...props};
        this._children = children;

        etch.initialize(this);

        this.registerEventHandlers();
    }

    /**
     * Removes all listeners and resources.
     *
     * @return {Promise}
     */
    async destroy() {
        this.unregisterEventHandlers();
        await etch.destroy(this);
    }

    /**
     * Add listeners to events user provided handlers for in
     * this._props.eventHandlers object.
     *
     * @private
     */
    registerEventHandlers() {
        if( Object.prototype.hasOwnProperty.call( this._props, 'eventHandlers' ) ) {
            this._currentEventHandlers = this._props.eventHandlers;

            // Event handlers are stored as functions under property with event name,
            // eg. mouseover: () => {}

            // Let get all properties in eventHandlers object.
            for( const property in this._currentEventHandlers ) {
                // We don't want prototype chain properties, only user defined.
                if( Object.prototype.hasOwnProperty.call( this._currentEventHandlers, property ) ) {
                    // Handler should be function...
                    const handler = this._currentEventHandlers[property]; // Do not silence eslint...
                    if( typeof(handler) === 'function' ) {
                        this.element.addEventListener( property, handler );
                    }
                }
            }
        } else {
            this._currentEventHandlers = null;
        }
    }

    /**
     * Removes listeners for all user provided handlers.
     *
     * @private
     */
    unregisterEventHandlers() {
        if( this._currentEventHandlers ) {
            // Let get all properties in eventHandlers object.
            for( const property in this._currentEventHandlers ) {

                // Event handlers are stored as functions under property with event name,
                // eg. mouseover: () => {}

                // We don't want prototype chain properties, only user defined.
                if( Object.prototype.hasOwnProperty.call( this._currentEventHandlers, property ) ) {
                    // Handler should be function...
                    const handler = this._currentEventHandlers[property]; // Do not silence eslint...
                    if( typeof(handler) === 'function' ) {
                        this.element.removeEventListener( property, handler );
                    }
                }
            }
        }
    }

    /**
     * Updates the state of DropdownBoxItemWrapperView.
     * If you pass new event handlers, you must set `prop.registerHandlersAgain`
     * to true, otherwise new event handlers will be ignored.
     *
     * @param {object}  props                Component (etch) props object. Set properties you want to change.
     * @param {boolean} props.selected       True if item should be styles as selected.
     * @param {boolean} props.active         True if item should be styled as highlighted.
     * @param {boolean} props.registerHandlersAgain Must set to true if you want to re-register event listeners.
     * @param {object}  props.eventHandlers  The props.registerHandlersAgain must be true or event handlers won't be updated.
     * @param {object|Element} [newChildren] If set, it will replace the item's value with the newly provided value.
     * @return {Promise}
     */
    update( newProps = {}, newChildren ) {
        this._props = {...this._props, ...newProps};
        if( newChildren !== undefined ) {
            this._children = newChildren;
        }

        if( this._props.registerHandlersAgain ) {
            delete this._props.registerHandlersAgain;
            this.unregisterEventHandlers();
            this.registerEventHandlers();
        }

        return etch.update(this);
    }

    /**
     * Creates Element to be displayed.
     * @return {Element}
     */
    render() {
        const selectedClass = this._props.selected ? ' selected' : '';
        const activeClass = this._props.active ? ' active' : '';
        return $.li(
            {
                class: `dropdown-box-item list-group-item${selectedClass}${activeClass}`,
            },
            this._children
        );
    }
}
