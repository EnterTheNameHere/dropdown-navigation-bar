
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
     * Holds additional data which cannot fit any other property.
     * @type {Map<string,string>}
     */
    _additionalData = new Map();

    /**
     * Holds the level of scope nesting of this Identifier. 0 are identifiers in top scope - eg. file scope.
     * @type {number}
     *
     * @private
     */
    _scopeLevel = 0;

    /**
     * Holds unique ID for this Identifier. Do not access directly, use {@link this#getID}.
     * @type {string}
     *
     * @private
     */
    _id = null;

    /**
     * Creates new Identifier from given options object.
     * @param {Object}          options
     * @param {TextEditor}      options.textEditor      Required: TextEditor instance where the Identifier can be found.
     * @param {Point}           [options.startPosition] Point where identifier starts in TextEditor
     * @param {Point}           [options.endPosition]   Point where identifier ends in TextEditor
     * @param {Identifier|null} [options.parent]        Identifier's parent, if it's a member of any, or null
     * @param {string}          [options.name]          Raw name of the Identifier
     * @param {Array<string>}   [options.kind]          Identifier's kind as an array of strings eg. 'class', 'number', 'undefined'...
     *
     * @throws {Error} if options object is not valid - doesn't have required property set or property is not a valid instance.
     */
    constructor( options ) {
        if( !options ) throw Error('Identifier\'s constructor is expecting an options object as an argument.');
        if( !options.textEditor ) throw Error('Identifier\'s construction options must have "textEditor" property set to an instance of TextEditor where the Identifier can be found.');

        if( !options.startPosition ) options.startPosition = null;
        if( !options.endPosition ) options.endPosition = null;
        if( !options.parent ) options.parent = null;

        if( !options.name ) options.name = '';
        if( !options.kind && !Array.isArray( options.kind ) ) options.kind = new Array();

        this._textEditor = options.textEditor;
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
        // TODO: deal with start position moving...
        if( this._id ) return this._id;
        const txtStartPosition = `{${this.getStartPosition().row}:${this.getStartPosition().column}}`;
        this._id = `te${this._textEditor.id}|${this.getDisplayName()}|${txtStartPosition}`;
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
     * Returns Point where Identifier starts in TextEditor, or null.
     * @return {Point|null}
     */
    getStartPosition() {
        return this._startPosition;
    }

    /**
     * Sets Identifier's starting position to `position`. Refers to where Identifier starts in TextEditor.
     * @param {Point} position
     * @return {Identifier} Returns itself.
     */
    setStartPosition( position ) {
        this._startPosition = position;
        return this;
    }

    /**
     * Returns Point where Identifier starts in TextEditor, or null.
     * @return {Point|null}
     */
    getEndPosition() {
        return this._endPosition;
    }

    /**
     * Sets Identifier's ending position to `position`. Refers to where Identifier ends in TextEditor.
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
     * Sets `name` to given string.
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
     * Adds `key` to kind array. If `key` already exists in kind array, it won't be added twice.
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
     * Returns true if Identifier is of `key` kind. (class, function, member, const etc.)
     * @param  {string}  key String kind to check if Identifier is.
     * @return {Boolean}     True if Identifier is of given kind, false if it is not.
     */
    isKind( key ) {
        return this._kind.includes( key );
    }

    /**
     * Removes `key` from kind array. If key doesn't exist in array, it does nothing.
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
     * Adds `child` to Identifier.
     * @param {Identifier} child
     * @return {Identifier} Returns itself.
     *
     * @throws {Error} Given child argument is not valid.
     */
    addChild( child ) {
        if( child === null || child === undefined ) {
            throw new Error('"child" argument is not valid. Instance of Identifier is expected.');
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
     * Returns child Identifier based on given `index`, ie. number in sequence of insertion.
     * Helper for manual iteration.
     * @param  {number} index - index of child Identifier
     * @return {Identifier|null} - returns null if child with given index is not found in children.
     */
    getChildByIndex( index ) {
        if( typeof index === 'number' ) {
            if( index >= 0 && index < this.getNumOfChildren() ) {
                // Trying to make sure index is numeric to be sure, but who knows...
                return this._children[index]; // eslint-disable-line security/detect-object-injection
            }
        }
        return null;
    }

    /**
     * Returns children of this Identifier.
     * @return {Array<Identifier>}
     */
    getChildren() {
        return this._children;
    }

    /**
     * Returns true if Identifier has one or more children.
     * @return {Boolean} true or false
     */
    hasChildren() {
        return this._children.length > 0;
    }

    /**
     * Returns number of children.
     * @return {number}
     */
    getNumOfChildren() {
        return this._children.length;
    }

    /**
     * Returns the level of scope nesting of this Identifier. 0 is the file scope.
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

    /**
     * Returns Map for storing additional data which doesn't fit elsewhere.
     * @return {Map<string,string>} The Map.
     */
    getAdditionalDataMap() {
        return this._additionalData;
    }

    /**
     * Returns true if both Identifiers are equal, that is they both have same ID.
     * @param  {Identifier} first
     * @param  {Identifier} second
     * @return {boolean}    true if both Identifiers are equal, false if not.
     */
    static areEqual( first, second ) {
        return first.getID() === second.getID();
    }
}
