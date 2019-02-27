({
	doinit : function(component, event, helper) {
        //first check if event.force:createRecord is available to use
        var isEnabled=$A.get("event.force:createRecord");
        if(!isEnabled){
            //hide "New" button
            $A.util.toggleClass(component.find("newButtonDiv"), "slds-hide");
        }
        
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response){
            var results = response.getReturnValue();
            console.log(results);
        	component.set("v.boatTypes", results);
		});
        $A.enqueueAction(action);
    },

    //create new boat(no need to check for the if event.createrecord again)
    createBoat: function(component, event, helper){
        //check for the boat type
        console.log(component.find("boatTypeId").get("v.value"));
        var boatType = component.find("boatTypeId").get("v.value");
        var action = $A.get("event.force:createRecord");
        if(boatType!=""){
            action.setParams({
                "entityApiName":"Boat__c",
                "defaultFieldValues": {
                    BoatType__c : boatType,
                }
            });
        }else{
            action.setParams({
                "entityApiName":"Boat__c"
            });
        }
        action.fire();
    },
    
    onFormSubmit: function(component, event, helper){
        console.log("BoatSearchForm.onFormSubmit");
        var submitForm = component.getEvent("formsubmit");
		var boatType = component.find("boatTypeId").get("v.value");
        console.log(boatType);
        submitForm.setParams({
            "formData":
            {"boatTypeId": boatType}
        });
        submitForm.fire();
    }
})