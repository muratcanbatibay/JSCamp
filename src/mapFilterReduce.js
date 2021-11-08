let cart=[
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Kalem", quantity:5, unitPrice:50},
    {id:3, productName:"Charger", quantity:6, unitPrice:100},
    {id:4, productName:"Bardak", quantity:2, unitPrice:20},
    {id:5, productName:"Laptop", quantity:7, unitPrice:12000}
]
cart.map(product=>{
console.log(product.productName +" :"+ product.unitPrice *product.quantity)
});

let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)

console.log(total);

let quantityOver2=cart.filter(product=>product.quantity>2);
console.log(quantityOver2)  