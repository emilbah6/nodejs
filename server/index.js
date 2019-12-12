const express = require("express");
const path = require("path");
const jsonData = require("../src/json/db");

const app = express();

const port = process.env.PORT || "3000";

/** In order to load js in HTML*/
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/views/index.html')));

app.get('/products', (req, res) => {
        let filteredData;

        if (req.query.order) {
            filteredData = orderBy(req.query.order);
            filteredData = filteredData.filter(d => ((req.query.potion ? d.name.toLowerCase().includes(req.query.potion.toLowerCase()) : 1) && (req.query.level ? req.query.level == d.required_level : 1)));
        } else {
            filteredData = jsonData.potions.filter(d => ((req.query.potion ? d.name.toLowerCase().includes(req.query.potion.toLowerCase()) : 1) && (req.query.level ? req.query.level == d.required_level : 1)));
        }

        res.send(filteredData);
    }
);
app.get('/products/price/:minPrice/:maxPrice', (req, res) => {
        let priceResult = jsonData.potions.filter(d => (d.price >= parseInt(req.params.minPrice) && d.price <= parseInt(req.params.maxPrice)));
        res.send(priceResult);
    }
);

app.listen(port, () => console.log(`JS test app listening on port ${port}!`));

function orderBy(order) {
    switch (order) {
        case 'name':
            return jsonData.potions.sort((a, b) => (a.name > b.name) ? 1 : -1);
        case 'tags':
            return jsonData.potions.sort((a, b) => (a.tags > b.tags) ? 1 : -1);
        case 'price':
            return jsonData.potions.sort((a, b) => (a.price > b.price) ? 1 : -1);
        case 'required_level':
            return jsonData.potions.sort((a, b) => (a.required_level > b.required_level) ? 1 : -1);
        default:
            return jsonData.potions.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
}