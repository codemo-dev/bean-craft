let cards = document.querySelectorAll(".card");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
        } else {
            entry.target.classList.remove("fadeIn");
        }
    });
});

cards.forEach((card) => {
    observer.observe(card);
});