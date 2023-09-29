let isAnimated = false; // 플래그

document.querySelector('.skills_list').addEventListener('mouseover', () => {
    if (isAnimated) return;

    document.querySelectorAll('.bar').forEach(skillBar => {
        let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
        skillBar.querySelector('.bar_value').style.width = targetWidth;
    });

    isAnimated = true;
});

window.addEventListener('resize', () => {
    isAnimated = false;
});