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
    ...(window.innerWidth > 480 ? { x: -120 } : { y: -120 }),
    opacity: 0,
    duration: 0.5,
});

gsap.from(".postInfo img", {
    x: -40,
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
});
gsap.from(".postInfo p", {
    x: 40,
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
});

// ASIDE ANIMATION

const aside = document.querySelector("aside");
const asideBurger = document.querySelector(".asideBurger");
asideBurger.addEventListener("click", () => {
    aside.classList.toggle("activeAside");
    asideBurger.classList.toggle("active");
});

const subtopic = gsap.utils.toArray(".subtopic");

subtopic.forEach((e) => {
    gsap.from(e.children[0], {
        y: -35,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "-20% 90%",
        },
    });
});

const categories = gsap.utils.toArray(".categories ul li");

categories.forEach((e) => {
    gsap.from(e.children[0], {
        x: -35,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "-5% 85%",
        },
    });
    gsap.from(e.children[1], {
        x: 35,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "0 85%",
        },
    });
});

const comment = gsap.utils.toArray(".comment");

comment.forEach((e) => {
    gsap.from(e, {
        x: -35,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: e,
            start: "0 90%",
        },
    });
});

const archives = gsap.utils.toArray(".archives ul li");

archives.forEach((e) => {
    gsap.from(e.children[0], {
        x: -35,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "-5% 85%",
        },
    });
    gsap.from(e.children[1], {
        x: 35,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "0 85%",
        },
    });
});

const article = gsap.utils.toArray(".article");

article.forEach((e) => {
    const articleMainInfo = e.children[1];
    gsap.from(e.children[0], {
        x: -35,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: e,
            start: "0 90%",
        },
    });
    gsap.from(articleMainInfo.children[0], {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: e,
            start: "0 90%",
        },
    });
    gsap.from(articleMainInfo.children[1], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: e,
            start: "0 90%",
        },
    });
});

gsap.from(".subtopic.tags ul li", {
    x: -25,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".tags ul",
        start: "0 90%",
    },
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

gsap.from(".dishIdeas .bigElem", {
    x: -95,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".dishIdeas",
        start: "-10% 45%",
    },
});
gsap.from(".dishIdeas img:nth-child(2)", {
    y: -75,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".dishIdeas",
        start: "-10% 45%",
    },
});
gsap.from(".dishIdeas img:last-child", {
    y: 75,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".dishIdeas",
        start: "-10% 45%",
    },
});

const authorWords = document.querySelector(".authorWords");
splitText(authorWords);

gsap.from(".authorWords span", {
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

const switchArticleTlProp = {
    scrollTrigger: {
        trigger: ".switchArticle",
        start: "-15% 80%",
    },
};

const previousArticleTl = gsap.timeline(switchArticleTlProp);
const nextArticleTl = gsap.timeline(switchArticleTlProp);

previousArticleTl
    .from(".previousArticle", {
        xPercent: -100,
        duration: 0.4,
    })
    .from(".previousArticle .switcherInfo .switcher", {
        y: -55,
        opacity: 0,
        duration: 0.5,
    })
    .from(
        ".previousArticle .switcherInfo .articleTitle",
        {
            y: -45,
            opacity: 0,
            duration: 0.4,
        },
        "-=0.2"
    );

nextArticleTl
    .from(".nextArticle", {
        xPercent: 100,
        duration: 0.4,
    })
    .from(".nextArticle .switcherInfo .switcher", {
        y: -55,
        opacity: 0,
        duration: 0.5,
    })
    .from(
        ".nextArticle .switcherInfo .articleTitle",
        {
            y: -45,
            opacity: 0,
            duration: 0.4,
        },
        "-=0.2"
    );

gsap.from(".commentsWrapper h2", {
    y: -60,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".commentsWrapper",
        start: "-15% 60%",
    },
});

const comments = gsap.utils.toArray(".mainComment");

comments.forEach((e) => {
    const userPhoto = e.querySelector(".userInfo img");
    const userName = e.querySelector(".userName");
    const commentDate = e.querySelector(".postDate");
    const reply = e.querySelector(".userNameWr a");
    const commentText = e.querySelector(".commentText");

    gsap.from(userPhoto, {
        x: -80,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: e,
            start: "-15% 70%",
        },
    });
    gsap.from(userName, {
        x: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: e,
            start: "-15% 70%",
        },
    });
    gsap.from(commentDate, {
        x: 40,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        scrollTrigger: {
            trigger: e,
            start: "-15% 70%",
        },
    });
    gsap.from(reply, {
        x: 60,
        opacity: 0,
        duration: 0.3,
        delay: 0.4,
        scrollTrigger: {
            trigger: e,
            start: "-15% 70%",
        },
    });
    gsap.from(commentText, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: e,
            start: "-15% 70%",
        },
    });
});

gsap.from(".leaveReply h2", {
    y: -60,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".leaveReply",
        start: "-15% 60%",
    },
});

const leaveReplyForms = gsap.utils.toArray(".leaveReplyForm");

leaveReplyForms.forEach((e) => {
    gsap.from(e.children[0], {
        x: -75,
        opacity: 0,
        duration: 0.5,
        ease: "sine.in",
        scrollTrigger: {
            trigger: e,
            start: "-15% 85%",
        },
    });
});
