({
	onBoatSelected : function(component, event, helper) {
		console.log("BoatDetails onBoatSelected");
        var boat = event.getParam("boat");
        component.set("v.Id", boat.Id);
        component.set("v.boat", boat);
        var service = component.find("service");
        //service.set("v.recordId", boat.Id);
        service.reloadRecord();
	},
    onBoatReviewAdded: function(component, event, helper){
        console.log("BoatDetails onBoatReviewAdded");
        //var boatReview = event.getParam("message");
        //if(boatReview){
            component.set("v.selectedTabId", "boatreviewtab");
        //}
    }
})