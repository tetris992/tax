let click = false;
let resize = false;
let scroll = false;

// 로직을 별도의 함수로 분리
window.addEventListener('click', () =>{
    click = true;
    setTimeout(() => click = false, 500);
});
window.addEventListener('resize', () =>{
    resize = true;
    setTimeout(() => resize = false, 500); // "resize" 플래그를 false로 설정
});
window.addEventListener('scroll', () =>{
    scroll = true;
    setTimeout(() => scroll = false, 500); // "scroll" 플래그를 false로 설정
});

const handleAnimation = function () {
    if(click || resize || scroll) {
        document.querySelectorAll('.bar').forEach(skillBar => {
            let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
            skillBar.querySelector('.bar_value').style.width = targetWidth;
        });
    } else {
        setTimeout(handleAnimation, 5000);
    }
}

handleAnimation(); // 함수 한번은 호출 




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