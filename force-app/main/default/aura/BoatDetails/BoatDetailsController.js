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
        component.set("v.selectedTabId", "boatreviewtab");
        
        //refresh review tab
        var BoatReviews = component.find("BoatReviews");
        BoatReviews.refresh();
    },
    onRecordUpdated : function(component, event, helper){
        var boat = component.get("v.boat");
        console.log("onRecordUpdated" + boat.Id);
        var BoatReviews = component.find("BoatReviews");
        console.log("BoatReviews: " + BoatReviews);
        if(typeof BoatReviews != 'undefined'){
            BoatReviews.refresh();
        }
    }


})