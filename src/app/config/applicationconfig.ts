'use strict';
// Class mainly containing configuration values to avoid hard coding values within the components
const ApplicationConfig = {
    DATA_URL: 'http://localhost:4200/assets/data/data.json',
    RANDOM_RANGEX: function() {
        // In order to refer HTML elements directly in Typescript we need to refer them by using the HTMLElment typecast
        let elem = <HTMLElement>document.querySelector('.wrapper');
        return elem.offsetWidth;   
    },
    RANDOM_RANGEY: function() {
        let elem = <HTMLElement>document.querySelector('.wrapper');
        return elem.offsetHeight;
    },
    // The size of the particle based on its designation
    SOFTWARE_ENGINEER: '20px',
    SAL1:'30px',
    SAL2: '45px',
    MGR: '60px',
    SR_MGR: '75px',
    VP: '100px',
    // Mapping of color coordinates based on the geographical location of the particle
    LOCATION_COLORCOORDS: [
        {
            "id": 1,
            "value": "#FF530D"
        },
        {
            "id": 2,
            "value": "#0012FF"
        },
        {
            "id": 3,
            "value": "#FFC90D"
        },
        {
            "id": 4,
            "value": "#5212B2"
        }
    ],
    // Return the color coordinate of the location based on the location ID
    getLocationByID: function(id) {
        return this.LOCATION_COLORCOORDS.filter((item) => {
            return item ? item.id === id: {};
        });
    }
}

export default ApplicationConfig;