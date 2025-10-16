window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Calculate how much of the section is visible
        const visibleTop = Math.max(scrollY, sectionTop);
        const visibleBottom = Math.min(scrollY + viewportHeight, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const progress = visibleHeight / viewportHeight; // 0 to 1
        // Scale from 0.01 to 20 based on visibility
        // const scale = 0.01 + progress * 19.99; // 0.01 + (0 to 1)*19.99 = 0.01 to 20
        const scale = 1 + progress * 9;
        const fontSize = scale + 'rem';
        section.querySelector('span').style.fontSize = fontSize;
    });
});
