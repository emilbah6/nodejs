const express = require('express');
const router = express.Router();
const jsonData = require("../../../src/json/db.json");
const helpers = require("../../../src/js/helpers/helpers");

router.get('/', function (req, res) {

    /** In case the minPrice & the maxPrice are not set then set hem to 0*/
    let minPrice = req.query.minPrice ? req.query.minPrice : 0;
    let maxPrice = req.query.maxPrice ? req.query.maxPrice : 0;

    /** In case the minPrice & the maxPrice are 0 then set the max range between them 0-4000*/
    if(minPrice == 0 && maxPrice == 0){
        minPrice = 0;
        maxPrice = 4000;
    }

    let filteredData = jsonData.potions.filter(d => (d.price >= minPrice && d.price <= maxPrice));

    if (req.query.order) {
        filteredData = helpers.orderBy(filteredData, req.query.order);
    }

    filteredData = filteredData.filter(d => (
        (
            req.query.potion ?
                d.name.toLowerCase().includes(req.query.potion.toLowerCase()) :
                1 //
        ) &&
        (
            req.query.level ?
                req.query.level == d.required_level :
                1
        )
    ));


    res.send(filteredData);
});


module.exports = router;