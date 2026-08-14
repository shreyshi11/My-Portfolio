// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});



// Close mobile menu after clicking a link

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});



// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

// ================================
// SCROLL REVEAL ANIMATION
// ================================
// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.05
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});