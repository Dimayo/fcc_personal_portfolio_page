//Smooth scrolling
(function navSmoothScrolling() {
   
    const navLinks = document.querySelectorAll('.nav-item');

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

//Scroll change
(function scrollChange() {

    const part = document.querySelector('.part');

    window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        scrollPos += window.innerHeight / 1.4;

        if (part.offsetTop <= scrollPos) {
            part.classList.add('show');
        }
    };
})();