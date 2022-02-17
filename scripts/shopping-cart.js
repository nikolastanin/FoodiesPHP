const products = document.querySelectorAll(".product-list__item");
const buttons = document.querySelectorAll(".product-list__button");
const cartBtn = document.querySelector(".btn-cart");
const clearBtn = document.querySelector(".cart-button__clear");
const checkoutBtn = document.querySelector(".cart-button__checkout");
const modal = document.querySelector(".modal");
const body = document.getElementsByName("body");
const modalCloseBtn = document.querySelector("#modal-close__btn");
const cartItemsContainer = document.querySelector(".cart-items__container");
const cartItemsCount = document.querySelector(".cart-count");
let checkoutContainer = document.querySelector(".checkout-items__container");
console.log(checkoutContainer);
let cartElements = [];
let itemCount;
let quantityBox = "";
let totalPrice = document.querySelector("#price-text");
let price = 0;




//Displaying CartItems
const showData = async () => {
    let string = "";
    itemCount = 0;

    cartElements.forEach(element => {
        //   counting items in cart
        itemCount++;
        // console.log(element.title+` = element broj [${itemCount}]`);
        string += ` <div class="cart-item" id="${element.id}">
            <p>#${itemCount}</p>
            <p id="${element.id}">${element.title}</p>
            <input type="number" id="quantityBox" name="quantity" min="1" max="5" value="${element.quantity}">
            <p>${element.price} EUR.</p>
            <button id="${element.id}" class="btn btn-danger delete-item__btn">delete</button>
           
        </div>`;
        cartItemsContainer.innerHTML = string;
        cartItemsCount.textContent = `${"("+itemCount+")"}`;

    });


    quantityBox = document.querySelectorAll("#quantityBox");
    quantityBox.forEach(element => {
        element.addEventListener("change", updateQuantity);
    });
    let deleteBtns = document.querySelectorAll(".delete-item__btn");
    // console.log(deleteBtns);
    deleteBtns.forEach(element => {
        element.addEventListener("click", deleteItem);
    });

}


const getTotal = async (element) => {
    price =0;
         await showData();
    cartElements.forEach(element => {
    price += parseInt(element.price);
         totalPrice.innerHTML =`Total price : ${price} EUR.`;
    });
    setTotal(price);
}
const setTotal = (priceTotal) =>{
    localStorage.setItem("priceTotal", JSON.stringify(priceTotal));
    let jsonfile = JSON.parse(localStorage.getItem("priceTotal"));
}


const deleteItem = (e) => {

    let div = e.target.parentNode;
    let id = div.id;
    div.remove();

    for (let i = 0; i <= cartElements.length; i++) {
        // console.log(i +" num ");
        if (div.id == cartElements[i].id) {

            cartElements.splice([i], 1);
            // console.log(cartElements);
            updateLocalStorage();
            itemCount--;
            showData();
            getTotal();
        }
    }


}




//updating quantity of a cart item
const updateQuantity = (e) => {
    let value = e.target.value;
    let id = e.target.previousSibling.previousSibling.id;
    // console.log(value,id);

    const update = cartElements.find((element) => {
        return element.id == id;
    });

    update.quantity = value;
    updateLocalStorage();



}

//check if local storage is empty if not show the data
window.onload = (event) => {
    let fetchData = JSON.parse(localStorage.getItem("products"));
    if (fetchData == null || fetchData.length == 0) {
        console.log("nema nista u storagu");
    } else {
        console.log("ima nesto");
        cartElements = fetchData;
        showData();
        getTotal();

    }
};


const updateLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(cartElements));
    let testing = JSON.parse(localStorage.getItem("products"));
    // console.log(testing +"results of JSON");

    //za total price

    localStorage.setItem("totalprice",JSON.stringify())

}


//class of Item
class Item {
    constructor(price, title, quantity, id) {
        this.price = price;
        this.title = title;
        this.quantity = quantity;
        this.id = id;
    }
}



//adding items to array and calling showing data function
const addItem = (e) => {
    // console.log("click");
    let cartItem = new Item();
    let price = e.currentTarget.previousSibling.previousSibling.textContent;
    cartItem.price = price.substring(0, price.length - 4);
    cartItem.title = e.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
    cartItem.quantity = 1;
    cartItem.id = Date.now();
    cartElements.push(cartItem);
    updateLocalStorage();
    showData();
    getTotal();
}




//Showign the cart modal on user click
const showCart = () => {
    // console.log("SHOW CART");
    if (cartElements.length == 0) {
        alert("Your cart is empty. Add some items to the cart...")

    } else {
        if (modal.style.display !== "block") {
            modal.style.display = "block";

        } else {
            modal.style.display = "none";
        }
    }
}
//click outside modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Close cart modal

const closeCart = () => {
    if (modal.style.display !== "block") {
        modal.style.display = "block";

    } else {
        modal.style.display = "none";
    }
}


//clearing cart elements from body and array
const clearCart = () => {
    if (cartElements.length == 0) {
        window.alert("cart is already empty!");
    } else {


        // console.log("deleting cart elements");
        cartElements = [];
        localStorage.removeItem("products");
        // move to show data ? 
        let cartItemsNodes = document.querySelectorAll(".cart-item");
        // console.log(cartItemsNodes);
        cartItemsNodes.forEach(element => {
            element.remove();
        });
    }

}


//change color of button
const changeColor = (e) => {
    let classes = e.target.classList;
    if (classes.contains("btn-transparent")) {
        classes.remove("btn-transparent");
    } else {
        classes.add("btn-transparent");
    }
    // console.log(e.target.classList.remove("btn-transparent"));
    console.log(e.target.className);
}


//Directing to checkout page if the user clicks and the cart is !empty
const checkout = () => {

    if (cartElements.length == 0) {
        window.alert("your cart is empty! choose your items");
    } else

        window.location = "./checkout.php";


}



//Event listeners for backend loaded items
buttons.forEach(element => {
    element.addEventListener("click", addItem);


});

//changing button color on mouse enter/leave

buttons.forEach(element => {
    element.addEventListener("mouseover", changeColor);


});
buttons.forEach(element => {
    element.addEventListener("mouseout", changeColor);


});


//  event listeners for cart elements
cartBtn.addEventListener("click", showCart);
clearBtn.addEventListener("click", clearCart);
checkoutBtn.addEventListener("click", checkout)
modalCloseBtn.addEventListener("click", closeCart);