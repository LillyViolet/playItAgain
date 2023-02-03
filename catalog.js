

"use strict"

const productArr = [["Football", "$25.35"], ["Yoga Mat", "$15.34"], ["Goalie Mask", "$39.24"]];

const main = document.getElementsByClassName("main");

function Product (product, price) {

    let h2text = document.createTextNode(product);
    let h3text = document.createTextNode(price);
}

function renderCatalog(productArr)    {

    for (let i=0; i < productArr.length ; i++)

    {
        var item = new Product(productArr[i][0], productArr[i][0]);

        let el = document.createElement("div");
        let del = document.createElement("button");
        
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");

        main.appendChild(el);
        el.appendChild(del);
        el.appendChild(h2);
        el.appendChild(h3); 
    }
}




// del.on('click', function(e) {
// function addToCart() {

// }

renderCatalog(productArr);






