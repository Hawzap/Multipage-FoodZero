const linksWay = [
    { linkTitle: "home", href: "" },
    { linkTitle: "menu", href: "menu" },
    { linkTitle: "one column", href: "blogsOneColumn" },
    { linkTitle: "two columns", href: "blogsTwoColumns" },
    { linkTitle: "sidebar post", href: "article" },
    { linkTitle: "without sidebar post", href: "articleAnother" },
    { linkTitle: "who we are", href: "aboutUs" },
    { linkTitle: "portfolio", href: "portfolio" },
    { linkTitle: "contact", href: "getInTouch" },
];
const pageLocation = window.location.pathname.split("/")[1].slice(0, -5);
const linkIndex = linksWay.findIndex((e) => e.href == pageLocation);
const burgerMenu = document.querySelector(".burgerMenu");
const routes = document.querySelector(".routes");
const links = document.querySelectorAll(".links li");
const extendedList = document.querySelectorAll(".containSubList");
const routesCloseBtn = document.querySelector(".close");
const body = document.querySelector("body");
links.forEach((e) => {
    const linkItem = e.querySelector("A");
    const linkBlock = e.children[0];
    const link = linkBlock.children[1].textContent.toLowerCase();
    if (linkItem) {
        const hrefIndex = linksWay.findIndex(
            (el) => el.linkTitle == linkItem.textContent.toLowerCase()
        );
        const hrefName = linksWay[hrefIndex].href;
        linkItem.href = `https://hawzap.github.io/Multipage-FoodZero/${hrefName}${
            hrefName ? ".html" : ""
        }`;
    }
    if (!(linkIndex == 0) && !linksWay[linkIndex]) return;
    if (link == linksWay[linkIndex].linkTitle) {
        linkBlock.classList.add("activeLink");
        if (e.parentNode.classList.contains("subLinks")) {
            e.parentNode.parentNode.children[0].classList.add("activeLink");
        }
    }
});
burgerMenu.addEventListener("click", () => {
    const scrolled = window.pageYOffset;
    body.style.overflowY = "hidden";
    routes.style.top = scrolled + "px";
});
routesCloseBtn.addEventListener("click", () => {
    const routesHeight = routes.getBoundingClientRect().height;
    body.style.overflowY = "auto";
    routes.style.top = -routesHeight + "px";
});
function toogleSubList(e) {
    const subList = e.querySelector(".subLinks");
    if (getComputedStyle(subList).height == "0px") {
        subList.style.height = subList.scrollHeight + "px";
        e.style.pointerEvents = "none";
    } else {
        subList.style.height = "0px";
        e.style.pointerEvents = "none";
    }
    setTimeout(() => {
        e.style.pointerEvents = "auto";
    }, 600);
}
extendedList.forEach((e) => {
    e.addEventListener("click", () => {
        const activeEl = [...extendedList].find((el) =>
            el.classList.contains("activeSubList")
        );
        if (activeEl !== e && activeEl) {
            activeEl.classList.remove("activeSubList");
            toogleSubList(activeEl);
        }
        e.classList.toggle("activeSubList");
        toogleSubList(e);
    });
});
