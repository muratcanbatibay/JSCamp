function toplama(...numbers)//rest
 {  let total= 0;
   for (let i = 0; i < numbers.length; i++) {
      total= total+numbers[i];
     
       
   }   console.log(total);
}
toplama(20,30,80,120);


function arkadasSayilar(sayi1,sayi2) {
let toplam1=0;
let toplam2=0;

for (let i = 1; i < sayi1; i++){
    if(sayi1%i==0){
    toplam1=toplam1+i;
}
}

for (let j = 1; j < sayi2; j++) {
    if(sayi2%j==0){
        toplam2=toplam2+j
    }
    
}

if (sayi1==toplam2&&sayi2==toplam1) {
    console.log("Arkadaş Sayılar", sayi1,sayi2)
    
}
else{
    console.log("Arkadaş Sayı Değiller",sayi1,sayi2)
}
    
};
arkadasSayilar(220,284);

function mukemmelSayi(sayi=1) {



for (let sayi=1; sayi <=1000; sayi++) {
    let toplam=0;
    for (let i = 1; i < sayi; i++) {
       if (sayi%i==0) {
           toplam=toplam+i;
       }
        
    }

    if (toplam==sayi) {

        console.log(sayi,"Mükemmel Sayıdır")
        
    }
    
}
    
}
mukemmelSayi();

function asalSayi() {
let sayac=0;
    for (let sayi = 2; sayi <1000; sayi++) {
        
            for (let i = 2; i <sayi; i++)
            {
                
                if(sayi%i!=0){
                    sayac++;
                    if(sayac==sayi-2){
                         console.log(sayi);
                         sayac= 0;
                    };
                }
                else{
                    sayac=0;
                };
                
                
               
            }
           
            
        }
        
    }
asalSayi();
    

    
