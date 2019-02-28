({
    doinit: function(component, event, helper) {
        component.set("v.showButton", $A.get("e.force:navigateToSObject"));
    },
   onFullDetails: function(component, event, helper) {
       console.log("BoatDetail" + component.get("v.boat"));
       var navEvt = $A.get("e.force:navigateToSObject");
       navEvt.setParams({
           "recordId": component.get("v.boat.Id")
       });
       navEvt.fire();
    },
   onBoatSelected : function(component, event, helper) {
		console.log("BoatDetail onBoatSelected");
        var boat = event.getParam("boat");
        component.set("v.boat", boat);
	}

})