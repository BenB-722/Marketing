document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - window.innerHeight / 1;

            if (scrollPosition > sectionTop) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger when the page loads
});
