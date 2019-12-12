import "../scss/style.scss"

let container = document.getElementById("potions-result");
let potionInput = document.getElementById("potion");
let potionName = potionInput.value;
let filterByLevel = document.getElementById("filter-by-level");
let level = filterByLevel.value;
let orderBy = document.getElementById("order-by");
let minPrice = document.getElementById("min-price");
let minPriceValue = minPrice.value;
let maxPrice = document.getElementById("max-price");
let maxPriceValue = maxPrice.value;

fetch(`http://localhost:3000/products?potion=${potionName}&level=${level}`)
    .then(response => response.json())
    .then(data => drawData(data));

potionInput.addEventListener("keyup", (e) => {

    potionName = e.target.value;

    fetch(`http://localhost:3000/products?potion=${potionName}&level=${level}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            drawData(data);
        })
});

filterByLevel.addEventListener("change", (e) => {

    level = e.target.value;
    fetch(`http://localhost:3000/products?potion=${potionName}&level=${level}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            drawData(data);
        })
});

orderBy.addEventListener("change", (e) => {

    let orderByValue = e.target.value;
    fetch(`http://localhost:3000/products?order=${orderByValue}&potion=${potionName}&level=${level}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            drawData(data);
        })
});

minPrice.addEventListener("change", (e) => {

    minPriceValue = e.target.value;
    fetch(`http://localhost:3000/products/price/${minPriceValue}/${(maxPriceValue == 0 || maxPriceValue < minPriceValue ? 4000 : maxPriceValue)}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            drawData(data);
        })
});

maxPrice.addEventListener("change", (e) => {

    maxPriceValue = e.target.value;
    fetch(`http://localhost:3000/products/price/${minPriceValue}/${(maxPriceValue < minPriceValue ? 4000 : maxPriceValue)}?potion=${potionName}&level=${level}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            drawData(data);
        })
});

function drawData(data) {

    let colElements = '';

    data.forEach(element => {

        let tags = element.tags.toString();
        tags = tags.replace(/_/g, " ");

        colElements += `<div class="col">
        <img src="../images/${element.id}.png" alt="">
        <div>
            <h4>${element.name}</h4>
            <p class="required-level"><span>Required level:</span> ${element.required_level}</p>
            <p class="tags"><span>Tags:</span> ${tags}</p>
            <div class="price"><span class="float-left">Price</span> <span class="float-right">${element.price} &euro;</span></div>
        </div>
    </div>`;
    });

    container.innerHTML = colElements;
}