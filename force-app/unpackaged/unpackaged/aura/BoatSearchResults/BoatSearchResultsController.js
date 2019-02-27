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
    },
    onBoatSelect: function(component, event, helper){
        console.log("BSR.onBoatSelect method called");
        var boatId = event.getParam("boatId");
        console.log(boatId);
        var selected = component.get("v.selectedBoatId");
        //var BTcmp = component.find("BTcmp");
        //if(selected != boatId){
        //    BTcmp.set("v.selected", "true");
        //}
		component.set("v.selectedBoatId", boatId);
    }
})