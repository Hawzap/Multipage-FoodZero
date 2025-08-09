gsap.registerPlugin(ScrollTrigger);

gsap.from(".subheader .title h1", {
    y: -100,
    opacity: 0,
    duration: 0.6,
});

const mintScrollTrigger = {
    trigger: ".mintDrink",
    start: "-10% 65%",
};

gsap.from(".mintDrink img", {
    y: -95,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: mintScrollTrigger,
});
gsap.from(".mintDrink .description h2", {
    x: 65,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: mintScrollTrigger,
});
gsap.from(".mintDrink .description p", {
    x: window.innerWidth > 480 ? 65 : -65,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    scrollTrigger: mintScrollTrigger,
});

gsap.from(".bestSalmon img", {
    y: -95,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".bestSalmon",
        start: "-10% 65%",
    },
});
gsap.from(".bestSalmon .description h2", {
    x: 65,
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
        trigger: ".bestSalmon .description",
        start: "-10% 65%",
    },
});
gsap.from(".bestSalmon .description p", {
    x: window.innerWidth > 480 ? 65 : -65,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: {
        trigger: ".bestSalmon .description",
        start: "-10% 65%",
    },
});
gsap.from(".salmonBottomDesc", {
    y: -65,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".salmonBottomDesc",
        start: "-10% 65%",
    },
});
gsap.from(".suggestions .description h2", {
    x: -55,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".suggestions .description",
        start: "-10% 65%",
    },
});
gsap.from(".suggestions .description p", {
    x: 55,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".suggestions .description",
        start: "-10% 70%",
    },
});
gsap.from(".suggestions img", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".suggestions img",
        start: "-10% 70%",
    },
});

gsap.from(".previousPage .switch", {
    x: -60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".previousPage",
        start: "-10% 70%",
    },
});

const pageSwitcherProp = {
    y: 40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".pageSwitcher-content",
        start: "-10% 70%",
    },
};

gsap.from(".previousPage h3", {
    ...pageSwitcherProp,
    ...(window.innerWidth > 768
        ? {}
        : {
              y: 0,
              x: 60,
          }),
});

gsap.from(".nextPage .switch", {
    x: 60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".nextPage",
        start: "-10% 70%",
    },
});

gsap.from(".nextPage h3", {
    ...pageSwitcherProp,
    ...(window.innerWidth > 768
        ? {}
        : {
              y: 0,
              x: -60,
              scrollTrigger: {
                  trigger: ".pageSwitcher-content",
                  start: "0% 65%",
              },
          }),
});
