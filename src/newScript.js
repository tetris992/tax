// newScript.js
document.addEventListener('DOMContentLoaded', function() {
    const sectionIds = [
        '#home',
        '#about',
        '#skills',
        '#work',
        '#Testimonial',
        '#contact',
    ];
    const titleVideo = document.getElementById("title_video");
    const header = document.querySelector('.header');
    const visibleSections = sectionIds.map(() => false);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            visibleSections[index] = entry.isIntersecting && entry.intersectionRatio >= 0.95;
        });

        const isLastSectionsVisible = 
            visibleSections[sectionIds.length - 2] || 
            visibleSections[sectionIds.length - 1];

        if (isLastSectionsVisible) {
            header.style.backgroundColor = 'transparent'; 
            if (titleVideo.paused) {
                titleVideo.play();
            }
        } else {
            header.style.backgroundColor = ''; 
            if (!titleVideo.paused) {
                titleVideo.pause();
            }
        }
    }, {
        rootMargin: '-10% 0px 0px 0px',
        threshold: [0, 0.98],
    });

    sectionIds.map((id) => document.querySelector(id)).forEach((section) => observer.observe(section));

    // 동영상 클릭 시 일시 정지 기능을 추가
    titleVideo.addEventListener('click', () => {
        if (!titleVideo.paused) {
            titleVideo.pause();
        }
    });
});
