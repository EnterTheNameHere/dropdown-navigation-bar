/* global atom */

import { CompositeDisposable, Emitter } from 'atom'; // eslint-disable-line import/no-unresolved
//import { Identifier } from './identifier';
//import { TopScopeIdentifier } from './topScopeIdentifier';
import { ProvidersRegistry } from './babelProvider';
/*
function getIdentifiers( textEditor ) {
    const global = new TopScopeIdentifier( textEditor );

    global.addChild( new Identifier({
        name: 'constOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['const', 'export'],
    }));
    global.addChild( new Identifier({
        name: 'constTwo',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['const'],
    }));
    global.addChild( new Identifier({
        name: 'letOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['export', 'let'],
    }));
    global.addChild( new Identifier({
        name: 'letTwo',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['let'],
    }));
    global.addChild( new Identifier({
        name: 'functionOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['export', 'function'],
    }));
    global.addChild( new Identifier({
        name: 'functionTwo',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['function'],
    }));
    global.addChild( new Identifier({
        name: 'addingMore',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['function'],
    }));
    global.addChild( new Identifier({
        name: 'andMore',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['const'],
    }));

    const classOne = new Identifier({
        name: 'classOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['class', 'export'],
    });
    classOne.addChild( new Identifier({
        name: 'propertyOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: classOne,
        kind: ['property', 'const'],
    }));
    classOne.addChild( new Identifier({
        name: 'propertyTwo',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: classOne,
        kind: ['property', 'variable'],
    }));
    classOne.addChild( new Identifier({
        name: 'methodOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: classOne,
        kind: ['method', 'static'],
    }));
    classOne.addChild( new Identifier({
        name: 'methodTwo',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: classOne,
        kind: ['method'],
    }));
    global.addChild( classOne );

    const classTwo = new Identifier({
        name: 'classTwo',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: global,
        kind: ['class'],
    });
    classTwo.addChild( new Identifier({
        name: 'propertyOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: classTwo,
        kind: ['property'],
    }));
    classTwo.addChild( new Identifier({
        name: 'methodOne',
        startPosition: global.getStartPosition(),
        endPosition: global.getEndPosition(),
        textEditor: global.getTextEditor(),
        parent: classTwo,
        kind: ['method'],
    }));
    global.addChild( classTwo );

    return global;
}
*/
export class NavigationBar {
    visible = true;
    subscriptions = null;
    activeEditorSubscriptions = null;
    activeEditor = null;
    view = null;
    emitter = new Emitter();

    _providers = new ProvidersRegistry();
    _selectedIdentifier = null;

    constructor() {
        this.subscriptions = new CompositeDisposable();
        this.activeEditorSubscriptions = new CompositeDisposable();
        this.observeActiveTextEditor();
    }

    destroy() {
        this.getView().destroy();
        this.subscriptions.dispose();
        this.activeEditorSubscriptions.dispose();
        this.visible = false;
    }

    observeActiveTextEditor() {
        this.subscriptions.add( atom.workspace.observeActiveTextEditor( (textEditor) => {
            console.log('NavigationBar::observeActiveTextEditor', textEditor);
            if( textEditor === undefined ) { // No TextEditor is curretly active
                this.activeEditor = null;
                this.activeEditorSubscriptions.dispose();
            } else if ( this.activeEditor !== textEditor ) { // Different TextEditor is now active
                this.activeEditor = textEditor;
                this.activeEditorSubscriptions.dispose();
                this.activeEditorSubscriptions = new CompositeDisposable();
                this.activeEditorSubscriptions.add( this.activeEditor.onDidSave( () => {
                    this.emitter.emit( 'did-change-text-editor' );
                }));
                this.activeEditorSubscriptions.add( this.activeEditor.onDidChangeGrammar( () => {
                    this.emitter.emit( 'did-change-text-editor' );
                }));
                this.emitter.emit( 'did-change-text-editor' );
            }
        }));
    }

    getSelectedIdentifier() {
        return this._selectedIdentifier;
    }

    setSelectedIdentifier( selectedIdentifier ) {
        console.log('NavigationBar::setSelectedIdentifier', selectedIdentifier);

        this._selectedIdentifier = selectedIdentifier;
        this.emitter.emit( 'did-change-selected-identifier' );
    }

    /**
     * Notifies subscriber the selected Identifier on dropdown boxes was changed.
     *
     * @param  {Function} callback Function to invoke when selected Identifier changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeSelectedIdentifier( callback ) {
        return this.emitter.on( 'did-change-selected-identifier', callback );
    }

    /**
     * Notifies subscriber the active TextEditor changed.
     *
     * @param  {Function} callback Function to invoke when active TextEditor changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeTextEditor( callback ) {
        return this.emitter.on( 'did-change-text-editor', callback );
    }

    show() {
        if( this.visible ) return;

        this.visible = true;
        this.getView().element.hidden = false;
    }

    hide() {
        if( !this.visible ) return;

        this.visible = false;
        this.getView().element.hidden = true;
    }

    getView() {
        if( !this.view ) {
            this.view = atom.views.getView(this);
        }
        return this.view;
    }

    getProviderForTextEditor( textEditor ) {
        if( !textEditor ) {
            throw new Error('textEditor argument must be a valid TextEditor instance!');
        }

        return this._providers.getProviderForTextEditor( textEditor );
    }
}
