# Ragna.roBrowser-plugins
Plugin repository for [Ragna.roBrowser](https://github.com/MrAntares/Ragna.roBrowser)

## How to install plugins
* Copy any plugin folder from `src/Plugins/` into the same folder in Ragna.roBrowser
* Add the plugin (or plugins) to the plugin list in Ragna.roBrowser's ROConfig, separated with comma as:

 `<Plugin_name>: '<Path_under_src>'`
 
 Example:
```js
function initialize() {
      var ROConfig = {
          ...
          plugins: { 
                      KeyToMove: 'KeyToMove/KeyToMove',
                      BBGutterLines: 'BBGutterLines/BBGutterLines'
                   },
          ...
      };
      var RO = new ROBrowser(ROConfig);
      RO.start();
  }
  window.addEventListener("load", initialize, false);
```
* Refresh your site & enjoy
