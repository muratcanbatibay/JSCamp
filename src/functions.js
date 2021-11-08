function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi!"+"Ürün   "+ productName+ "         Adet"+ quantity);
}
addToCart(15);
addToCart("yumurta");
addToCart("karpuz");

let sayHello= ()=>{
console.log("Hello World")
};
sayHello();

function addToCart2(productName,quantity,unitPrice) {

}
// let product1={productName="Elma",unitPrice=10, quantity=5}
// function addToCart3(product) {
//     console.log("Ürün:"+product.productName);
//     console.log("Adet:"+product.quantity);
//     console.log("Fiyat:"+product.unitPrice);
// }

// addToCart3(product1);

function addToCart4 (product) {
    console.log(product)
}

let product= [
    {},
    {},
    {}
]

addToCart4(product)

function add(...numbers)//rest
 {  let total= 0;
   for (let i = 0; i < numbers.length; i++) {
      total= total+numbers[i];
     
       
   }   console.log(total);
}
add(20,30,40,50);