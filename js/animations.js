document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".scroll-animation");

    var observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var target = entry.target;
                var delay = target.dataset.delay;

                if (delay) {
                    target.style.transitionDelay = delay;
                }

                target.classList.add("visible");
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.05
    });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("back-to-top");

    function toggleButton() {
        if (window.scrollY > window.innerHeight) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    }

    window.addEventListener("scroll", function () {
        toggleButton();
    });

    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    toggleButton();
});