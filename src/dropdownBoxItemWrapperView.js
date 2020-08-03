/* global atom */

import * as etch from 'etch';
/**
 * Shorthand for etch.dom
 */
const $ = etch.dom;

etch.setScheduler(atom.views);

/**
 * TODO:
 * @todo
 */

/**
 * DropdownBoxItemWrapperView wraps around an item
 * from {@link DropdownBoxView#getItems}, displaying
 * it's value and providing default behavior
 * of an item in dropdown box's list like highlighting
 * background if mouse moves over it.
 *
 * @private
 */
export class DropdownBoxItemWrapperView {
    /**
     * Creates new DropdownBoxItemView.
     *
     * @param {object}  props               Component (etch) props object.
     * @param {boolean} props.selected      True if item should be styles as selected.
     * @param {boolean} props.active        True if item should be styled as highlighted.
     * @param {object}  props.eventHandlers Event handlers, like {mouseover: () => {}, click: () => {}}
     */
    constructor( props, children ) {
        if( !props ) {
            throw new Error('DropdownBoxItemView\'s constructor expects valid props (etch) object as first argument!');
        }

        this.props = {...{ selected: false, active: false }, ...props};
        this.children = children;

        etch.initialize(this);

        this.registerEventHandlers();

        /*
        if( Object.prototype.hasOwnProperty.call( this.props, 'eventHandlers' ) ) {
            if( Object.prototype.hasOwnProperty.call( this.props.eventHandlers, 'click' ) ) {
                if( typeof(this.props.eventHandlers.click) === 'function' ) {
                    this.element.addEventListener( 'click', this.props.eventHandlers.click );
                }
            }
            if( Object.prototype.hasOwnProperty.call( this.props.eventHandlers, 'mouseover' ) ) {
                if( typeof(this.props.eventHandlers.mouseover) === 'function' ) {
                    this.element.addEventListener( 'mouseover', this.props.eventHandlers.mouseover );
                }
            }
        }
        */
    }

    /**
     * Removes all listeners and resources.
     *
     * @return {Promise}
     */
    async destroy() {
        /*
        if( Object.prototype.hasOwnProperty.call( this.props, 'eventHandlers' ) ) {
            if( Object.prototype.hasOwnProperty.call( this.props.eventHandlers, 'click' ) ) {
                if( typeof(this.props.eventHandlers.click) === 'function' ) {
                    this.element.removeEventListener( 'click', this.props.eventHandlers.click );
                }
            }
            if( Object.prototype.hasOwnProperty.call( this.props.eventHandlers, 'mouseover' ) ) {
                if( typeof(this.props.eventHandlers.mouseover) === 'function' ) {
                    this.element.removeEventListener( 'mouseover', this.props.eventHandlers.mouseover );
                }
            }
        }
        */
        this.unregisterEventHandlers();
        await etch.destroy(this);
    }

    /**
     * Add listeners for events the user provided event handlers for
     * with this.props.eventHandlers object.
     *
     * @private
     */
    registerEventHandlers() {
        if( Object.prototype.hasOwnProperty.call( this.props, 'eventHandlers' ) ) {
            this.currentEventHandlers = this.props.eventHandlers;

            // Event handlers are stored as functions under property with event name,
            // eg. mouseover: () => {}

            // Let get all properties in eventHandlers object.
            for( const property in this.currentEventHandlers ) {
                // We don't want prototype chain properties, only user defined.
                if( Object.prototype.hasOwnProperty.call( this.currentEventHandlers, property ) ) {
                    // Handler should be function...
                    const handler = this.currentEventHandlers[property];
                    if( typeof(handler) === 'function' ) {
                        this.element.addEventListener( property, handler );
                    }
                }
            }
        } else {
            this.currentEventHandlers = null;
        }
    }

    /**
     * Removes all listeners from element.
     *
     * @private
     */
    unregisterEventHandlers() {
        if( this.currentEventHandlers ) {
            // Let get all properties in eventHandlers object.
            for( const property in this.currentEventHandlers ) {

                // Event handlers are stored as functions under property with event name,
                // eg. mouseover: () => {}

                // We don't want prototype chain properties, only user defined.
                if( Object.prototype.hasOwnProperty.call( this.currentEventHandlers, property ) ) {
                    // Handler should be function...
                    const handler = this.currentEventHandlers[property];
                    if( typeof(handler) === 'function' ) {
                        this.element.removeEventListener( property, handler );
                    }
                }
            }
        }
    }

    /**
     * Updates the state of DropdownBoxItemWrapperView.
     * If you pass new event handlers, you must set registerHandlersAgain
     * to true, otherwise new event handlers will be ignored.
     *
     * @param {object}  props               Component (etch) props object. Set properties you want to change.
     * @param {boolean} props.selected      True if item should be styles as selected.
     * @param {boolean} props.active        True if item should be styled as highlighted.
     * @param {boolean} props.registerHandlersAgain Must set to true if you want to re-register event listeners.
     * @param {object}  props.eventHandlers The props.registerHandlersAgain must be true or event handlers won't be updated.
     * @return {Promise}
     */
    update( newProps = {}/*, newChildren = {}*/ ) {
        this.props = {...this.props, ...newProps};

        if( this.props.registerHandlersAgain ) {
            delete this.props.registerHandlersAgain;
            this.unregisterEventHandlers();
            this.registerEventHandlers();
        }

        return etch.update(this);
    }

    render() {
        const selectedClass = this.props.selected ? ' selected' : '';
        const activeClass = this.props.active ? ' active' : '';
        return $.li(
            {
                class: `dropdown-box-item list-group-item${selectedClass}${activeClass}`,
            },
            this.children
        );
    }
}
