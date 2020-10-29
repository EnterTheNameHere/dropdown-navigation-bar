
import { Emitter } from 'atom';
import { EmptyIdentifier, TopScopeIdentifier } from './identifiers';

/**
 * IdentifiersProvider is used to parse Atom's {@link TextEditor} to create a list of {@link Identifier}s found in the
 * code.
 *
 * This class is intended to be extended, it provides only minimal functionality. The main function doing the
 * work is {@link this#generateIdentifiers}. Implement generation of {@link Identifier}s in there, and fire
 * 'did-generate-identifiers' event when you are ready to provide {@link Identifier}s to users.
 *
 * Implementation notes: {@link TopScopeIdentifier} is specialized {@link Identifier} representing the top
 * most scope of code in editor - it has no name and all {@link Identifier}s are children of it. When
 * user want to display/process all {@link Identifier}s found in editor, this one is the top node in tree.
 * {@link this#getTopScopeIdentifier} can be used to get {@link TopScopeIdentifier}.
 *
 * {@link this#getIdentifiersForParentsDropbox} should return all high/class/has-other-children {@link Identifier}s.
 * What should be on the left side <- DropdownBox of {@link NavigationBarView}, this is where to put them... Takes
 * an argument of {@link Identifier} from which to extract parent identifiers. Defaults to {@link TopScopeIdentifier}.
 *
 * {@link this#getIdentifiersForChildrenDropbox} should return all low/properties/methods/children of the
 * {@link Identifier} provided as an argument. It's basically the right side -> DropdownBox of
 * {@link NavigationBarView}. Should not return {@link Identifier} which has children, but it should return
 * {@link Identifier} which is method and have zero to multiple {@link Identifier}s as arguments. It is the
 * method {@link Identifier} which is the subject to return, and renderer/user should take care of displaying
 * the arguments itself. {@link TopScopeIdentifier} is the default argument.
 *
 * {@link this#getIdentifierForPosition} should return {@link Identifier} on atom's {@link Point} - buffer position
 * of cursor is used. Return {@link Identifier} found on that Point, be it body of class => class identifier,
 * body of method => method identifier, property name outside of method => property Identifier, property name inside
 * a method => method identifier. Use common logic. Defaults to {@link TopScopeIdentifier}.
 *
 * {@link EmptyIdentifier} is special identifier representing the empty or first child of class (or other appropriate
 * object). Should be returned for right side -> DropdownBox of {@link NavigationBar} as the first child so user can
 * choose it to move cursor to the end of that parent.
 */
export class IdentifiersProvider {
    /**
     * Holds TextEditor instance this provider provides Identifiers for.
     * @type {TextEditor}
     *
     * @private
     */
    _textEditor = null;

    /**
     * Holds TopScopeIdentifier for TextEditor this provider provides for.
     * @type {TopScopeIdentifier}
     *
     * @private
     */
    _topScopeIdentifier = null;

    /**
     * Holds Emitter instance used by this InstanceProvider.
     * @type {Emitter}
     *
     * @private
     */
    _emitter = new Emitter();

    /**
     * Creates new IdentifierProvider for given TextEditor.
     * @param {TextEditor} textEditor
     */
    constructor( textEditor ) {
        if( !textEditor ) {
            throw new Error('textEditor argument must be valid instance of atom TextEditor!');
        }

        this._textEditor = textEditor;
        this._topScopeIdentifier = new TopScopeIdentifier( this._textEditor );
    }

    /**
     * Makes the Provider generate Identifiers for the TextEditor.
     *
     * @emits did-generate-identifiers
     *
     * @abstract
     * You want to override this function when creating custom IdentifiersProvider.
     * Perform parsing and populate the TopScopeIdentifier with Identifiers.
     */
    generateIdentifiers() {

    }

    /**
     * Returns TopScopeIdentifier with all Identifiers found in TextEditor's code.
     *
     * @return {TopScopeIdentifier} A TopScopeIdentifier for TextEditor.
     */
    getTopScopeIdentifier() {
        return this._topScopeIdentifier;
    }

    /**
     * Returns an array of all Identifiers of given `identifier` which
     * can have children (eg. classes, namespaces, enums etc.), with
     * TopScopeIdentifier at the top. TopScopeIdentifier must always
     * be present in the array, even if Provider is not able to provide
     * any other Identifiers.
     *
     * @param  {Identifier} [identifier] The parent Identifier we're getting children of. TopScopeIdentifier is default.
     * @return {Array<Identifier>} An array with all parent Identifiers with TopScopeIdentifier on top.
     * @abstract
     * You want to override this function when creating custom IdentifiersProvider.
     * Return Identifiers which belongs to the left dropdown box of NavigationBar - all the parents.
     */
    getIdentifiersForParentsDropbox( identifier ) { // eslint-disable-line no-unused-vars
        return [ this._topScopeIdentifier ];
    }

    /**
     * Returns an array of all children (eg. variables, properties, methods etc.)
     * of the given parent `identifier`, with {@link EmptyIdentifier} at the top.
     * {@link EmptyIdentifier} must always be present in the array even if `identifier`
     * itself have no other children.
     *
     * @param  {Identifier} [identifier] The parent Identifier we're getting children of. TopScopeIdentifier is default.
     * @return {Array<Identifier>}
     * @abstract
     * You want to override this function when creating custom IdentifiersProvider.
     * Return Identifiers which belongs to the right dropdown box of NavigationBar - all the children.
     */
    getIdentifiersForChildrenDropbox( identifier ) {
        if( identifier === null || identifier === undefined ) {
            identifier = this._topScopeIdentifier;
        }

        return [ new EmptyIdentifier(identifier), ...identifier.getChildren() ];
    }

    /**
     * Returns Identifier found on given `position` or TopScopeIdentifier if none is found.
     * @param {Point} position Position on TextEditor.
     * @return {Identifier|TopScopeIdentifier} Identifier on given position or TopScopeIdentifier.
     */
    getIdentifierForPosition( position ) { // eslint-disable-line no-unused-vars
        return this._topScopeIdentifier;
    }

    /**
     * Notifies subscriber that Identifiers were generated.
     *
     * @param  {function(event: object{provider: IdentifiersProvider, identifiers: TopScopeIdentifier})} callback Function to invoke when Identifiers were generated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidGenerateIdentifiers( callback ) {
        return this._emitter.on( 'did-generate-identifiers', callback );
    }
}
