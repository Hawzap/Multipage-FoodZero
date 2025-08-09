const splitText = (element) => {
    const elementText = element.textContent.replace(/\s+/g, " ").trim();
    element.innerHTML = "";
    const splitedText = elementText.split(" ");
    const divArr = [];
    splitedText.forEach((e) => {
        const div = document.createElement("div");
        div.style.display = "inline-block";
        e.split("").forEach((el) => {
            const span = document.createElement("span");
            span.style.display = "inline-block";
            span.textContent = el;
            div.append(span);
        });
        divArr.push(div);
    });
    divArr.forEach((el, i) => {
        if (i !== divArr.length - 1) {
            element.append(el);
            element.innerHTML += "&nbsp;";
        } else {
            element.append(el);
        }
    });
};

gsap.registerPlugin(ScrollTrigger);

gsap.from(".title h1", {
    y: -120,
    opacity: 0,
    duration: 0.6,
});

gsap.from("header .postInfo img", {
    x: -40,
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
});
gsap.from("header .postInfo p", {
    x: 40,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
});

// MAIN CONTENT ANIMATION

const articleText = gsap.utils.toArray(".articleText");

articleText.forEach((e) => {
    gsap.from(e, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "-10% 75%",
        },
    });
});

gsap.from(".dishPhotos img:first-child", {
    x: -85,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".dishPhotos",
        start: "-10% 45%",
    },
});
gsap.from(".dishPhotos img:last-child", {
    x: 85,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".dishPhotos",
        start: "-10% 45%",
    },
});

const authorWords = document.querySelector(".authorWords blockquote");
splitText(authorWords);

gsap.from(".authorWords blockquote span", {
    y: -25,
    opacity: 0,
    duration: 0.24,
    stagger: 0.015,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".authorWords",
        start: "-45% 70%",
    },
});

const articleTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".articleInfo .tags",
        start: "-30% 80%",
    },
});

articleTl
    .from(".articleInfo .tags ul li:nth-child(odd)", {
        y: -45,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
    })
    .from(
        ".articleInfo .tags ul li:nth-child(even)",
        {
            y: 45,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
        },
        "-=0.6"
    );

gsap.from(".articleInfo .userInfo img", {
    scale: 0,
    opacity: 0,
    transformOrigin: "center",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".articleInfo .userInfo",
        start: "-20% 75%",
    },
});

gsap.from(".articleInfo .userInfo .mainInfo .userName", {
    x: 120,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(2.5)",
    scrollTrigger: {
        trigger: ".articleInfo .userInfo",
        start: "-20% 75%",
    },
});

gsap.from(".articleInfo .userInfo .mainInfo .description", {
    x: 70,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    ease: "back.out(2.5)",
    scrollTrigger: {
        trigger: ".articleInfo .userInfo",
        start: "-20% 75%",
    },
});

gsap.from(".relatedPosts-title", {
    y: -75,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".relatedPosts-title",
        start: "-15% 85%",
    },
});

const foodPostsImgTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".dishPost",
        start: "top center",
    },
});

foodPostsImgTl
    .from(".dishPhoto", {
        scaleY: 0,
        transformOrigin: "top center",
        opacity: 0,
        duration: 0.6,
    })
    .from(
        ".dishPhotoWrapper p",
        {
            scaleX: 0,
            transformOrigin: "center center",
            opacity: 0,
            duration: 0.4,
        },
        "-=0.3"
    );

gsap.from(".dishPhotoWrapper .userPhoto", {
    x: -35,
    borderRadius: 20,
    scale: 0.4,
    opacity: 0,
    transformOrigin: "center",
    duration: 0.6,
    scrollTrigger: {
        trigger: ".postInfo",
        start: "-150% 70%",
    },
});
gsap.from(".dishPost .additionalInfo", {
    x: 35,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".postInfo",
        start: "-150% 70%",
    },
});

gsap.from(".dishPost .mainPostInfo h3", {
    y: -45,
    opacity: 0,
    duration: 0.55,
    scrollTrigger: {
        trigger: ".dishPost .mainPostInfo h3",
        start: "-30% 60%",
    },
});
gsap.from(".mainPostInfo .line", {
    scaleX: 0,
    transformOrigin: "center",
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainPostInfo h3",
        start: "-30% 60%",
    },
});
gsap.from(".dishPost .mainPostInfo .postText", {
    x: -55,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainPostInfo .postText",
        start: "-20% 80%",
    },
});
gsap.from(".mainPostInfo .readMore", {
    x: -35,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainPostInfo .readMore",
        start: "-35% 80%",
    },
});
