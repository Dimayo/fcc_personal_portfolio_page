export default (function navSmoothScrolling() {

    const navLinks = document.querySelectorAll('.navbar__item');

    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                    .scrollIntoView({
                        block: "start",
                        behavior: "smooth"
                    });
            });
        }
    }
})();