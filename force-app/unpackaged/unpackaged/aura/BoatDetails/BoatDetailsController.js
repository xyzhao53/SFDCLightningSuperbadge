({
	onBoatSelected : function(component, event, helper) {
		console.log("BoatDetails onBoatSelected");
        var boat = event.getParam("boat");
        component.set("v.Id", boat.Id);
        component.set("v.boat", boat);
        var service = component.find("service");
        service.set("v.recordId", boat.Id);
        service.reloadRecord();
	}
})