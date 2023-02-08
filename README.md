# roBrowserLegacy-plugins
Plugin repository for [roBrowserLegacy](https://github.com/MrAntares/roBrowserLegacy)

## How to install plugins
* Copy any plugin folder from `src/Plugins/` into the `src/Plugins/` folder in roBrowser (where `PluginManager.js` is located)
* Add the plugin (or plugins) to the plugin list in Ragna.roBrowser's ROConfig, separated with comma as:

 `<Plugin_name>: '<Path_to_the_plugin_javascript_under_src_without_the_.js_extension>'`
 
 Example with all current plugins (only add what you need):
```js
function initialize() {
      var ROConfig = {
      
          //... other RoConf properties here
          
          plugins: { 
                      KeyToMove: 'KeyToMove/KeyToMove',
                      BBGutterLines: 'BBGutterLines/BBGutterLines',
                      IntroMessage: { path:'IntroMessage/IntroMessage', pars: { newsUrl: 'https://example.com' } }
                   },
                   
          //... other RoConf properties here
          
      };
      var RO = new ROBrowser(ROConfig);
      RO.start();
  }
  window.addEventListener("load", initialize, false);
```
* Refresh your site & enjoy
