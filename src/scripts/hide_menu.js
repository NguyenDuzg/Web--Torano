let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {       
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});