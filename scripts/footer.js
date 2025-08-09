gsap.registerPlugin(ScrollTrigger);

const scrollTriggerProps = {
    trigger: ".footer-firstBlock",
    start: window.innerWidth > 1200 ? "-135% 40%" : "-10% 75%",
};

gsap.from(".siteName h2 p:first-child", {
    x: -75,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: scrollTriggerProps,
});
gsap.from(".siteName h2 p:last-child", {
    x: 75,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: scrollTriggerProps,
});

gsap.from(".footer-contacts .footerBlock-title", {
    x: -65,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    scrollTrigger: scrollTriggerProps,
});

gsap.from(".footer-contacts .number, .footer-contacts .email", {
    y: -40,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    scrollTrigger: scrollTriggerProps,
});
gsap.from(".footer-contacts .adress", {
    y: -40,
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
    scrollTrigger: scrollTriggerProps,
});

gsap.from(".leaveMail .footerBlock-title", {
    x: -65,
    opacity: 0,
    duration: 0.5,
    delay: 0.6,
    scrollTrigger: scrollTriggerProps,
});

gsap.from(".leaveMail form input", {
    x: -65,
    opacity: 0,
    duration: 0.5,
    delay: 0.7,
    scrollTrigger: scrollTriggerProps,
});
gsap.from(".leaveMail .joiningText", {
    x: -65,
    opacity: 0,
    duration: 0.5,
    delay: 0.7,
    scrollTrigger: scrollTriggerProps,
});
gsap.from(".leaveMail form button", {
    x: 65,
    opacity: 0,
    duration: 0.5,
    delay: 0.7,
    scrollTrigger: scrollTriggerProps,
});

gsap.from(".rights", {
    x: -85,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".footer-secondBlock",
        start: "-10% 95%",
    },
});
gsap.from(".socials a", {
    x: 45,
    opacity: 0,
    duration: 0.5,
    stagger: {
        from: "end",
        each: 0.085,
    },
    scrollTrigger: {
        trigger: ".footer-secondBlock",
        start: "-10% 95%",
    },
});
