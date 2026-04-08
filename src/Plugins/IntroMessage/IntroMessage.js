/**
 * Plugins/IntroMessage/IntroMessage.js
 *
 * Display an intro message (same as license screen)
 *
 * MUST PROVIDE NEWS URL IN ROBROWSER CONFIG!
 * IntroMessage: { path:'IntroMessage/IntroMessage', pars: { newsUrl: '<YOUR NEWS URL HERE>' } },
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

/**
 * Load dependencies
 */
import jQuery      from 'Utils/jquery.js';
import WinLogin    from 'UI/Components/WinLogin/WinLogin.js';
import UIComponent from 'UI/UIComponent.js';
import htmlText    from './IntroMessage.html?raw';
import cssText     from './IntroMessage.css?raw';


/**
 * Create window
 */
let IntroMessage = new UIComponent('IntroMessage', htmlText, cssText);


/**
 * Save old function
 */

//UI Version management
WinLogin.selectUIVersion();

let onAppend = WinLogin.getUI().onAppend;


IntroMessage.onAppend = function(){
	jQuery(".cont").hide();
};


IntroMessage.onRemove = function(){
	this.ui.unbind();
};

IntroMessage.init = function(){
	this.draggable();

	this.ui.find('.ok').click(function(){
		IntroMessage.remove();
		WinLogin.getUI().onAppend = onAppend;
		WinLogin.getUI().append();
		WinLogin.getUI().onAppend = appendIntroMessage;
	});
};

function appendIntroMessage(){
	WinLogin.getUI().remove();
	IntroMessage.append();
};


/**
 * Export
 */
export default function Init(pars)
{
	if(pars && pars.newsUrl){
		jQuery.ajax({
			url: pars.newsUrl,
			type: 'get',
			success: function (data) {
				if(data){
					jQuery('#IntroMessage .content').empty();
					jQuery('#IntroMessage .content').append(data);
				}
			}
		});
		
		WinLogin.getUI().onAppend = appendIntroMessage;
		return true;
	} else {
		console.warn("[IntroMessage Plugin] newsUrl param is missing. Please review your RoBrowser configuration and provide the required values!\r\n[IntroMessage: { path:'<plugin path>', pars: { newsUrl: '<news url>' } }]");
		return false;
	}
};
