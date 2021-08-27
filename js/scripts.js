// Initialize and add the map
function initMap() {
    // The location of Richmond
    const richmond = { lat: 37.74, lng: -84.29 };
    // The map, centered at Richmond
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: richmond,
    });
    // The marker, positioned at Richmond
    const marker = new google.maps.Marker({
        position: richmond,
        map: map,
    });
}