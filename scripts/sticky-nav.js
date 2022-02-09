

window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY >70);
})
let toggle = document.getElementsByClassName("toggle")[0];
let navItems = document.querySelectorAll(".nav-item");
const showNav = () =>{

    
      navItems.forEach(element => {
          if(element.style.display !== "block"){

          toggle.innerHTML = ` <img src="images/icons/icon_close.png"/>`;
          element.style.display = "block";
          
        }
        else{
            toggle.innerHTML = ` <img src="images/icons/icon_lines.png"/>`;
            element.style.display ="none";
        }
      });
}

toggle.addEventListener("click",showNav);