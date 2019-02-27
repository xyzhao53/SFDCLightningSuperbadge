({
    onSearch: function(component, event, helper){
        var boatTypeId = component.get("v.boatTypeId");
        console.log("boatTypeId--> " + boatTypeId);

        var action = component.get("c.getBoats");
        action.setParams({"boatTypeId":boatTypeId});
        action.setCallback(this, function(response){
            var state=response.getState();
            if(state=="SUCCESS"){
            	var results = response.getReturnValue();
            	console.log(results);
        		component.set("v.boatList", results);
            }else{
                console.log("server controller call error");
            }

		});
        $A.enqueueAction(action);
    }
})