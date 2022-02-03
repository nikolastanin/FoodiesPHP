const products = document.querySelectorAll(".product-list__item");
const buttons = document.querySelectorAll(".product-list__button");
const cartBtn = document.querySelector(".btn-cart");
const cartContainer = document.querySelector(".cart-container");
console.log(cartBtn);
console.log(products);
const checkoutContainer = document.querySelector(".checkout-container");
let cartElements = [];
products.forEach(element => {
    console.log(element);
});

let  itemCount;
const showData = () =>{
    let string ="";
    itemCount = 0;
        cartElements.forEach(element => {
            itemCount++;
            console.log(element+`element broj:${itemCount}`);
            string += `<p>${element}</p>`;
            cartContainer.innerHTML =string;
            //loads checkout.php(page not visible on nav menu)
            // ali daje gresku i ona PREKINE LOOP popravi tako sto ces ucitati podatke iz cartElements ne odavde..
            // checkoutContainer.innerHTML = string;
        });

        //TOTAL PRICE ??
        //EXIT BUTTON
        //NAME I THUMBNAIL OF ITEM
        //REDNI BROJEVI ? 1. 2. 3.   --?? 
}
//check if local storage is empty if not show the data
window.onload = (event) => {
    let testing = JSON.parse(localStorage.getItem("products"));
    if(testing == null){
        console.log("nema nista u storagu");
    }
    else{
        console.log("ima nesto");
        cartElements = testing;
        showData();
    }
  };


const updateLocalStorage = () =>{
localStorage.setItem("products", JSON.stringify(cartElements));
let testing = JSON.parse(localStorage.getItem("products"));
console.log(testing +"rezultati JSON");

}


const addItem = (e) =>{
    console.log("click");
let data = e.currentTarget.previousSibling.previousSibling.textContent;
 cartElements.push(data);
        updateLocalStorage();
       showData();
}




const showCart = () =>{

   if( cartContainer.style.display==""){
    cartContainer.style.display = "block";
   } 
   else
   {
    cartContainer.style.display="";
   }
}


//Event listeners

buttons.forEach(element => {
    element.addEventListener("click", addItem);
    
 });

cartBtn.addEventListener("click",showCart);