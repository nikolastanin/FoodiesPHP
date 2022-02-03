// view MORE  functionality
let viewMoreBtn= document.getElementById("view-btn");
let element = document.getElementById("more-txt");
console.log(viewMoreBtn);
const viewLess = ()=>{
    element.style.display = "none";
    viewMoreBtn.innerHTML = "View More";
}
const viewMore =()=>{
    
    element.style.display = "block";
   
    viewMoreBtn.innerHTML = "View Less";
    viewMoreBtn.addEventListener("click",viewLess);
}

viewMoreBtn.addEventListener("click",viewMore);
// Scroll button functionality
let started_btn = document.getElementById("started-btn");
console.log(started_btn);

const scrollToFunc = () =>{
    document.getElementById("popular-food").scrollIntoView();
}
started_btn.addEventListener("click",scrollToFunc);

// sticky nav bar

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0);
})
//navbar
let x = document.getElementById("sandwich");
let navbar = document.getElementById("navbar-list");
let y =  document.getElementById("cart-cont");
const activateMenu = () =>{
      navbar.style.display ="flex";
      x.style.display = "none";
     // y.style.display = "none";
}
x.addEventListener("click", activateMenu);



console.log("test");