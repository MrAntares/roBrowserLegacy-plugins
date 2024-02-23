define(function( require )
{
	var UIVersionManager	= require('UI/UIVersionManager');
	var BasicInfoV0 = require('UI/Components/BasicInfo/BasicInfoV0/BasicInfoV0');
	var EquipmentV0 = require('UI/Components/Equipment/EquipmentV0/EquipmentV0');

	return function Init(){
		const defaultSelectionMethod = UIVersionManager.selectUIVersion;
		const customSelectionMethod = function(publicName, versionInfo) {
			if (publicName === 'BasicInfo') {
				versionInfo.common = {1: BasicInfoV0};
			}
			if (publicName === 'Equipment') {
				versionInfo.common = {1: EquipmentV0};
			}
			return defaultSelectionMethod(publicName, versionInfo);
		}
		UIVersionManager.selectUIVersion = customSelectionMethod;
		return true;
	}
});
