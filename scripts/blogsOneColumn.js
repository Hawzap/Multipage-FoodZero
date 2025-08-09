gsap.registerPlugin(ScrollTrigger);

gsap.from(".title h1", {
    y: -120,
    opacity: 0,
    duration: 0.6,
});

gsap.from(".title p", { y: -100, opacity: 0, duration: 0.5, delay: 0.3 });

const dishPosts = gsap.utils.toArray(".dishPost");

dishPosts.forEach((e) => {
    const dishPhotoWrapper = e.querySelector(".dishPhotoWrapper");
    const postInfo = e.querySelector(".postInfo");
    const postTitle = e.querySelector(".postTitle");
    const line = e.querySelector(".line");
    const postText = e.querySelector(".postText");
    const readMore = e.querySelector(".readMore");
    const foodPostsImgTl = gsap.timeline({
        scrollTrigger: {
            trigger: e,
            start: "top center",
        },
    });

    foodPostsImgTl
        .from(dishPhotoWrapper.children[0], {
            scaleY: 0,
            transformOrigin: "top center",
            opacity: 0,
            duration: 0.6,
        })
        .from(
            dishPhotoWrapper.children[1],
            {
                scaleX: 0,
                transformOrigin: "center center",
                opacity: 0,
                duration: 0.4,
            },
            "-=0.3"
        );

    gsap.from(postInfo.children[0], {
        x: -35,
        borderRadius: 20,
        scale: 0.4,
        opacity: 0,
        transformOrigin: "center",
        duration: 0.6,
        scrollTrigger: {
            trigger: postInfo,
            start: "-150% 70%",
        },
    });
    gsap.from(postInfo.children[1], {
        x: 35,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: postInfo,
            start: "-150% 70%",
        },
    });

    gsap.from(postTitle, {
        y: -45,
        opacity: 0,
        duration: 0.55,
        scrollTrigger: {
            trigger: postTitle,
            start: "-30% 60%",
        },
    });
    gsap.from(line, {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.6,
        scrollTrigger: {
            trigger: line,
            start: "-30% 60%",
        },
    });
    gsap.from(postText, {
        x: -55,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: postText,
            start: "-20% 80%",
        },
    });
    gsap.from(readMore, {
        x: -35,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: readMore,
            start: "-35% 80%",
        },
    });
});

const pageNumber = document.querySelectorAll(".postsPages ul li");

pageNumber.forEach((e, i) => {
    if (i !== 0 && i !== pageNumber.length - 1) {
        e.classList.add("pageNumber");
    }
});

gsap.from(".pageNumber", {
    y: -45,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".postsPages",
        start: "0 90%",
    },
});
