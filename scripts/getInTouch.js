gsap.registerPlugin(ScrollTrigger);
const titleTl = gsap.timeline();
titleTl
    .from(".title h1", {
        x: -100,
        opacity: 0,
        duration: 0.6,
    })
    .from(
        ".title p",
        {
            x: -80,
            opacity: 0,
            duration: 0.6,
        },
        "-=0.3"
    );
const openTimeTl = gsap.timeline({
    ...(window.innerWidth > 768
        ? { delay: 0.4 }
        : {
              scrollTrigger: {
                  trigger: ".workTime",
                  start: "0% 95%",
              },
          }),
});

openTimeTl
    .from(".openTime h3", {
        x: -50,
        opacity: 0,
        duration: 0.4,
    })
    .from(".openTime p", {
        x: 50,
        opacity: 0,
        duration: 0.4,
    })
    .from(
        ".schedule li",
        {
            y: -40,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
        },
        "-=0.3"
    );

gsap.from(".remoteContacts img", {
    x: -120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".remoteContacts",
        start: "-10% 60%",
    },
});
gsap.to(".specialText:first-of-type .marker", {
    left: "-100%",
    duration: 0.7,
    scrollTrigger: {
        trigger: ".remoteContacts",
        start: "-5% 40%",
    },
});
gsap.to(".specialText:last-of-type .marker", {
    left: "100%",
    duration: 0.7,
    scrollTrigger: {
        trigger: ".remoteContacts",
        start: "-5% 40%",
    },
});

gsap.from(".ourLocation img", {
    y: -120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".ourLocation",
        start: "-10% 55%",
    },
});

gsap.from(".ourLocation div", {
    x: -120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".ourLocation",
        start: "30% 55%",
    },
});

// MAKING RESERVATION

const doubleFields = document.querySelectorAll(".doubleFields");

const fullPageInput = document.querySelectorAll(".fullPageInput");

gsap.from(".reservationTitle h2", {
    y: -60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".reservationTitle",
        start: "-30% 50%",
    },
});
gsap.from(".reservationTitle p", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".reservationTitle",
        start: "-30% 50%",
    },
});

doubleFields.forEach((e) => {
    const scrollTriggerProps = {
        trigger: e,
        start: "-10% 85%",
    };
    gsap.from(e.children[0], {
        x: -120,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: scrollTriggerProps,
    });
    gsap.from(e.children[1], {
        x: 120,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: scrollTriggerProps,
    });
});

fullPageInput.forEach((e, i) => {
    const scrollTriggerProps = {
        trigger: e,
        start: "-10% 85%",
    };
    if ((i + 1) % 2) {
        gsap.from(e, {
            x: 120,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: scrollTriggerProps,
        });
    } else {
        gsap.from(e, {
            x: -120,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: scrollTriggerProps,
        });
    }
});

gsap.from(".booking", {
    y: -55,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".booking",
        start: "30% 70%",
    },
});
