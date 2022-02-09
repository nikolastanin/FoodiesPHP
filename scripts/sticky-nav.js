

window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY >70);
})
let toggle = document.getElementsByClassName("toggle")[0];
let navItems = document.querySelectorAll(".nav-item");
const showNav = () =>{

    
      navItems.forEach(element => {
     
        console.log(element.className);
         if(element.className==="nav-item") {
            element.classList.add("show");
         }
         else{
                       toggle.innerHTML = ` <img src="images/icons/icon_lines.png"/>`;
            element.className ="nav-item"
         }
         });
    }
      
    




toggle.addEventListener("click",showNav);