const helpers = require("../src/js/helpers/helpers");
const apiProductsURL = 'http://localhost:3000/api/products';
const container = document.getElementById("potions-result");

class FetchData {

    fetchAll() {
        fetch(`${apiProductsURL}`)
            .then(response => response.json())
            .then(data => helpers.drawData(data, container));
    }

    /**
     *
     * @param {string} potion
     * @param {string} level
     * @param {string} order
     * @param {int} minPrice
     * @param {int} maxPrice
     */

    fetchSpecificProducts(potion = '', level = '', order = '', minPrice = 0, maxPrice = 0) {

        minPrice = parseInt(minPrice);
        maxPrice = parseInt(maxPrice);

        maxPrice = maxPrice < minPrice ? 4000 : maxPrice;

        fetch(`${apiProductsURL}?order=${order}&potion=${potion}&level=${level}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(response => response.json())
            .then(data => helpers.drawData(data, container));

    }
}

module.exports = new FetchData();