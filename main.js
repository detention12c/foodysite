var crser = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crser.style.left = dets.x +20+ "px"
    crser.style.top = dets.y + "px"
    blur.style.left = dets.x -150 + "px"
    blur.style.top = dets.y -150 + "px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crser.style.scale = 3
        crser.style.border = "1px solid #fff"
        crser.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crser.style.scale = 1
        crser.style.border = "0px solid"
        crser.style.backgroundColor = "#95C11E"
    })
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -70%",
        scrub: 1
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:60,
    opacity:0,
    duration:1,
    stragger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
});
// gsap.from(".card",{
//     opacity:0,
//     stragger:0.4,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 50%",
//         scrub:2
//     }
// });
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3 
    }
})
gsap.from("#text h2, #text p",{
    y:70,
    scrollTrigger:{
        trigger:"#text",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
gsap.from(".slide img",{
    y:70,
    scollerTrigger:{
        trigger:".slide",
        scoller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})