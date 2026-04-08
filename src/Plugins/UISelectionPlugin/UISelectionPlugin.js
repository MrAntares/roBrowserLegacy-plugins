import UIVersionManager	from 'UI/UIVersionManager.js';
import BasicInfoV0 from 'UI/Components/BasicInfo/BasicInfoV0/BasicInfoV0.js';
import EquipmentV0 from 'UI/Components/Equipment/EquipmentV0/EquipmentV0.js';

export default function Init(){
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
