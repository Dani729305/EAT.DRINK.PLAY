var cursor = document.querySelector(".cursor");
var main = document.querySelector("#main");
var cursorBlur = document.querySelector(".cursor-blur");
//links hover coding//
var links = document.querySelectorAll(".links");
links.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })
})
links.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95c11e";
        cursor.style.backgroundColor = "#95c11e";
    })
})
document.addEventListener("mousemove", function(e){
    cursor.style.left = e.x+20+"px";
    cursor.style.top = e.y+"px";
})
document.addEventListener("mousemove", function(e){
    
    cursorBlur.style.left = e.x- 200+"px"
    cursorBlur.style.top = e.y-200+"px"
})
var elem = document.querySelectorAll(".elem");
elem.forEach(function(elem){
    
elem.addEventListener("mouseenter", function(){
    cursor.style.scale =3;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid white";
})
elem.addEventListener("mouseleave", function(){
    cursor.style.scale =1;
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.border = "0px solid #95c11e";
})
})

var tl = gsap.timeline();
tl.from(".navbar-brand",{
     y:-50,
    duration:1,
    opacity:0,
})
tl.from(".links",{
    y:-50,
    duration:0.5,
    opacity:0,
    stagger:0.20
})

gsap.to(".navigation",{
    backgroundColor:"#000000e8",
    duration:0.5,
    height:"7vh",
    scrollTrigger:{
        trigger : ".navigation",
        scroller: "body",
        // markers:true,
        start:"top -10%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger :{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from(".about-us img , .about-us-in",{
      y:400,
     duration:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 20%",
        scrub:1
      }
})
gsap.from(".card",{
      scale:0.5,
      duration:0.5,
      opacity:0,
      scrollTrigger:{
          trigger:".card",
          scroller:"body",
          stagger:0.1,
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:2
      }
})
//apples coding//
gsap.from(".img-1",{
    y:-90,
    x:-90,
    scrollTrigger:{
        trigger:".img-1",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:1
    }
})
gsap.from(".img-2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:".img-1",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:1
    }
})
gsap.from(".page-4 h1",{
    y:100,
     scrollTrigger:{
        trigger:".page-4 h1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:2
    }
})

