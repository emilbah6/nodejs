import "../scss/style.scss";
import FetchData from "../../server/fetchData"


let potionInput = document.getElementById("potion");
let potionName = potionInput.value;
let filterByLevel = document.getElementById("filter-by-level");
let level = filterByLevel.value;
let orderBy = document.getElementById("order-by");
let orderByValue = orderBy.value;
let minPrice = document.getElementById("min-price");
let minPriceValue = minPrice.value;
let maxPrice = document.getElementById("max-price");
let maxPriceValue = maxPrice.value;

/** Fetch all data on load */
FetchData.fetchAll();

potionInput.addEventListener("keyup", (e) => {

    potionName = e.target.value;

    FetchData.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)
});

filterByLevel.addEventListener("change", (e) => {

    level = e.target.value;

    FetchData.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)
});

orderBy.addEventListener("change", (e) => {

    orderByValue = e.target.value;

    FetchData.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)
});

minPrice.addEventListener("change", (e) => {

    minPriceValue = e.target.value;

    FetchData.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)
});

maxPrice.addEventListener("change", (e) => {

    maxPriceValue = e.target.value;

    FetchData.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)
});