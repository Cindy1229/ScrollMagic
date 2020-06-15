const flightPath={
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y:-20}, {x: 300, y: 10}, {x: 500, y:100},
        {x: 750, y: -100}, {x: 350, y: -50}, {x:600, y:100},
        {x: 800, y:0}, {x: window.innerWidth, y: -250}
    ]
}


//Path animation
const tl=new TimelineLite();

tl.add(
    TweenLite.to('.plane', 1 ,{
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);


//Scroll animation
const controller=new ScrollMagic.Controller();

const scroll=new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    triggerHook: 0

})
.setTween(tl)
.setPin('.animation')
.addIndicators()
.addTo(controller);