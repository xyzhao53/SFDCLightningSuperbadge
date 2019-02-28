({
	onInit : function(component, event, helper) {
        var boat = component.get("v.boat");
        component.find("service").getNewRecord(
        	"BoatReview__c", //sobjecttype
            null, //recordtypeid
            false, //skipcache
            $A.getCallback(function(){
                var boatReview = component.get("v.boatReview");
                var error = component.get("v.recordError");   
                if (error || !boatReview) {
                	console.log("error initializting data" + error);
                }else{
					component.set("v.boatReview.Boat__c",boat.Id);
                }
    
            })
        )
    }
})