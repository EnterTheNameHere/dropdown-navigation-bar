
import { TextEditor, Point } from 'atom'; // eslint-disable-line import/no-unresolved, no-unused-vars

/**
 * Represents an Identifier found on Atom's TextEditor.
 *
 * Identifier either can have children (eg. class have methods) or be childless (function, property).
 * Use {@link Identifier#canHaveChildren} to check whether Identifier can have children or not.
 * Identifier which can have children though still can have zero (0) children. It just mean it
 * doesn't have any children, not that it's not able to.
 *
 * Use {@link Identifier#getStartPosition} and {@link Identifier#getEndPosition} with {@link Identifier#getTextEditor}
 * to find where the Identifier is in TextEditor. If Identifier is a member (like method or property)
 * {@link Identifier#getParent} will point to the parent. {@link Identifier#getKind} will return string variable etc.).
 * {@link Identifier#getName} returns the name of Identifier, while {@link Identifier#getId} returns identification string.
 *
 * @access public
 */
export class Identifier {
    /**
     * Raw name of the Identifier
     * @type {string}
     *
     * @private
     */
    _name = '';

    /**
     * Point where identifier starts in TextEditor.
     * @type {Point}
     *
     * @private
     */
    _startPosition = null;

    /**
     * Point where identifier ends in TextEditor.
     * @type {Point}
     *
     * @private
     */
    _endPosition = null;

    /**
     * Identifier's parent, if it's a member of any, or null.
     * @type {Identifier|null}
     *
     * @private
     */
    _parent = null;

    /**
     * Identifier's kind as an array of strings eg. 'class', 'number', 'undefined'...
     * @type {Array<string>}
     *
     * @private
     */
    _kind = null;

    /**
     * Holds TextEditor instance where this Identifier is found on.
     * @type {TextEditor}
     *
     * @private
     */
    _textEditor = null;

    /**
     * Holds children (members) of Identifier.
     * @type {Array<Identifier>}
     *
     * @private
     */
    _children = new Array();

    /**
     * Holds the level of scope nesting of this Identifier. 0 are identifiers in top scope - eg. file scope.
     * @type {number}
     *
     * @private
     */
    _scopeLevel = 0;

    /**
     * The boolean representing whether this Identifier can have children.
     * @type {boolean}
     */
    _canHaveChildren = true;

    /**
     * Holds unique ID for this Identifier.
     * @type {string}
     *
     * @private
     */
    _id = null;

    /**
     * Creates new Identifier from given options object.
     * @param {Object}          options
     * @param {TextEditor}      options.textEditor      Required: TextEditor instance where the Identifier can be found.
     * @param {boolean}         options.canHaveChildren Required: Boolean indicating whether Identifier can have children.
     * @param {Point}           [options.startPosition] Point where identifier starts in TextEditor
     * @param {Point}           [options.endPosition]   Point where identifier ends in TextEditor
     * @param {Identifier|null} [options.parent]        Identifier's parent, if it's a member of any, or null
     * @param {string}          [options.name]          Raw name of the Identifier
     * @param {Array<string>}   [options.kind]          Identifier's kind as an array of strings eg. 'class', 'number', 'undefined'...
     *
     * @throws {Error} if options object is not valid - doesn't have required property set or property is not a valid instance.
     */
    constructor( options ) {
        //console.log(options);
        if( !options ) throw Error('Identifier\'s constructor is expecting an options object as an argument.');
        if( !options.textEditor ) throw Error('Identifier\'s construction options must have "textEditor" property set to an instance of TextEditor where the Identifier can be found.');
        if( !options.canHaveChildren === null || !options.canHaveChildren === undefined ) throw Error('Identifier\'s construction options must have "canHaveChildren" property set to true or false.');

        if( !options.startPosition ) options.startPosition = null;
        if( !options.endPosition ) options.endPosition = null;
        if( !options.parent ) options.parent = null;

        if( !options.name ) options.name = '';
        if( !options.kind && !Array.isArray( options.kind ) ) options.kind = new Array();

        this._textEditor = options.textEditor;
        this._canHaveChildren = options.canHaveChildren;
        this._startPosition = options.startPosition;
        this._endPosition = options.endPosition;
        this._parent = options.parent;
        this._name = options.name;
        this._kind = options.kind;
        if( this._parent ) {
            this._scopeLevel = this._parent.getScopeLevel() + 1;
        }
    }

    /**
     * Returns unique ID which can be used to compare two Identifiers or which can be used as a key.
     * Valid only during lifetime of TextEditor this Identifier is found on.
     * @return {string}
     */
    getID() {
        if( !this._id ) {
            this._id = '';
            let child = this;
            let parent = this._parent;
            while( parent ) {
                this._id += String( parent.getChildren().indexOf( child ) );
                child = parent;
                parent = parent.getParent();
            }
            this._id = `i${this._textEditor.id}${this._id}`;
        }
        return this._id;
    }

    /**
     * Returns TextEditor where this Identifier can be found.
     * @return {TextEditor}
     */
    getTextEditor() {
        return this._textEditor;
    }

    /**
     * Returns Point where Identifier starts in TextEditor.
     * @return {Point}
     */
    getStartPosition() {
        return this._startPosition;
    }

