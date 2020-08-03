
import { Identifier } from './identifier';

/**
 * TopScopeIdentifier is an extension of Identifier used by NavigationBar as
 * a special Identifier, which **must** point to the instance of active
 * TextEditor and have all Identifier found in this TextEditor added
 * as children under this TopScopeIdentifier. NavigationBar will use this
 * TopScopeIdentifier as a source to fill DropdownBoxes for each TextEditor.
 * ScopeLevel of TopScopeIdentifier is set to -1. Any Identifier added to it
 * will thus have scope level of 0.
 *
 * {@link TopScopeIdentifier#getStartPosition} points to TextEditor's first line.
 * {@link TopScopeIdentifier#getEndPosition} points to TextEditor's end.
 */
export class TopScopeIdentifier extends Identifier {
    /**
     * Scope level of TopScopeIdentifier is -1 indicating it's the top.
     * @type {number}
     */
    scopeLevel = -1;

    /**
     * Constructs TopScopeIdentifier for given TextEditor.
     * @param {TextEditor} textEditor
     */
    constructor( textEditor ) {
        const options = {
            name:               '(top scope)',
            textEditor:         textEditor,
            canHaveChildren:    true,
            startPosition:      textEditor.getBuffer().getFirstPosition(),
            endPosition:        textEditor.getBuffer().getEndPosition(),
            kind:               new Array(),
            parent:             null
        };
        super( options );
    }
}
