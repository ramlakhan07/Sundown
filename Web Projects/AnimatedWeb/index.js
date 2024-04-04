// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });

// let a = document.querySelector("#elem1")
// let image = a.getAttribute("data-image")
// console.log(image)

function pageAnimation(){
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// });
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
      e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
      })
})
}

// function swiperAnimation(){
//   var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }





pageAnimation()
// swiperAnimation()

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navImg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
  if(flag == 0){
      full.style.top = 0
      navImg.style.opacity=0
      flag=1

  }else{
    full.style.top = "-100%"
      navImg.style.opacity=1    
      flag=0
  }
})


var loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top="-100%"
},4000)


// var wid = window.innerWidth
//   console.log(wid)

//   if(wid<=600){
// function widthResponsive(){
  
//     var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 2,
//       spaceBetween: 30,
//       freeMode: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
  
// }
//   }


