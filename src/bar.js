// const handleAnimation = () => {
//     if (isAnimated) return;

//     document.querySelectorAll('.bar').forEach(skillBar => {
//         let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
//         let targetWidth = targetWidthElement.textContent.trim();
//         let duration = parseFloat(targetWidth)/100*2;
//         let currentWidth = 0;
        
//         skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
//         skillBar.querySelector('.bar_value').style.width = targetWidth;

//         const incrementWidth = () => {
//             currentWidth++;
//             if(currentWidth <= parseFloat(targetWidth)){
//                 targetWidthElement.textContent = currentWidth + '%';
//             }else{
//                 clearInterval(intervalId); // Stop the interval when reaching the target width
//             }
//         };
//         const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); // Distributing the duration time for each percentage point
        
//         // isAnimated = true;
//     });
// };




let isAnimated = false;

// 로직을 별도의 함수로 분리
const handleAnimation = () => {
    if (isAnimated) return;

    document.querySelectorAll('.bar').forEach(skillBar => {
        let targetWidth = skillBar.querySelector('.bar_metadata span:last-child').textContent.trim();
        let duration = parseFloat(targetWidth)/100*2;
        skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
        skillBar.querySelector('.bar_value').style.width = targetWidth;
    });

    // isAnimated = true;
};

window.addEventListener('resize', handleAnimation);
window.addEventListener('scroll', handleAnimation);

setTimeout(handleAnimation, 4000);

// document.getElementById('skills').addEventListener('click', handleAnimation);
