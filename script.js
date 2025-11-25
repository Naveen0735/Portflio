gsap.from(".first-line",{
    y:70,
    duration: 1.3,
    // stagger:0.2,
 
})  
gsap.from(".sections",{
    y:-100,
    duration:1,
    delay:1
})
gsap.from(".heading",{
    x:-100,
    opacity:0,
    duration:1,
    delay:1
})

gsap.from(".work",{
    y:300,
    duration:2,
    stagger:0.5,
    scrollTrigger: {
        scrub:2,
        trigger:".work",
        scroller:"body",
        start:"top 150%",
        end:"top 70%"
    }
})
gsap.from(".my-image",{
    opacity:0,
    x:100,
    duration:1,
    delay:0.5
})
gsap.from(".present",{
    y:-50,
    duration:1,
    opacity:0
})
gsap.from(".buttons-div",{
    y:-200,
    duration:1,
    opacity:-1,
})

gsap.from("#skillcard1",{
    y:-100,
    duration:1,
    delay:1,
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#skillcard1",
        scroller:"body",
        start:"top 100%",
        end:"top 75%",
    }
})
gsap.from("#skillcard2",{
    y:-100,
    delay:3,
    duration:3,
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#skillcard2",
        scroller:"body",
        start:"top 100%",
        end:"top 75%",
    }
})
gsap.from("#skillcard3",{
    y:-100,
    delay:6,
    duration:1,
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#skillcard3",
        scroller:"body",
        start:"top 100%",
        end:"top 75%",
    }
})


gsap.from(".html,.css,.js",{
    duration:2,
    width:0,
    scrollTrigger:{
        scrub:2,
        opacity:0,
        trigger:".skill-bar-div",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
    }
})

gsap.from(".edu",{
    x:-100,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        scrub:2,
        trigger:".edu",
        scroller:"body",
        start:"top 100%",
        end:"top 70%",
    }
})
gsap.from(".edu1",{
    x:100,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        scrub:2,
        trigger:".edu1",
        scroller:"body",
        start:"top 100%",
        end:"top 70%",
    }
})
gsap.from(".email,.message",{
    x:100,
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:".inputs",
        scrub:2,
        scroller:"body",
        start:"top 110%",
        end:"top 80%"
    }
})
gsap.from(".i-name,.submit",{
    x:-100,
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:".inputs",
        scrub:2,
        scroller:"body",
        start:"top 110%",
        end:"top 80%"
    }
})
gsap.from(".arrow-div",{
    x:-100,
    duration:0.3,
    scrollTrigger:{
        trigger:".inputs",
        scrub:1,
        scroller:"body",
        start:"top 110%",
        end:"top 80%"
    }

})
gsap.from(".footer-head",{
    font:10,
    delay:2,
    opacity:-2,
    duration:1,
    scrollTrigger:{
        trigger:".footer-head",
        scrub:1,
        scroller:"body",
        start:"top 100%",
        end:"top 70%"
    }
})
gsap.from(".footer-logo1",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".footer-head",
        scrub:1,
        scroller:"body",
        start:"top 90%",
        end:"top 80%"
    }
})
gsap.from(".footer-logo2",{
    // duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".footer-head",
        scrub:1,
        scroller:"body",
        start:"top 90%",
        end:"top 80%",
    }
})
gsap.from(".footer-logo3",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:".footer-head",
        scrub:1,
        scroller:"body",
        start:"top 90%",
        end:"top 80%"
    }
})
function handleResize() {
    if (window.innerWidth <= 1072 && !sessionStorage.getItem('smallScreenConfirmed')) {
        if (confirm('Your screen size is small. This website is not optimized for small screens. Click "OK" to continue anyway.')) {
            window.removeEventListener('resize', handleResize);
            sessionStorage.setItem('smallScreenConfirmed', 'true');
        }
    }
}

function checkWidth() {
    if (window.innerWidth <= 1072 && !sessionStorage.getItem('smallScreenConfirmed')) {
        if (confirm('Kuddos! You have a small screen mate!\nThe website is not yet optimized for small screens.\nHowever, if you still want to view, click "OK".')) {
            window.removeEventListener('resize', handleResize);
            sessionStorage.setItem('smallScreenConfirmed', 'true');
        }
    }
}

window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);