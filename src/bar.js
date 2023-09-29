let click = false;
let resize = false;
let scroll = false;
let animated = false;  // 애니메이션이 실행되었는지 확인하는 flag

// 이벤트 리스너 설정
window.addEventListener('click', () => {
    click = true;
});
window.addEventListener('resize', () => {
    resize = true;
});
window.addEventListener('scroll', () => {
    scroll = true;
});

// 애니메이션 처리 함수
const handleAnimation = function() {
    if (!animated && !click && !resize && !scroll) {
        document.querySelectorAll('.bar').forEach(skillBar => {
            let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
            skillBar.querySelector('.bar_value').style.width = targetWidth;
        });
        animated = true;
    }
};

// 5초 후에 애니메이션 실행
setTimeout(handleAnimation, 5000);

// 마우스 오버 이벤트에서 애니메이션 재실행 로직
document.querySelector('.skills_list').addEventListener('mouseover', () => {
    animated = false;  // 애니메이션 실행 flag 재설정
    handleAnimation();  // 애니메이션 다시 실행
});


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