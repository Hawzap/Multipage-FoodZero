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

const checkWidth = window.innerWidth > 768;

gsap.registerPlugin(ScrollTrigger);

const titleTl = gsap.timeline();

titleTl
    .from(".title h1", {
        ...(checkWidth ? { x: 120 } : { y: -120 }),
        opacity: 0,
        duration: 0.6,
    })
    .from(
        ".title p",
        {
            x: checkWidth ? 100 : -100,
            opacity: 0,
            duration: 0.6,
        },
        "-=0.45"
    );

if (checkWidth) {
    gsap.from(".ourStory-content img", {
        x: 105,
        y: -145,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".ourStory-content",
            start: "0 45%",
        },
    });
    gsap.from(".ourStory-content div", {
        x: -105,
        y: -145,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".ourStory-content",
            start: "0 45%",
        },
    });
} else {
    gsap.from(".ourStory-content img", {
        y: 145,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".ourStory-content",
            start: "0 45%",
        },
    });
    gsap.from(".ourStory-content div h2", {
        x: -105,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".ourStory-content",
            start: "0 45%",
        },
    });
    gsap.from(".ourStory-content div p", {
        x: 105,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".ourStory-content",
            start: "0 45%",
        },
    });
}

const employees = document.querySelectorAll(".employee");

employees.forEach((e) => {
    const mainInfo = e.children[0];
    const employeeOccupation = mainInfo.children[0];
    const employeeName = mainInfo.children[1];
    const employeePhotoBlock = mainInfo.children[2];
    const employeeImg = employeePhotoBlock.children[0];
    splitText(employeeOccupation);
    splitText(employeeName);
    const employeeOccupationSpan = employeeOccupation.querySelectorAll("span");
    const employeeNameSpan = employeeName.querySelectorAll("span");
    gsap.from(employeeOccupationSpan, {
        x: -40,
        stagger: 0.055,
        opacity: 0,
        duration: 0.15,
        scrollTrigger: {
            trigger: employeeOccupation,
            start: "-10% 55%",
        },
    });
    gsap.from(employeeNameSpan, {
        y: -25,
        opacity: 0,
        duration: 0.1,
        stagger: 0.055,
        scrollTrigger: {
            trigger: employeeName,
            start: "-5% 55%",
        },
    });
    gsap.from(employeeImg, {});
});

const blockFirstChild = ".staff-content .employee-wrapper:first-child ";
const blockLastChild = ".staff-content .employee-wrapper:last-child ";

gsap.from(blockFirstChild + "img", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: blockFirstChild + ".employeePhoto",
        start: "-10% 50%",
    },
});
gsap.from(blockFirstChild + ".aboutPersone", {
    x: "+=100",
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: blockFirstChild + ".aboutPersone",
        start: "-10% 50%",
    },
});

gsap.from(blockLastChild + "img", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: blockLastChild + "img",
        start: "-10% 50%",
    },
});

gsap.from(blockLastChild + ".aboutPersone", {
    x: "-=100",
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: blockLastChild + ".aboutPersone",
        start: "-10% 85%",
    },
});

const coockingVideo = gsap.timeline({
    scrollTrigger: {
        trigger: ".cookingVideoTitle",
        start: "-10% 60%",
    },
});

coockingVideo
    .from(".cookingVideoTitle h2", {
        y: -100,
        opacity: 0,
        duration: 0.4,
    })
    .from(
        ".cookingVideoTitle p",
        {
            y: -80,
            opacity: 0,
            duration: 0.4,
        },
        "-=0.3"
    );

gsap.from(".startBtn img", {
    scale: 0,
    transformOrigin: "center",
    duration: 0.3,
    scrollTrigger: {
        trigger: ".startBtn",
        start: "-25% 75%",
    },
});

gsap.from(".process-block__title", {
    y: -100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".process-block__title",
        start: "-15% 60%",
    },
});

gsap.from(".process-stepMain img", {
    x: -120,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".process-stepMain",
        start: "5% 50%",
    },
});
gsap.from(".process-stepMain .stepsTitle", {
    x: 120,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".process-stepMain",
        start: "5% 50%",
    },
});

const processStepFirstChild =
    ".process-stepAnothers .process-step:first-child ";
const processStepLastChild = ".process-stepAnothers .process-step:last-child ";

gsap.from(processStepFirstChild + "img", {
    y: -100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: processStepFirstChild,
        start: "-10% 55%",
    },
});
gsap.from(processStepFirstChild + ".stepsTitle", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: processStepFirstChild,
        start: "40% 50%",
    },
});
gsap.from(processStepLastChild + "img", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: processStepLastChild,
        start: "20% 50%",
    },
});
gsap.from(processStepLastChild + ".stepsTitle", {
    y: -100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: processStepLastChild,
        start: "-10% 55%",
    },
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
