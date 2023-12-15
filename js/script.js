document.addEventListener("DOMContentLoaded", function () {
    // Highlight the active navigation link based on the current URL
    highlightActiveNavLink();

    function highlightActiveNavLink() {
        var currentPage = window.location.pathname.split("/").pop();
        var navLinks = document.querySelectorAll("nav a");

        navLinks.forEach(function (link) {
            var linkHref = link.getAttribute("href").split("/").pop();

            if (linkHref === currentPage) {
                link.classList.add("active");
            }
        });
    }
});

