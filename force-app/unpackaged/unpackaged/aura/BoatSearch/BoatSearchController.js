({
	onFormSubmit : function(component, event, helper) {
        console.log("BoatSearch event received");
        console.log(event.getParams("formData"));
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        console.log(boatTypeId);
        var BSRcmp = component.find("BSRcmp");
		BSRcmp.search(boatTypeId);
	}
})