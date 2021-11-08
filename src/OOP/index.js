 class Customer{

    constructor(id,customerNumber){
            this.id=id;//proto
            this.customerNumber=customerNumber;
    }


}
let customer= new Customer(1,"12345")
//prototyping
customer.name="Murat Can Batıbay";
console.log(customer.name)

Customer.bisey="bisey";
console.log(Customer.bisey);

console.log(customer.customerNumber);


class InvidiualCustomer extends Customer  {
constructor(companyName,id,customerNumber)
   

}
class CorporateCustomer   extends Customer  {



}