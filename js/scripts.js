// Initialize and add the map
function initMap() {
    // The location of Richmond
    const richmond = { lat: 37.74, lng: -84.29 };
    // The map, centered at Richmond
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: richmond,
    });
    // The circle, positioned at Richmond
    const circle = new google.maps.Circle({
        center: richmond,
        map: map,
        radius: 1000 * 100,
        strokeColor: "#FCDF02",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.35
    });
}