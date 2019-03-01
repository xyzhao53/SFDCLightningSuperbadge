({
	onInit : function(component, event, helper) {
        console.log("BoatReviewsHelper.onInit");
        var boatId = component.get("v.boat.Id");
        console.log(boatId);
        var action = component.get("c.getAll");
        action.setParams({"boatId":boatId});
        action.setCallback(this, function(response){
            var state=response.getState();
            if(state=="SUCCESS"){
            	var results = response.getReturnValue();
            	console.log(results);
        		component.set("v.boatReviews", results);
            }else{
                console.log("server controller call error");
            }

		});
        $A.enqueueAction(action);
		
	}
})