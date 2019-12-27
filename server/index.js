const express = require("express");
const path = require("path");
const productsAPI = require("./api/routes/products");


const app = express();

const port = process.env.PORT || "3000";

/** In order to load js in HTML*/
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/views/index.html')));

app.use('/api/products', productsAPI);

app.listen(port, () => console.log(`JS test app listening on port ${port}!`));

