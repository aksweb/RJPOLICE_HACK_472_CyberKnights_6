class LocationPicker {
    constructor(containerId, options) {
        this.container = document.getElementById(containerId);
        this.map = null;
        this.marker = null;
        this.options = options || {};
        this.initMap();
    }

    initMap() {
        const defaultOptions = {
            zoom: 15,
            center: { lat: 0, lng: 0 },
            mapTypeControl: false,
            streetViewControl: false,
        };

        const mapOptions = { ...defaultOptions, ...this.options };

        this.map = new google.maps.Map(this.container, mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
        });

        if (this.options.setCurrentPosition) {
            this.setCurrentPosition();
        }
    }

    setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                const currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                this.map.setCenter(currentPosition);
                this.marker.setPosition(currentPosition);
            });
        }
    }
}
