document.querySelector(".nav-icon__burger").onclick = function(){
    document.querySelector(".nav-icon__burger").classList.toggle("active");    
    document.querySelector(".header__nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
};
document.querySelector(".nav-icon__user").onclick = function(){
    document.querySelector(".nav-icon__user").classList.toggle("active");    
    document.querySelector(".nav-user").classList.toggle("active");
};