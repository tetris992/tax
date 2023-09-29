let click = false;
let resize = false;
let scroll = false;
let timeoutId; // setTimeout의 ID를 저장하기 위한 변수

// 애니메이션 처리 함수
const handleAnimation = function() {
    if (!click && !resize && !scroll) {
        document.querySelectorAll('.bar').forEach(skillBar => {
            let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
            skillBar.querySelector('.bar_value').style.width = targetWidth;
        });
    }
};

// 5초 후에 애니메이션 실행
const setAnimationTimeout = function() {
    timeoutId = setTimeout(handleAnimation, 5000);
};

setAnimationTimeout(); // 처음에 타이머 설정

// 클릭 이벤트에서 타이머 재설정 로직
document.addEventListener('click', (e) => {
    if (e.target === document.documentElement || e.target === document.body) { 
        clearTimeout(timeoutId); // 이미 설정된 타이머 취소
        setAnimationTimeout();   // 새로운 타이머 설정
    }
});

window.addEventListener('resize', () => {
    resize = true;
});

window.addEventListener('scroll', () => {
    scroll = true;
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