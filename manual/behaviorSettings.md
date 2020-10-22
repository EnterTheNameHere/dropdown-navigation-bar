# behaviorSettings.md

BehaviorSettings is an object with following properties:
```javascript
{
    name: 'Name of behavior',
    config: {
        propertyName: {
            
        }
    }
}
```

name:
* is required
* must be string
* will be converted to lowercase and spaces replaced by underscore to be used as a name in atom's config key path
* use ASCII please



config is object with properties:
```javascript
config: {
    oneConfigItem: {
        
    },
    secondConfigItem: {
        
    }
}
```

configItem is a name for config, so
```javascript
{
    config: {
        debug: {
            type: 'boolean',
            title: 'Show debug information',
            description: 'Show more information used in debugging',
            default: true
        }
    }
}
```

is property named "debug", of type "boolean" with default value `true`.
Title is string shown on settings popup dialog. It should be human readable. Must be set.
Description is optinal, will be shown as a tooltip if used hovers over the config item on settings popup dialog.



BehaviorSettings config Items:
```javascript
boolean:
{
    type: 'boolean',
    title: 'readable name',
    default: false,
    description: 'tooltip string shown when user hovers over title'
}
```
