/**
 * ColoredSkies Plugin
 *
 * Plugin to override black sky color on outdoor maps.
 *
 * This file is a plugin for ROBrowser, (http://www.robrowser.com/).
 *
 * @author Antares
 */
define(function( require )
{
    // Dependencies
    var WeatherEffect = require('DB/Effects/WeatherEffect');
	
	var _isInitialized = false;
	
	function overrideWeatherEffect(){
		
		var sky = WeatherEffect.sky;
		
		// Sky color list for easier handling. Add/change as you like.
		var skycolors = {
			// Midgard/Normal world
			normal: { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor: false },
			sunset: { skyColor:[0.8, 0.6, 0.5, 1.0], cloudColor: false },
			overcast: { skyColor:[0.9, 0.91, 0.93, 1.0], cloudColor: false },
			overcastsunset: { skyColor:[0.75, 0.7, 0.7, 1.0], cloudColor: false }, 
			desert: { skyColor:[0.96, 0.95, 0.85, 1.0], cloudColor: false },
			desertsunset: { skyColor:[0.71, 0.66, 0.7, 1.0], cloudColor: false },
			night: { skyColor:[0.15, 0.14, 0.32, 1.0], cloudColor: false },
			
			// Specials for other dimensions
			special0: { skyColor:[0.28, 0.21, 0.29, 1.0], cloudColor: false },
			special1: { skyColor:[0.76, 0.52, 0.66, 1.0], cloudColor: false },
			special2: { skyColor:[0.85, 0.91, 0.74, 1.0], cloudColor: false },
			special3: { skyColor:[0.74, 0.92, 0.95, 1.0], cloudColor: false },
			special4: { skyColor:[0.74, 0.95, 0.84, 1.0], cloudColor: false },
			special5: { skyColor:[0.74, 0.87, 0.95, 1.0], cloudColor: false },
			special6: { skyColor:[0.42, 0.10, 0.43, 1.0], cloudColor: false },
		};
		
		// Officals (if you want to override)
		//sky['airplane.rsw']    = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['airplane_01.rsw'] = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['gonryun.rsw']     = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['gon_dun02.rsw']   = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['himinn.rsw']      = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['ra_temsky.rsw']   = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['rwc01.rsw']       = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['sch_gld.rsw']     = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['valkyrie.rsw']    = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['yuno.rsw']        = { skyColor:[0.4, 0.6, 0.8, 1.0], cloudColor:[1.0, 1.0, 1.0] };
		//sky['5@tower.rsw']     = { skyColor:[0.2, 0.0, 0.2, 1.0],    cloudColor:[1.0, 0.7, 0.7] };
		//sky['thana_boss.rsw']  = { skyColor:[0.88, 0.83, 0.76, 1.0], cloudColor:[0.37, 0.0, 0.0] };
		
		// Hugel
		sky['hu_fild01.rsw'] = 
		sky['hu_fild02.rsw'] = 
		sky['hu_fild03.rsw'] = 
		sky['hu_fild04.rsw'] = 
		sky['hu_fild05.rsw'] = 
		sky['hu_fild06.rsw'] = 
		sky['hu_fild07.rsw'] = 
		sky['hugel.rsw'] = skycolors.normal;
		
		// Ein
		sky['ein_fild01.rsw'] = 
		sky['ein_fild02.rsw'] = 
		sky['ein_fild03.rsw'] = 
		sky['ein_fild04.rsw'] = 
		sky['ein_fild05.rsw'] = 
		sky['ein_fild06.rsw'] = 
		sky['ein_fild07.rsw'] = 
		sky['ein_fild08.rsw'] = 
		sky['ein_fild09.rsw'] = 
		sky['ein_fild10.rsw'] = 
		sky['einbroch.rsw'] = 
		sky['einbech.rsw'] = skycolors.overcastsunset;
		
		
		sky['yuno_fild01.rsw'] = 
		sky['yuno_fild02.rsw'] = 
		sky['yuno_fild03.rsw'] = 
		sky['yuno_fild04.rsw'] = 
		sky['yuno_fild05.rsw'] = 
		sky['yuno_fild06.rsw'] = 
		sky['yuno_fild07.rsw'] = 
		sky['yuno_fild08.rsw'] = 
		sky['yuno_fild09.rsw'] = 
		sky['yuno_fild10.rsw'] = 
		sky['yuno_fild11.rsw'] = 
		sky['yuno_fild12.rsw'] = skycolors.sunset;
		
		// Odin
		sky['odin_tem01.rsw'] = 
		sky['odin_tem02.rsw'] = 
		sky['odin_tem03.rsw'] = skycolors.normal;
		
		// LHZ
		sky['lhz_fild01.rsw'] = 
		sky['lhz_fild02.rsw'] = 
		sky['lhz_fild03.rsw'] = 
		sky['lighthalzen.rsw'] = skycolors.overcast;
		
		// Rachel
		sky['ra_fild01.rsw'] = 
		sky['ra_fild02.rsw'] = 
		sky['ra_fild03.rsw'] = 
		sky['ra_fild04.rsw'] = 
		sky['ra_fild05.rsw'] = 
		sky['ra_fild06.rsw'] = 
		sky['ra_fild07.rsw'] = 
		sky['ra_fild08.rsw'] = 
		sky['ra_fild09.rsw'] = 
		sky['ra_fild10.rsw'] = 
		sky['ra_fild11.rsw'] = 
		sky['ra_fild12.rsw'] = 
		sky['ra_fild13.rsw'] = 
		sky['ra_temple.rsw'] = 
		sky['rachel.rsw'] = skycolors.desert;
		
		// Veins
		sky['ve_fild01.rsw'] = 
		sky['ve_fild02.rsw'] = 
		sky['aru_gld.rsw'] = 
		sky['ve_fild03.rsw'] = 
		sky['ve_fild04.rsw'] = 
		sky['ve_fild05.rsw'] = 
		sky['ve_fild06.rsw'] = 
		sky['ve_fild07.rsw'] = 
		sky['veins.rsw'] = skycolors.desertsunset;
		
		// Alde/Mjolnir
		sky['aldebaran.rsw'] = 
		sky['alde_gld.rsw'] = 
		sky['mjolnir_01.rsw'] = 
		sky['mjolnir_02.rsw'] = 
		sky['mjolnir_03.rsw'] = 
		sky['mjolnir_04.rsw'] = 
		sky['mjolnir_05.rsw'] = 
		sky['mjolnir_06.rsw'] = 
		sky['mjolnir_07.rsw'] = 
		sky['mjolnir_08.rsw'] = 
		sky['mjolnir_09.rsw'] = 
		sky['mjolnir_10.rsw'] = 
		sky['mjolnir_11.rsw'] = 
		sky['mjolnir_12.rsw'] = skycolors.normal;
		
		// Geffen
		sky['glast_01.rsw'] = 
		sky['gef_fild00.rsw'] = 
		sky['gef_fild01.rsw'] = 
		sky['gef_fild02.rsw'] = 
		sky['gef_fild03.rsw'] = 
		sky['gef_fild04.rsw'] = 
		sky['gef_fild05.rsw'] = 
		sky['gef_fild06.rsw'] = 
		sky['gef_fild07.rsw'] = 
		sky['gef_fild08.rsw'] = 
		sky['gef_fild09.rsw'] = 
		sky['gef_fild10.rsw'] = 
		sky['gef_fild11.rsw'] = 
		sky['gef_fild12.rsw'] = 
		sky['gef_fild13.rsw'] = 
		sky['gef_fild14.rsw'] = 
		sky['geffen.rsw'] = skycolors.normal;
		
		// Prontera/Iz
		sky['prt_fild00.rsw'] = 
		sky['prt_fild01.rsw'] = 
		sky['prt_fild02.rsw'] = 
		sky['prt_fild03.rsw'] = 
		sky['prt_fild04.rsw'] = 
		sky['prt_fild05.rsw'] = 
		sky['prt_fild06.rsw'] = 
		sky['prt_fild07.rsw'] = 
		sky['prt_fild08.rsw'] = 
		sky['prt_fild09.rsw'] = 
		sky['prt_fild10.rsw'] = 
		sky['prt_fild11.rsw'] = 
		sky['prt_monk.rsw'] = 
		sky['prontera.rsw'] =
		sky['izlude.rsw'] = 
		sky['izlu2dun.rsw'] =  skycolors.normal;
		
		// Payon
		sky['pay_fild01.rsw'] = 
		sky['pay_fild02.rsw'] = 
		sky['pay_fild03.rsw'] = 
		sky['pay_fild04.rsw'] = 
		sky['pay_fild05.rsw'] = 
		sky['pay_fild06.rsw'] = 
		sky['pay_fild07.rsw'] = 
		sky['pay_fild08.rsw'] = 
		sky['pay_fild09.rsw'] = 
		sky['pay_fild10.rsw'] = 
		sky['pay_fild11.rsw'] = 
		sky['pay_gld.rsw'] = 
		sky['pay_arche.rsw'] = 
		sky['payon.rsw'] = skycolors.normal;
		
		// Alb/Tur
		sky['alberta.rsw'] = 
		sky['alb2trea.rsw'] = 
		sky['tur_dun01.rsw'] = skycolors.normal;
		
		// Moc
		sky['moc_fild01.rsw'] = 
		sky['moc_fild02.rsw'] = 
		sky['moc_fild03.rsw'] = 
		sky['moc_fild04.rsw'] = 
		sky['moc_fild05.rsw'] = 
		sky['moc_fild06.rsw'] = 
		sky['moc_fild07.rsw'] = 
		sky['moc_fild08.rsw'] = 
		sky['moc_fild09.rsw'] = 
		sky['moc_fild10.rsw'] = 
		sky['moc_fild11.rsw'] = 
		sky['moc_fild12.rsw'] = 
		sky['moc_fild13.rsw'] = 
		sky['moc_fild14.rsw'] = 
		sky['moc_fild15.rsw'] = 
		sky['moc_fild16.rsw'] = 
		sky['moc_fild17.rsw'] = 
		sky['moc_fild18.rsw'] = 
		sky['moc_fild19.rsw'] = 
		sky['moc_fild20.rsw'] = 
		sky['moc_fild21.rsw'] = 
		sky['moc_fild22.rsw'] = 
		sky['moc_fild22a.rsw'] = 
		sky['moc_fild22b.rsw'] = 
		sky['moc_ruins.rsw'] = 
		sky['morocc.rsw'] = skycolors.desert;
		
		// Comodo
		sky['cmd_fild01.rsw'] = 
		sky['cmd_fild02.rsw'] = 
		sky['cmd_fild03.rsw'] = 
		sky['cmd_fild04.rsw'] = 
		sky['cmd_fild05.rsw'] = 
		sky['cmd_fild06.rsw'] = 
		sky['cmd_fild07.rsw'] = 
		sky['cmd_fild08.rsw'] = 
		sky['cmd_fild09.rsw'] = skycolors.normal;
		sky['comodo.rsw'] = skycolors.night;
		
		// Umbala
		sky['um_fild01.rsw'] = 
		sky['um_fild02.rsw'] = 
		sky['um_fild03.rsw'] = 
		sky['um_fild04.rsw'] = 
		sky['umbala.rsw'] = skycolors.normal;
		
		// Nif
		sky['niflheim.rsw'] = 
		sky['nif_fild01.rsw'] = 
		sky['nif_fild02.rsw'] = skycolors.special0;

		// Xmas
		sky['xmas.rsw'] =
		sky['xmas_fild01.rsw'] = skycolors.overcast;

		// Jawaii
		sky['jawaii.rsw'] = skycolors.normal;
		
		// Nameless
		sky['nameless_n.rsw'] = skycolors.overcast;
		
		// Ama
		sky['ama_fild01.rsw'] =
		sky['amatsu.rsw'] = skycolors.normal;
		
		// Gon
		sky['gon_fild01.rsw'] = skycolors.normal;
		
		// Lou
		sky['lou_fild01.rsw'] =
		sky['lou_dun01.rsw'] =
		sky['louyang.rsw'] = skycolors.sunset;
		
		// Ayo
		sky['ayo_fild01.rsw'] =
		sky['ayothaya.rsw'] = skycolors.normal;
		
		// Mosk
		sky['mosk_fild02.rsw'] =
		sky['mosk_dun01.rsw'] =
		sky['mosk_dun02.rsw'] =
		sky['mosk_dun03.rsw'] =
		sky['moscovia.rsw'] = skycolors.overcast;
		
		// Bra
		sky['bra_fild01.rsw'] =
		sky['brasilis.rsw'] = skycolors.normal;
		
		// Dewata
		sky['dew_fild01.rsw'] =
		sky['dew_dun01.rsw'] =
		sky['dewata.rsw'] = skycolors.sunset;
		
		// Malaya
		sky['ma_fild01.rsw'] =
		sky['ma_fild02.rsw'] =
		sky['ma_scene01.rsw'] =
		sky['malaya.rsw'] = skycolors.overcast;
		
		// Eclage
		sky['eclage.rsw'] =
		sky['ecl_fild01.rsw'] = skycolors.special4;
		
		// Bifrost
		sky['bif_fild01.rsw'] =
		sky['bif_fild02.rsw'] = skycolors.special6;
		
		// Splendide
		sky['splendide.rsw'] =
		sky['spl_fild01.rsw'] =
		sky['spl_fild02.rsw'] =
		sky['spl_fild03.rsw'] = skycolors.special2;
		
		// Camp
		sky['mid_camp.rsw'] = skycolors.special1;
		
		// Manuk
		sky['man_fild01.rsw'] =
		sky['man_fild03.rsw'] =
		sky['man_fild02.rsw'] =
		sky['manuk.rsw'] = skycolors.special3;
		
		// Dicastes
		sky['dicastes02.rsw'] =
		sky['dicastes01.rsw'] =
		sky['dic_fild01.rsw'] =
		sky['dic_fild02.rsw'] = skycolors.special5;

		// Malangdo
		sky['malangdo.rsw'] = skycolors.normal;

		// Lasagna
		sky['lasagna.rsw'] =
		sky['lasa_fild01.rsw'] =
		sky['lasa_fild02.rsw'] = skycolors.normal;

		// Issgard
		sky['icecastle.rsw'] =
		sky['jor_back1.rsw'] =
		sky['jor_back2.rsw'] =
		sky['jor_back3.rsw'] =
		sky['jor_tail.rsw'] = skycolors.overcast;

		// Wolf village
		sky['wolfvill.rsw'] =
		sky['gw_fild01.rsw'] =
		sky['gw_fild02.rsw'] = skycolors.desert;
		
		// Rock ridge
		sky['harboro1.rsw'] =
		sky['rockrdg1.rsw'] =
		sky['rockrdg2.rsw'] = skycolors.desert;
		
		return true;
	}

    return function Init(){
		
		// Do the magic only once
        if(!_isInitialized){
			_isInitialized = overrideWeatherEffect();
		}

        // Return true to signal successful initialization
        return true;
    }
});


