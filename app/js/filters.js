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



        }
        return fields;
    }
});