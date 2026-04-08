/**
 * BBGutterLines Plugin
 *
 * Makes the Bowling Bash "Gutter Lines" visible when casting BB
 *
 * This file is a plugin for ROBrowser, (http://www.robrowser.com/).
 *
 * @author Antares
 */

// Dependencies
import Session from 'Engine/SessionStorage.js';
import SkillTargetSelection	from 'UI/Components/SkillTargetSelection/SkillTargetSelection.js';
import EffectManager from 'Renderer/EffectManager.js';
import SkillId from 'DB/Skills/SkillConst.js';
import Altitude from 'Renderer/Map/Altitude.js';

let _skill = 0;
let _maxIndex = 0;

const C_EFFECT_SIZE			= 14;	// Radius to check around the player
const C_EFFECT_ID 			= 242;	// Land Protector effect
const C_EFFECT_AID_PREFIX	= 'BBGL_';

function showGutterLines(self, args){
	if(args && args[0] && args[0].SKID){
		_skill = args[0].SKID
		if(_skill === SkillId.KN_BOWLINGBASH){
			if(Session.Entity){
				let pos = Session.Entity.position;
				let startX = pos[0] - C_EFFECT_SIZE;
				let startY = pos[1] - C_EFFECT_SIZE;
				let endX = pos[0] + C_EFFECT_SIZE;
				let endY = pos[1] + C_EFFECT_SIZE;
				let index = 0;
				for(let x = startX; x <= endX; x++){
					for(let y = startY; y <= endY; y++){
						if(!checkPosition([x, y])){
							let AID = C_EFFECT_AID_PREFIX + (index++);
							let alt = Altitude.getCellHeight(  x,  y );
							EF_Init_Param = {
								effectId: C_EFFECT_ID,
								ownerAID: AID,
								position: [x, y, alt ]
							};
							EffectManager.spam( EF_Init_Param );
						}
					}
				}
				_maxIndex = index;
			}
		}
	}
}

function removeGutterLines(self, args){
	if(_skill === SkillId.KN_BOWLINGBASH){
		if(_maxIndex){
			for(let i = 0; i < _maxIndex; i++){
				let AID = C_EFFECT_AID_PREFIX + i;
				EffectManager.remove(null, AID, C_EFFECT_ID);
			}
		}
	}
}

function checkPosition( position ){
	let posX = position[0];
	let posY = position[1];
	return (checkPosSub(posX) && checkPosSub(posY));
}

function checkPosSub( coord ){
	if(!isNaN(coord)){
		let remainder = coord % 40;
		return (remainder > 5);
	}
	return false;
}

function extendSet(){
	let orig = SkillTargetSelection.set;
	SkillTargetSelection.set = function(){
		orig.apply(this, arguments);
		showGutterLines(this, arguments);
	}
}

function extendRemove(){
	let orig = SkillTargetSelection.onRemove;
	SkillTargetSelection.onRemove = function(){
		orig.apply(this, arguments);
		removeGutterLines(this, arguments);
	}
}

export default function Init(){
	//Check if already set
	if(!SkillTargetSelection.BBGLPluginEnabled){
		extendSet();
		extendRemove();
		SkillTargetSelection.BBGLPluginEnabled = true;
	}
	
	//Return true to signal successful initialization
	return true;
}

