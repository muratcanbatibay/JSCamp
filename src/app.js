let konutKredileri=["Konut1","Konut2","Konut3"]
for(let i=0;i<konutKredileri.length;i++){
   // console.log("<li>");
}
function save (ogrenci) {
   // console.log(ogrenci);   
}
//save(konutKredileri);
let showProducts= function (id,...products) {
    console.log(id);
    console.log(products[0]);
}

//console.log(typeof showProducts );
//showProducts(10,"elma","armut","karpuz");

let points=[1,2,23,4,5,5,6,50]

console.log(Math.max(...points));

let populations = [10000,20000,30000];
let [small,medium,high]=populations;
console.log(small);
console.log(medium);
console.log(high);
