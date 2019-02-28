({
    doInit: function(component, event, helper){
        helper.onInit(component, event, helper);
    },
    
	onSave : function(component, event, helper) {
        //fire BoatReviewAdded event
        var boatreviewAdded = component.getEvent("boatReviewAdded");
        
        component.find("services").saveRecord(function(saveResult){
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                		//display success message
                var toastEvent = $A.get("e.force:showToast");
                if(toastEvent){
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "The record has been updated successfully."
                    });
                    toastEvent.fire();
                }else{
                    alert("The Review is successfully captured");
                }
            }  
        })
        if(boatreviewAdded){
            boatreviewAdded.setParam({"message":"success"});
            boatreviewAdded.fire();
        }

        
        //reset for future reviews
        helper.onInit(component, event, helper);
	},
    
    onRecordUpdated: function(component, event, helper){
        		//display success message
		var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            toastEvent.setParams({
                "title": "Success!",
                "message": "The record has been updated successfully."
            });
            toastEvent.fire();
        }else{
            alert("The Review is successfully captured");
        }
    }
    
})