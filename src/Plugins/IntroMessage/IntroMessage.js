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

define(function( require )
{
	'use strict';
	
	var NEWS_URL = "";


	/**
	 * Load dependencies
	 */
	var jQuery      = require('Utils/jquery');
	var Configs 	= require('Core/Configs');
	var WinLogin    = require('UI/Components/WinLogin/WinLogin');
	var UIComponent = require('UI/UIComponent');
	var Renderer    = require('Renderer/Renderer');
	var htmlText    = require('text!./IntroMessage.html');
	var cssText     = require('text!./IntroMessage.css');


	/**
	 * Create window
	 */
	var IntroMessage = new UIComponent('IntroMessage', htmlText, cssText);


	/**
	 * Save old function
	 */
	var onAppend = WinLogin.onAppend;


	IntroMessage.onAppend = function(){
		jQuery(".cont").hide();
	};


	IntroMessage.onRemove = function(){
		this.ui.unbind();
	};

	IntroMessage.init = function(){
		this.draggable();
		jQuery.ajax({
			url: NEWS_URL,
			type: 'post',
			success: function (data) {
				if(data){
					jQuery('#IntroMessage .content').empty();
					jQuery('#IntroMessage .content').append(data);
				}
			}
		 });

		this.ui.find('.ok').click(function(){
			IntroMessage.remove();
			WinLogin.onAppend = onAppend;
			WinLogin.append();
		});
	};


	/**
	 * Export
	 */
	return function Init(pars)
	{
		if(pars && pars.newsUrl){
			NEWS_URL = pars.newsUrl;
			WinLogin.onAppend = function(){
				WinLogin.remove();
				IntroMessage.append();
			};
			return true;
		} else {
			console.warn("[IntroMessage Plugin] newsUrl param is missing. Please review your RoBrowser configuration and provide the required values!\r\n[IntroMessage: { path:'<plugin path>', pars: { newsUrl: '<news url>' } }]");
			return false;
		}
	};
});
