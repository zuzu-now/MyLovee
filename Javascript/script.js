/* ==========================
   LETTER MODAL
========================== */

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");

if (openLetter && letterModal) {

    openLetter.addEventListener("click", () => {

        letterModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

}

if (closeLetter && letterModal) {

    closeLetter.addEventListener("click", () => {

        letterModal.style.display = "none";

        document.body.style.overflow = "auto";

    });

}

/* Click outside modal to close */

window.addEventListener("click", (e) => {

    if (e.target === letterModal) {

        letterModal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});

/* ==========================
   FLOATING HEARTS
========================== */

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

/* create heart every 700ms */

setInterval(createHeart, 700);

/* ==========================
   SMOOTH PAGE LOAD
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ==========================
   IMAGE HOVER EFFECT
========================== */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/* ==========================
   RANDOM QUOTES (OPTIONAL)
========================== */

const quotes = [
    "Every memory with you is a treasure ❤️",
    "Some people make life more beautiful 🌸",
    "Thank you for every smile ✨",
    "The best memories are shared memories 💖"
];

const quoteText = document.getElementById("randomQuote");

if (quoteText) {

    const random =
        Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[random];

}


/* ==========================
   QUALITY CARD EFFECT
========================== */

const qualityCards =
document.querySelectorAll(".quality-card");

qualityCards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


/* REVEAL ON SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function typeWriter(id, text){

    const element =
    document.getElementById(id);

    if(!element) return;

    let i = 0;

    function typing(){

        if(i < text.length){

            element.textContent +=
            text.charAt(i);

            i++;

            setTimeout(typing,80);

        }

    }

    typing();
}

typeWriter(
    "aboutTitle",
    "About Us ❤️"
);

typeWriter(
    "momentsTitle",
    "Our Moments ❤️"
);

typeWriter(
    "vlogTitle",
    "Our Vlog 🎥"
);


document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOBILE NAVIGATION
    ========================== */

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.setAttribute("role", "button");
        hamburger.setAttribute("tabindex", "0");
        hamburger.setAttribute("aria-label", "Toggle navigation");
        hamburger.setAttribute("aria-expanded", "false");

        function toggleMenu() {
            const isOpen = navLinks.classList.toggle("active");

            hamburger.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            hamburger.textContent = isOpen ? "✕" : "☰";
        }

        hamburger.addEventListener("click", toggleMenu);

        hamburger.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleMenu();
            }
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
                hamburger.textContent = "☰";
            });
        });

        document.addEventListener("click", (event) => {
            if (
                navLinks.classList.contains("active") &&
                !navLinks.contains(event.target) &&
                !hamburger.contains(event.target)
            ) {
                navLinks.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
                hamburger.textContent = "☰";
            }
        });
    }

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => {
            item.classList.add("active");
        });
    }

    /* ==========================
       FLOATING HEARTS
    ========================== */

    const heartsContainer =
        document.querySelector(".hearts-container");

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (heartsContainer && !reduceMotion) {
        const heartSymbols = ["♥", "♡", "💗"];

        function createHeart() {
            const heart = document.createElement("span");

            heart.className = "heart";
            heart.textContent =
                heartSymbols[
                    Math.floor(Math.random() * heartSymbols.length)
                ];

            heart.style.left = Math.random() * 100 + "%";
            heart.style.fontSize =
                (12 + Math.random() * 14) + "px";

            const duration = 7 + Math.random() * 5;
            heart.style.animationDuration = duration + "s";

            heartsContainer.appendChild(heart);

            window.setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }

        // Start gently, then add a heart every 900 ms.
        createHeart();

        window.setInterval(createHeart, 900);
    }

    /* ==========================
       CURRENT PAGE NAVIGATION
    ========================== */

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    document.querySelectorAll(".nav-links a").forEach((link) => {
        const linkPage = new URL(
            link.href,
            window.location.href
        ).pathname.split("/").pop().toLowerCase();

        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });

});
