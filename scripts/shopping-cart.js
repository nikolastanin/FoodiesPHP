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
let  itemCount;

//    TO DO 
  //POP UP ICON WHEN ADD ITEMM !? 
        //TOTAL PRICE ??
        //EXIT BUTTON
        //NAME I THUMBNAIL OF ITEM
        //REDNI BROJEVI ? 1. 2. 3.   --?? 
        //CLEAR FUNKCIJA SAMO ENABLAVANO AKO IMA ITEMSA..?
        //POSLE CLEAR-A --->>>> SHOW I UPDATE LOCAL STORAGE FUNKCIJE.. 
        //MENU U RESPONSIVU MODU NE RADI BUTTON



//Displaying CartItems
const showData = () =>{
    let string ="";
    itemCount = 0;
        cartElements.forEach(element => {
        //   counting items in cart
            itemCount++;
            console.log(element.title+` = element broj [${itemCount}]`);
            string+= ` <div class="cart-item">
            <p>${element.title}</p>
             <button class="item-btn__plus">+</button>
             <button class="item-btn__min">-</button>
        </div>`;
        cartItemsContainer.innerHTML = string;

        });




      
    }
//updating quantity of a cart item
    const updateQuantity = (n,id) =>{

        const update = cartElements.find((element) => {
            return element.id == id;
          });
          
        //   console.log(update);
          update.quantity = n;
        //   console.log(update);
        updateLocalStorage();


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
// console.log(testing +"rezultati JSON");

}



//class of Item
class Item{
    constructor(price,title,quantity,id){
        this.price = price;
        this.title = title;
        this.quantity = quantity;
        this.id = id;
    }
}



//adding items to array and calling showing data function
const addItem = (e) =>{
    console.log("click");
 let cartItem = new Item();
 let price = e.currentTarget.previousSibling.previousSibling.textContent;
cartItem.price = price.substring(0,price.length-4);
cartItem.title = e.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
cartItem.quantity = 0;
cartItem.id = Date.now();
cartElements.push(cartItem);

       updateLocalStorage();
       showData();
}




//Showign the cart on user click
const showCart = () =>{

   if( cartContainer.style.display==""){
    cartContainer.style.display = "block";
   } 
   else
   {
    cartContainer.style.display="";
   }
}


// Checking if the cart is empty
const checkEmpty = () =>{
    if(cartElements.length==0){
        return true;
    }
    return false;
}


//clearing cart elements from body and array
const clearCart = () =>{
    if(checkEmpty() ==true){
      window.alert("cart is already empty!");
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


//Directing to checkout page if the user clicks and the cart is !empty
const checkout = () =>{
    if(checkEmpty() ==true){
        window.alert("your cart is empty! choose your items");
      }
      else
    window.location = "./checkout.php";
}



//Event listeners for backend loaded items
buttons.forEach(element => {
    element.addEventListener("click", addItem);
    

 });
//  event listeners for cart elements
cartBtn.addEventListener("click",showCart);
clearBtn.addEventListener("click",clearCart);
checkoutBtn.addEventListener("click",checkout)