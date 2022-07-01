let typed = new Typed(".auto-input", {
    strings: ["desenvolvedor front-end", "engenheiro civil"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

function reveal() {
    let revelations = document.querySelectorAll(".reveal");
    
    revelations.forEach((revelation) => {
        let windowHeight = window.innerHeight;
        let elementTop = revelation.getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revelation.classList.add('active');
        } else {
            revelation.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', reveal);

reveal();