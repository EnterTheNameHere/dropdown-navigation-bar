
const etch = require('etch');
const $ = etch.dom;

export class DropdownBoxSettingsButtonView {
    constructor( props = {}/*, children = {}*/ ) {
        this.props = props;

        etch.initialize(this);
    }

    async destroy() {
        await etch.destroy(this);
    }

    update( newProps = {}/*, newChildren = {}*/ ) {
        this.props = {...this.props, ...newProps};

        return etch.update(this);
    }

    render() {
        return $.button({
            class: 'dropdown-navigation-bar-settings-button btn icon icon-gear',
            name: 'dropdown-navigation-bar-settings-button'
        });
    }
}
