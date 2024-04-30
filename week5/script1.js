let shoppingCart = [
    {name: "T-shirt", price: 20 },
    {name: "jeans", price: 50},
    {name: "sneakers", price: 80},
    {name: "backpack", price: 30},
];

let total = 0;
for (let i=0; i<4; i++) { 
    total += shoppingCart[i].price;
}
let discount = 0.1;
let discountedPrice= 0;
if (total > 100) {
    discountedPrice = total - total * discount;
}
console.log("total is", total);
console.log("discounted price is", discountedPrice);