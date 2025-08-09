gsap.registerPlugin(ScrollTrigger);

gsap.from(".subheader h1", {
    y: -120,
    opacity: 0,
    duration: 0.6,
});

const socialMediaList = document.querySelectorAll(".menuCategories li");

socialMediaList.forEach((e, i) => {
    const listLength = socialMediaList.length;
    if (i < Math.floor(listLength / 2)) {
        e.classList.add("leftElement");
    } else if (i > Math.floor(listLength / 2)) {
        e.classList.add("rightElement");
    } else {
        e.classList.add("centerElement");
    }
});

gsap.from(".centerElement", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".menuCategories",
        start: "0 90%",
    },
});
gsap.from(".leftElement", {
    x: 45,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: {
        from: "end",
        each: 0.1,
    },
    scrollTrigger: {
        trigger: ".menuCategories",
        start: "0 90%",
    },
});
gsap.from(".rightElement", {
    x: -45,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".menuCategories",
        start: "0 90%",
    },
});

const meals = gsap.utils.toArray(".meal");

meals.forEach((e) => {
    const mealTl = gsap.timeline({
        scrollTrigger: {
            trigger: e,
            start: "40% 65%",
        },
    });
    const darkEffect = e.children[0];
    const mealTitle = e.children[2].children[0];
    const mealCategories = e.querySelectorAll(".mealCategories span");
    gsap.set(mealCategories[0], { x: -25, opacity: 0 });
    gsap.set(mealCategories[1], { opacity: 0 });
    gsap.set(mealCategories[2], { x: 25, opacity: 0 });
    mealTl
        .from(darkEffect, {
            top: "100%",
            duration: 0.6,
        })
        .from(mealTitle, {
            x: -55,
            opacity: 0,
            duration: 0.6,
        })
        .to(
            mealCategories[0],
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
            },
            "-=0.4"
        )
        .to(
            mealCategories[1],
            {
                opacity: 1,
                duration: 0.4,
            },
            "-=0.3"
        )
        .to(
            mealCategories[2],
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
            },
            "-=0.5"
        );
});

const meal = document.querySelectorAll(".meal");

meal.forEach((e) => {
    e.addEventListener("click", () => {
        window.location = "http://127.0.0.1:5500/foodDescription.html";
    });
});
