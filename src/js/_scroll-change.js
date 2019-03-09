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