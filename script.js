

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================== */

    const preloader = document.querySelector(".preloader");
    const percent = document.querySelector(".preloader-percent");
    const line = document.querySelector(".preloader-line");

    let progress = 0;

    const loading = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 3;

        if (progress >= 100) {
            progress = 100;
            clearInterval(loading);

            if (percent) {
                percent.textContent = "100%";
            }

            if (line) {
                line.style.setProperty("--progress", "100%");
            }

            setTimeout(() => {
                preloader.classList.add("loaded");
            }, 300);
        } else {

            if (percent) {
                percent.textContent = `${progress}%`;
            }

            if (line) {
                line.style.setProperty("--progress", `${progress}%`);
            }
        }

    }, 70);


    /* =========================
       MOBILE MENU
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            document.body.classList.toggle("menu-open");

        });

    }


    /* =========================
       CLOSE MENU WHEN LINK CLICKED
    ========================== */

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            document.body.classList.remove("menu-open");

        });

    });


    /* =========================
       HERO VIDEO
    ========================== */

    const videoA = document.querySelector(".video-a");
    const videoB = document.querySelector(".video-b");

    if (videoA && videoB) {

        const videos = [videoA, videoB];

        let activeVideo = 0;

        videos[0].play().catch(() => {});

        videos[0].style.opacity = "1";
        videos[1].style.opacity = "0";

        videos.forEach((video, index) => {

            video.addEventListener("ended", () => {

                const current = videos[activeVideo];

                activeVideo = activeVideo === 0 ? 1 : 0;

                const next = videos[activeVideo];

                next.currentTime = 0;

                next.play().catch(() => {});

                next.style.opacity = "1";
                current.style.opacity = "0";

            });

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".reveal-text, .project, .service-item, .portrait-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {

        observer.observe(element);

    });

});