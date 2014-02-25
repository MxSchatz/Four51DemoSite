'use strict';

/* Filters */

four51.app.filter('onproperty', function($451) {
	var defaults = {
		'OrderStats': 'Type',
		'Message': 'Box'
	};

	return function(input, query) {
		if (!input || input.length === 0) return;
		if (!query) return input;
		query.Property = query.Property || defaults[query.Model];
		return $451.filter(input, query);
	}
});

four51.app.filter('kb', function() {
	return function(value) {
		return isNaN(value) ? value : parseFloat(value) / 1024;
	}
});

four51.app.filter('noliverates', function() {
	return function(value) {
		var output = [];
		angular.forEach(value, function(v) {
			if (v.ShipperRateType != 'ActualRates')
				output.push(v);
		});
		return output;
	}
});

four51.app.filter('reNameVP', function() {
    return function(fields) {

        switch(fields)
        {
            case 'FirstName':
                fields = 'First Name'
                break;
            case 'LastName':
                fields = 'Last Name'
                break;
            case 'Realtor_image':
                fields = 'Upload Your Photo'
                break;
            case 'RealtorCompayName':
                fields = 'Realtor Compay Name'
                break;
            case 'Realtor_select':
                fields = 'Realtor Company Logo Selection'
                break;
            case 'Address1':
                fields = 'Address 1'
                break;
            case 'Address2':
                fields = 'Address 2'
                break;
            case 'PhoneLabel':
                fields = 'Type 1'
                break;
            case 'FaxLabel':
                fields = 'Type 2'
                break;
            case 'Header_inside_back':
                fields = 'Tagline for the Left Back Panel'
                break;
            case 'Header_center_back':
                fields = 'Tagline for the Center Back Panel'
                break;
            case 'V02_Address':
                fields = 'Address'
                break;
            case 'V03_City':
                fields = 'City'
                break;
            case 'V04_Offer1_Info':
                fields = 'Offer 1 Info'
                break;
            case 'V04_Offer1_Subinfo':
                fields = 'Offer 1 Sub-Info'
                break;
            case 'V04_Price_Offer1':
                fields = 'Price Offer 1'
                break;
            case 'V05_Offer2_Info':
                fields = 'Offer 2 Info'
                break;
            case 'V05_Offer2_SubInfo':
                fields = 'Offer 2 Sub-Info'
                break;
            case 'V05_Price_Offer2':
                fields = 'Price Offer 2'
                break;
            case 'V06_Offer3_Description':
                fields = 'Offer 3 Description'
                break;
            case 'V06_Offer3_Info':
                fields = 'Offer 3 Info'
                break;
            case 'V06_Offer3_Description':
                fields = 'Offer 3 Info'
                break;
            case 'V06_Price_Offer3':
                fields = 'Price Offer 3'
                break;
            case 'V07_Offer4_Info':
                fields = 'Offer 4 Info'
                break;
            case 'V07_Offer4_SubInfo':
                fields = 'Offer 4 Sub-Info'
                break;
            case 'V07_Price_Offer4':
                fields = 'Price Offer 4'
                break;
            case 'PhonePrefix':
                fields = 'Optional Phone'
                break;
            case 'PhoneAC':
                fields = ''
                break;
            case 'PhoneNumber':
                fields = ''
                break;
            case 'PhoneEX':
                fields = ''
                break;
            case 'LocationDropdown':
                fields = 'Select Your Location'
                break;
            case 'Backer':
                fields = 'Select Backer Color'
                break;
            case 'Phone_ac':
                fields = 'Telephone Number'
                break;
            case 'Phone_num':
                fields = ''
                break;
            case 'Phone_ext':
                fields = ''
                break;
            case 'Fax_ac':
                fields = 'Telephone Number'
                break;
            case 'Fax_num':
                fields = ''
                break;
            case 'Fax_ext':
                fields = ''
                break;
            case 'FaxAC':
                fields = 'Fax Number'
                break;
            case 'FaxNumber':
                fields = ''
                break;
            case 'FaxEX':
                fields = ''
                break;
            case 'V01_address':
                fields = 'Address'
                break;
            case 'V02_Address2':
                fields = 'Suite, Building, Apartment'
                break;
            case 'V03_city':
                fields = 'City'
                break;
            case 'V04_ST':
                fields = 'State'
                break;
            case 'V05_zip':
                fields = 'Zip'
                break;
            case 'ConsecutiveNumber':
                fields = 'Consecutive Number'
                break;
            case 'V06_phone_ac':
                fields = ''
                break;
            case 'V06_phone_num':
                fields = ''
                break;
            case 'V06_phone_ext':
                fields = ''
                break;
            case 'V07_fax_ac':
                fields = ''
                break;
            case 'V07_fax_num':
                fields = ''
                break;
            case 'V07_fax_ext':
                fields = ''
                break;
            case 'V08_info_num_num':
                fields = ''
                break;

            case 'V08_info_num_ext':
                fields = ''
                break;

            case 'V09_outstate_num':
                fields = ''
                break;

            case 'V09_outstate_ext':
                fields = ''
                break;
            case 'V10_TTY_num':
                fields = ''
                break;
            case 'V10_TTY_ext':
                fields = ''
                break;
            case 'V08_info_num_ac':
                fields = 'Info Number'
                break;
            case 'V09_outstate_ac':
                fields = 'Outside Area Contact'
                break;
            case 'V10_TTY_ac':
                fields = 'TTY Contact Number'
                break;
            case 'website':
                fields = 'Web Address'
                break;
            case 'V11_formnumber':
                fields = 'Form Number'
                break;
            case 'NumberPlies':
                fields = 'No. of Plies'
                break;
            case 'ColorPly1':
                fields = 'Ply1'
                break;
            case 'ColorPly2':
                fields = 'Ply2'
                break;
            case 'ColorPly3':
                fields = 'Ply 3'
                break;
            case 'ColorPly4':
                fields = 'Ply 4'
                break;
            case 'ColorPly5':
                fields = 'Ply 5'
                break;
            case 'V12_marginals':
                fields = 'Ply1'
                break;
            case 'V13_Marginal2':
                fields = 'Ply2'
                break;
            case 'V14_marginal3':
                fields = 'Ply 3'
                break;
            case 'V15_marginal4':
                fields = 'Ply 4'
                break;
            case 'V16_marginal5':
                fields = 'Ply 5'
                break;
            case 'CampaignName':
                fields = 'Campaign Name (for saving purposes only)'
                break;
            case 'PermitNumber':
                fields = 'Number'
                break;
            case 'CompanyName':
                fields = 'Company Name'
                break;






        }
        return fields;
    }
});