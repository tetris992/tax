let isAnimated = false;

// 로직을 별도의 함수로 분리
const handleAnimation = () => {
    if (isAnimated) return;

    document.querySelectorAll('.bar').forEach(skillBar => {
        let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
        skillBar.querySelector('.bar_value').style.width = targetWidth;
    });

    isAnimated = true;
};

window.addEventListener('resize', handleAnimation);
window.addEventListener('scroll', handleAnimation);




// let isAnimated = false; // 플래그

// document.querySelector('.skills_list').addEventListener('mouseover', () => {
//     if (isAnimated) return;

//     document.querySelectorAll('.bar').forEach(skillBar => {
//         let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
//         skillBar.querySelector('.bar_value').style.width = targetWidth;
//     });

//     isAnimated = true;
// });

// window.addEventListener('resize', () => {
//     isAnimated = false;
// });