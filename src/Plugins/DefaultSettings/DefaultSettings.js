/**
 * DefaultSettings Plugin
 *
 * Framework to override default ROBrowser settings without modifying the source.
 *
 * This file is a plugin for ROBrowser, (http://www.robrowser.com/).
 *
 * @author Trojal
 */
define(function( require )
{
    // Dependencies
    var Preferences = require('Core/Preferences');
    var Audio = require('Preferences/Audio');
    var Map = require('Preferences/Map');

    return function Init(){
        // Audio preferences
        const customAudio = Preferences.get( 'Audio', {
            BGM:   {
                volume: 0.1 // Defaults to 0.5
            },
            Sound: {
                volume: 0.1 // Defaults to 0.5
            }
        }, 1.0 );
        Audio.BGM.volume = customAudio.BGM.volume;
        Audio.Sound.volume = customAudio.Sound.volume;

        // Map preferences
        const customMap = Preferences.get( 'Map', {
            fog: false // Defaults to true
        }, 1.1 );
        Map.fog = customMap.fog;

        // Return true to signal successful initialization
        return true;
    }
});
