const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu= documet.querySelector('#menu-icon');
let navlist= documet.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.scroll =() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}
