({
    doSearch : function(component, event, helper) {
        var boatTypeId = component.get("v.boatTypeId");
        helper.onSearch(component, event, helper);
    },
    search: function(component, event, helper){
        console.log("BoatSearchResults.search method called");
        var params = event.getParam("arguments");
		console.log(params.boatType);
        component.set("v.boatTypeId", params.boatType);
        helper.onSearch(component);
    }
})