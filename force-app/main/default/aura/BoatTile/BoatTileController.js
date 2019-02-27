({
    onBoatClick : function(component, event, helper) {
		console.log("BoatTile.onBoatClick method called");
        var boatselect = component.getEvent("boatSelect");
		var boatId = component.get("v.boat.Id");
        console.log(boatId);
        boatselect.setParams({
            "boatId":boatId
        });
        boatselect.fire();
    }
})