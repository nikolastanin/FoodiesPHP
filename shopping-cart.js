const products = document.querySelectorAll(".product-list__item");
const buttons = document.querySelectorAll(".product-list__button");
console.log(products);
const cartElements = [];
products.forEach(element => {
    console.log(element);
});


const showData = () =>{

    console.log("show data");
}
//check if local storage is empty if not show the data
window.onload = (event) => {
    let testing = JSON.parse(localStorage.getItem("products"));
    if(testing == null){
        console.log("nema nista u storagu");
    }
    else{
        console.log("ima nesto");
        showData();
    }
  };


const updateLocalStorage = () =>{
localStorage.setItem("products", JSON.stringify(cartElements));
let testing = JSON.parse(localStorage.getItem("products"));
console.log(testing);

}


const addItem = (e) =>{
    console.log("click");
let data = e.currentTarget.previousSibling.previousSibling.textContent;
 cartElements.push(data);
        updateLocalStorage();
}


buttons.forEach(element => {
   element.addEventListener("click", addItem);
   
});

