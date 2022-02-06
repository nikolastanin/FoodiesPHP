const products = document.querySelectorAll(".product-list__item");
const buttons = document.querySelectorAll(".product-list__button");
const cartBtn = document.querySelector(".btn-cart");
const clearBtn = document.querySelector(".cart-button__clear");
const checkoutBtn = document.querySelector(".cart-button__checkout");
const cartContainer = document.querySelector(".cart-container");
const cartItemsContainer = document.querySelector(".cart-items__container");
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
            // string += `<p>${element}</p>`;
            // cartContainer.innerHTML =string;
            //loads checkout.php(page not visible on nav menu)
            // ali daje gresku i ona PREKINE LOOP popravi tako sto ces ucitati podatke iz cartElements ne odavde..
            // checkoutContainer.innerHTML = string;

            string+= ` <div class="cart-item">
            <p>${element}</p>
             <button class="item-btn__plus">+</button>
             <button class="item-btn__min">-</button>
        </div>`;
        cartItemsContainer.innerHTML = string;

    
        });

        //TOTAL PRICE ??
        //EXIT BUTTON
        //NAME I THUMBNAIL OF ITEM
        //REDNI BROJEVI ? 1. 2. 3.   --?? 
        //CLEAR FUNKCIJA SAMO ENABLAVANO AKO IMA ITEMSA..?
        //POSLE CLEAR-A --->>>> SHOW I UPDATE LOCAL STORAGE FUNKCIJE.. 
        //MENU U RESPONSIVU MODU NE RADI BUTTON
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
console.log(e.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling.textContent);
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
// provera da li je prazan cart !?
const checkEmpty = () =>{

}

const clearCart = () =>{
    if(cartElements.length==0){
        console.log("already empty");
        window.alert("already empty cart!");
    }
    else{

    console.log("cLICK BR");
        console.log("BRISANJE CARTA");
   cartElements = [];
   localStorage.removeItem("products");

   //ovo moze i u show data ???
 let node =   document.querySelectorAll(".cart-item");
    console.log(node);
    node.forEach(element => {
         element.remove();
    });
}
    
}
const checkout = () =>{
    window.location = "./checkout.php";
}
//Event listeners

buttons.forEach(element => {
    element.addEventListener("click", addItem);
    
 });

cartBtn.addEventListener("click",showCart);
clearBtn.addEventListener("click",clearCart);
checkoutBtn.addEventListener("click",checkout)