    /**
     * Sets startPosition
     * @param {Point} position
     * @return {Identifier} Returns itself.
     */
    setStartPosition( position ) {
        this._startPosition = position;
        return this;
    }

    /**
     * Returns Point where Identifier starts in TextEditor.
     * @return {Point}
     */
    getEndPosition() {
        return this._endPosition;
    }

    /**
     * Sets endPosition.
     * @param {Point} position
     * @return {Identifier} Returns itself.
     */
    setEndPosition( position ) {
        this._endPosition = position;
        return this;
    }

    /**
     * Returns Identifier's parent, if it is member of any, or null.
     * @return {Identifier|null}
     */
    getParent() {
        return this._parent;
    }

    /**
     * Sets parent to Identifier instance or null.
     * @param {Identifier|null} identifier
     * @return {Identifier} Returns itself.
     */
    setParent( identifier ) {
        this._parent = identifier;
        return this;
    }

    /**
     * Returns name of Identifier. This should be text you want to display in dropdown.
     * @return {string}
     */
    getName() {
        return this._name;
    }

    /**
     * Sets name to given string.
     * @param {string} name
     * @return {Identifier} Returns itself.
     */
    setName( name ) {
        this._name = name;
        return this;
    }

    /**
     * Returns array of strings representating Identifier's kind.
     * @return {Array<string>}
     */
    getKind() {
        return this._kind;
    }

    /**
     * Adds key to kind array. If key already exists in kind array, it won't add it twice.
     * @param {string} key String to add to kind array.
     * @return {Identifier} Returns itself.
     */
    addKind( key ) {
        if( !this._kind.includes( key ) ) {
            this._kind.push( key );
        }
        return this;
    }

    /**
     * Removes key from kind array. If key doesn't exist in array, it does nothing.
     * @param {string} key String to remove from kind array.
     * @return {Identifier} Returns itself.
     */
    removeKind( key ) {
        const index = this._kind.findIndex( (value) => {
            return value === key;
        });

        if( index !== -1 ) {
            this._kind.splice( index, 1 );
        }
        return this;
    }

    /**
     * Returns true if Identifier can have children, false if it cannot.
     * @return {Boolean}
     */
    canHaveChildren() {
        return this._canHaveChildren;
    }

    /**
     * Adds child to Identifier.
     * @param {Identifier} child
     * @return {Identifier} Returns itself.
     *
     * @throws {Error} Given child argument is not valid.
     * @throws {Error} when Identifier cannot have children. Check {@link Identifier#canHaveChildren} first.
     */
    addChild( child ) {
        if( !child ) {
            throw new Error('"child" argument is not valid. Instance of Identifier is expected.');
        }
        if( !this.canHaveChildren() ) {
            throw new Error('Identifier cannot have children.');
        }

        this._children.push( child );
        return this;
    }

    /**
     * Removes `child` from Identifier's children array.
     * @param  {Identifier} child
     * @return {Identifier} Returns itself.
     */
    removeChild( child ) {
        const index = this._children.findIndex( (value) => {
            return value === child;
        });
        if( index !== -1 ) {
            this._children.splice( index, 1 );
        }
        return this;
    }

    /**
     * Removes all children from Identifier's children array.
     * @return {Identifier} Returns itself.
     */
    removeAllChildren() {
        this._children.splice(0);
        return this;
    }

    /**
     * Returns child Identifier based on given index, ie. number in sequence of insertion.
     * Helper for manual iteration. Returns null if Identifier cannot have children.
     * @param  {number} index - index of child Identifier
     * @return {Identifier|null} - returns null if child with given index is not found in children.
     */
    getChildByIndex( index ) {
        if( !this.canHaveChildren() ) return null;

        if( typeof index === 'number' ) {
            if( index >= 0 ) {
                // Trying to make sure index is numeric to be sure, but who knows...
                const child = this._children[index]; // eslint-disable-line security/detect-object-injection
                if( child instanceof Identifier ) {
                    return child;
                }
            }
        }
        return null;
    }

    /**
     * Returns children of this Identifier or null, if Identifier cannot have children.
     * @return {Array<Identifier>|null}
     */
    getChildren() {
        if( !this.canHaveChildren() ) return null;

        return this._children;
    }

    /**
     * Returns true if Identifier has one or more children or false if none or
     * if Identifier cannot have children.
     * @return {Boolean} true or false
     */
    hasChildren() {
        if( !this.canHaveChildren() ) return false;
        return this._children.length > 0;
    }

    /**
     * Returns number of children. Returns zero (0) if Identifier cannot have children.
     * @return {number}
     */
    getNumOfChildren() {
        if( !this.canHaveChildren() ) return 0;
        return this._children.length;
    }

    /**
     * Returns the level of scope nesting of this Identifier. 0 is global scope itself, 1 are identifiers in file scope.
     * @return {number}
     */
    getScopeLevel() {
        return this._scopeLevel;
    }

    /**
     * Returns the text which should be displayed on view element.
     * @virtual To be overriden
     * @return {string}
     */
    getDisplayName() {
        return this._name;
    }
}
