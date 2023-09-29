let click = false;
let resize = false;
let scroll = false;


// 로직을 별도의 함수로 분리
window.addEventListener('click', () =>{
    click = true;
});
window.addEventListener('resize', () =>{
    resize = true;
});
window.addEventListener('scroll', () =>{
    scroll = true;
});

const handleAnimation = function() {
    if(!click && !resize && !scroll) 
        document.querySelectorAll('.bar').forEach(skillBar => {
            let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
            skillBar.querySelector('.bar_value').style.width = targetWidth;
        });
}
    

setTimeout(handleAnimation, 5000);

// let count = 0;
// const maxRepeats = 5;


// const intervalId = setInterval(() => {
//     if (count < maxRepeats) {
//         handleAnimation();
//         count++;
//     } else {
//         clearInterval(intervalId); // 횟수 제한에 도달하면 interval을 중지합니다.
//     }
// }, 10000);



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