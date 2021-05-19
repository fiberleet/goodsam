// Initialize and add the map
function initMap() {
    // The location of Winchester
    const winchester = { lat: 37.99992208101619, lng: -84.19208744728337 };
    // The map, centered at Winchester
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: winchester,
    });
    // The marker, positioned at Winchester
    const marker = new google.maps.Marker({
        position: winchester,
        map: map,
    });
}