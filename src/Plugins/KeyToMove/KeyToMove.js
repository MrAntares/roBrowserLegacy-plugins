/**
 * KeyToMove Plugin
 *
 * Enables the player to control the character movement with the arrow keys.
 *
 * This file is a plugin for ROBrowser, (http://www.robrowser.com/).
 *
 * @author Antares
 * Based on Vincent Thibault's gist: https://gist.github.com/vthibault/9d5c08c111db2eabfc37
 */
define(function( require )
{
	// Dependencies
	var jQuery    = require('Utils/jquery');
	var glMatrix  = require('Vendors/gl-matrix');
	var Session   = require('Engine/SessionStorage');
	var Network   = require('Network/NetworkManager');
	var PACKET    = require('Network/PacketStructure');
	var Camera    = require('Renderer/Camera');
	var KEYS	  = require('Controls/KeyEventHandler');
	var vec2      = glMatrix.vec2;
	var mat2      = glMatrix.mat2;

	// Object to initialize
	var direction = vec2.create();
	var rotate    = mat2.create();
	
	//Configure keys here
	var MOVE = {
		RIGHT: 	KEYS.RIGHT,
		LEFT: 	KEYS.LEFT,
		UP: 	KEYS.UP,
		DOWN: 	KEYS.DOWN
	};
	
	//Multiple keys held
	var KeyEvent = {};
	
	//Memory
	var targetPos = [0, 0];
	var keysDownTimeout = null;

	//---- Now the job ----
	function processKeyDownEvent( event ) {
		if (event.which === MOVE.RIGHT || event.which === MOVE.LEFT || event.which === MOVE.UP || event.which === MOVE.DOWN) {
			
			// Skip if typing
			if (document.activeElement.tagName === 'INPUT') {
				return true;
			}
			
			// Skip if dialog is active //TODO: Expand with more to skip when active
			if (jQuery('#NpcMenu, #NpcBox').length) {
				return true;
			}
			
			if(Session.Playing && Session.Entity){
				event.stopImmediatePropagation();
				KeyEvent[event.which] = { pressed: true, continuous: event.originalEvent.repeat };
				processKeysDown();
				return false;
			}
			
			// Skip
			return true;
		}
		
		// Skip
		return true;
	}
	
	function processKeyUpEvent( event ) {
		if (event.which === MOVE.RIGHT || event.which === MOVE.LEFT || event.which === MOVE.UP || event.which === MOVE.DOWN) {
			delete KeyEvent[event.which];
		}
	}
	
	function processKeysDown(){
		clearTimeout(keysDownTimeout);
		
		if(Session.Entity && Object.keys(KeyEvent).length > 0){

			direction[0] = 0;
			direction[1] = 0;
			
			// Get direction from keyboard
			if( KeyEvent[MOVE.RIGHT] && KeyEvent[MOVE.RIGHT].pressed ) direction[0] += ( KeyEvent[MOVE.RIGHT].continuous ? 3 : 1 );
			if( KeyEvent[MOVE.LEFT] && KeyEvent[MOVE.LEFT].pressed ) direction[0] -= ( KeyEvent[MOVE.LEFT].continuous ? 3 : 1 );

			if( KeyEvent[MOVE.UP] && KeyEvent[MOVE.UP].pressed ) direction[1] += ( KeyEvent[MOVE.UP].continuous ? 3 : 1 );
			if( KeyEvent[MOVE.DOWN] && KeyEvent[MOVE.DOWN].pressed ) direction[1] -= ( KeyEvent[MOVE.DOWN].continuous ? 3 : 1 );

			// Initialize matrix, based on Camera direction
			mat2.identity(rotate);
			mat2.rotate(rotate, rotate, -Camera.direction * 45 / 180 * Math.PI);

			// Apply matrix to vector
			vec2.transformMat2( direction, direction, rotate);
			
			var newPos = [
					Math.round(Session.Entity.position[0] + direction[0]),
					Math.round(Session.Entity.position[1] + direction[1])
				];
			
			//Create move packed and add direction to current position then send packet but only when not already moving there
			if( targetPos[0] !== newPos[0] || targetPos[1] !== newPos[1] ){
				targetPos[0] = newPos[0];
				targetPos[1] = newPos[1];
				var pkt     = new PACKET.CZ.REQUEST_MOVE();
				pkt.dest[0] = newPos[0];
				pkt.dest[1] = newPos[1];
				Network.sendPacket(pkt);
			}
			
			keysDownTimeout = setTimeout(processKeysDown, 100);
		}
	}

	return function Init(){
		jQuery(window).on('keydown.map', function( event ){
				processKeyDownEvent(event);
		});
		
		jQuery(window).on('keyup.map', function( event ){
				processKeyUpEvent(event);
		});
		
		//Return true to signal successful initialization
		return true;
	}
});
