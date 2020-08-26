
import { Identifier } from './identifier';

/**
 * A special case of Identifier.
 *
 * Every Identifier which can have children should have an
 * EmptyIdentifier pointing at the end of name of Identifier
 * so it can be used to add code right after it, eg. add
 * a newline so user can start writing code on an empty line.
 * It also solves the issue of parent with zero (0) children
 * having nothing to show in right side dropdown box.
 */
export class EmptyIdentifier extends Identifier {
    /**
     * Creates new EmptyIdentifier for given parent Identifier.
     * @param {Identifier} parent The parent element in need of EmptyIdentifier.
     */
    constructor( parent ) {
        if( !(parent instanceof Identifier) ) {
            throw new Error('EmptyIdentifier\'s constructor: first argument must be an instance of Identifier!');
        }

        const options = {
            name:               '',
            textEditor:         parent.getTextEditor(),
            canHaveChildren:    false,
            startPosition:      parent.getStartPosition(),
            endPosition:        parent.getEndPosition(),
            kind:               ['dummy'],
            parent:             parent,
        };
        super( options );
    }
}
