import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll_tracker");
const scrollTrackingTimeline = new ScrollTimeline({
    socurce: document.scrollingElement,
    operation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
)

// LB:

const animatedImages = document.querySelectorAll(".rotate_in");
animatedImages.forEach((image) => {
    const imageOffsetTop = image.offsetTop;
    const imageHeight = image.offsetHeight;

    console.log(imageOffsetTop)
    const animatedImageTimeline = 
        new ScrollTimeline({
            scrollOffsets: [
                // {target: image, edge: "end", threshold: "0"},
                // {target: image, edge: "start", threshold: "1"},
                CSS.px(imageOffsetTop + imageHeight - window.innerHeight),
                CSS.px(imageOffsetTop - (window.innerHeight/3)),
            ],
        })
    image.animate(
        {
            transform: [
                "perspective(500px) rotateX(45deg)",
                "perspective(500px) rotateX(0)",
            ],
            opacity: ["0.4", "1"],
        },
        {
            duration: 1,
            easing: "linear",
            timeline: animatedImageTimeline,
        }
    )
})