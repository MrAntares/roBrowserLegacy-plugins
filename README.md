# roBrowserLegacy-plugins
Plugin repository for [roBrowserLegacy](https://github.com/MrAntares/roBrowserLegacy)

> [!WARNING]
> ES6 plugins are only compatible with roBrowser hash [82ae880cff59ccc2262f706f104f55c124254f95](https://github.com/MrAntares/roBrowserLegacy/commit/82ae880cff59ccc2262f706f104f55c124254f95) and newer.

## How to install plugins
* Copy any plugin folder from `src/Plugins/` into the `src/Plugins/` folder in roBrowser (where `PluginManager.js` is located)
* Add the plugin (or plugins) to the plugin list in roBrowser's ROConfig, separated with comma as:

 `<Plugin_name>: '<Path_to_the_plugin_javascript_under_src_without_the_.js_extension>'`
 
 Example with all current plugins (only add what you need):
```js
function initialize() {
      var ROConfig = {
      
          //... other RoConf properties here
          
          plugins: { 
                      BBGutterLines: 'BBGutterLines/BBGutterLines',
                      ColoredSkies: 'ColoredSkies/ColoredSkies',
                      DefaultSettings: 'DefaultSettings/DefaultSettings', // Only example, customize source at your will
                      IntroMessage: { path:'IntroMessage/IntroMessage', pars: { newsUrl: 'https://example.com' } },
                      KeyToMove: 'KeyToMove/KeyToMove',
                      UISelectionPlugin: 'UISelectionPlugin/UISelectionPlugin', // Only example, customize source at your will
                   },
                   
          //... other RoConf properties here
          
      };
      var RO = new ROBrowser(ROConfig);
      RO.start();
  }
  window.addEventListener("load", initialize, false);
```
* Refresh your site & enjoy
