
const etch = require('etch');
const $ = etch.dom;

export class NavigationBarSettingsButtonView {
    /**
     * Holds etch props object.
     * @type {object}
     * 
     * @private
     */
    _props = null;
    
    constructor( props = {}/*, children = {}*/ ) {
        this._props = props;

        etch.initialize(this);
    }

    async destroy() {
        await etch.destroy(this);
    }

    update( newProps = {}/*, newChildren = {}*/ ) {
        this._props = {...this._props, ...newProps};

        return etch.update(this);
    }

    render() {
        return $.button({
            class: 'navigation-bar-settings-button btn icon icon-gear',
            name: 'navigation-bar-settings-button',
            id: 'navigation-bar-settings-button',
            on: {
                click: ( clickEvent ) => {
                    clickEvent.stopPropagation();
                    this._props.navigationBarView.getSettings().toggle();
                }
            }
        });
    }
}
