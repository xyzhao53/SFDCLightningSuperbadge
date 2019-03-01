({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    
    onPlotMapMarker : function(component) {
        var latitude = event.getParam("lat");
        var longitude = event.getParam("long");
        component.set("v.location, "{'latitude' : latitude, 'longitude' : longitude});
    }
})