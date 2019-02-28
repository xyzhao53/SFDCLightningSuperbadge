({
    onBoatClick : function(component, event, helper) {
		console.log("BoatTile fire boatselect");
        var boatselect = component.getEvent("boatSelect");
		var boatId = component.get("v.boat.Id");
        console.log(boatId);
        boatselect.setParams({
            "boatId":boatId
        });
        boatselect.fire();
        
        //fire boatselected --application event
        console.log("BoatTile fire boatselected");
        var boatselected = $A.get("e.c:BoatSelected");
		var boat = component.get("v.boat");
        boatselected.setParams({
            "boat":boat
        });
        boatselected.fire();
    }
    
})