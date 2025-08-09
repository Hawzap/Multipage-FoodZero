gsap.registerPlugin(ScrollTrigger);

const checkWidth = window.innerWidth > 480;
const meals = document.querySelectorAll(".meal");
const mealMenu = document.querySelectorAll(".item");

const titleTl = gsap.timeline();
titleTl
    .from(".subheader h1", {
        ...(checkWidth ? { x: -100 } : { y: -80 }),
        // x: -100,
        opacity: 0,
        duration: 0.6,
    })
    .from(
        ".subheader p",
        {
            ...(checkWidth ? { x: -80 } : { y: -80 }),
            // x: -80,
            opacity: 0,
            duration: 0.6,
        },
        "-=0.3"
    );

meals.forEach((e) => {
    const mealTitle = e.children[0].children[0];
    const mealDesc = e.children[0].children[1];
    const mealImg = e.children[1].children[0];
    const mealTitleTl = gsap.timeline({
        scrollTrigger: {
            trigger: e,
            start: "-10% 70%",
        },
    });
    mealTitleTl
        .from(mealTitle, {
            y: -120,
            opacity: 0,
            duration: 0.6,
        })
        .from(
            mealDesc,
            {
                y: -80,
                opacity: 0,
                duration: 0.5,
            },
            "-=0.3"
        );
    gsap.from(mealImg, {
        ...(checkWidth ? { x: -140 } : { y: 140 }),
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: mealImg,
            start: checkWidth ? "-10% 65%" : "-20% 80%",
        },
    });
});

mealMenu.forEach((e) => {
    gsap.from(e, {
        x: -100,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: e,
            start: "-5% 65%",
        },
    });
});

// MAKING RESERVATION

const field = document.querySelectorAll(".field");
const fieldBorder = document.querySelectorAll(".fieldBorder");
const fieldsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".reservation",
        start: "-30% 50%",
    },
    onComplete: () => {
        field.forEach((e) => {
            e.style.border = "2px solid black";
        });
        fieldBorder.forEach((e) => {
            e.style.display = "none";
        });
    },
});

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

fieldsTl
    .from(".top", {
        scaleX: 0,
        duration: 0.4,
    })
    .from(".right", {
        scaleY: 0,
        duration: 0.4,
    })
    .from(".bottom", {
        scaleX: 0,
        duration: 0.4,
    })
    .from(".left", {
        scaleY: 0,
        duration: 0.4,
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
