document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.bar');
    skillBars.forEach(skillBar => {
        let targetWidthText = skillBar.querySelector('.bar_metadata span:last-child').textContent;
        let targetWidth = parseInt(targetWidthText.replace('%', ''), 10);
        let currentWidth = 0;
        let duration = 7;

        const updateBarWidth = function() {
            skillBar.querySelector('.bar_value').style.width = currentWidth + 'px';
            skillBar.querySelector('.bar_metadata span:last-child').textContent = currentWidth + ' 건';
        };

        const incrementWidth = function () {
            currentWidth++;
            if(currentWidth <= targetWidth) {
                updateBarWidth();
            }else {
                clearInterval(increaseInterval);
            }
        };

        // 계산된 시간 간격으로 바와 숫자를 업데이트 합니다.
        const increaseInterval = setInterval(incrementWidth, (duration * 1000) / targetWidth);
    });
});


// let isAnimated = false;
// const handleAnimation = () => {
//     if (isAnimated) return;

//     document.querySelectorAll('.bar').forEach(skillBar => {
//         let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
//         let targetWidth = targetWidthElement.textContent.trim();
//         let duration = parseFloat(targetWidth)/100*15;
//         let currentWidth = 1;
        
//         skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
//         skillBar.querySelector('.bar_value').style.width = targetWidth;

//         const incrementWidth = () => {
//             currentWidth++;
//             if(currentWidth <= parseFloat(targetWidth)){
//                 targetWidthElement.textContent = Math.ceil((currentWidth)**2.1) + ' 건';
//             }else{
//                 clearInterval(intervalId); // Stop the interval when reaching the target width
//             }
//         };
//         const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); // Distributing the duration time for each percentage point
        
//         isAnimated = true;
//     });
// };


// window.addEventListener('resize', handleAnimation);
// window.addEventListener('scroll', handleAnimation);

// setTimeout(handleAnimation, 4000);

// const handleAnimation = () => {
//     document.querySelectorAll('.bar').forEach(skillBar => {
//         let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
//         let targetWidth = targetWidthElement.textContent.trim();
//         let duration = parseFloat(targetWidth)/100*5;

//         // Reset the width to 0 before starting the animation
//         skillBar.querySelector('.bar_value').style.width = '0';
        
//         // Set the transition and the target width for the animation
//         skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
//         skillBar.querySelector('.bar_value').style.width = targetWidth;

//         const incrementWidth = () => {
//             let currentWidth = parseFloat(targetWidthElement.textContent.trim());
//             currentWidth++;
//             if(currentWidth <= parseFloat(targetWidth)){
//                 targetWidthElement.textContent = currentWidth + '%';
//             }else{
//                 clearInterval(intervalId); // Stop the interval when reaching the target width
//             }
//         };
        
//         const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); // Distributing the duration time for each percentage point
//     });
// };

// window.addEventListener('resize', handleAnimation);
// window.addEventListener('scroll', handleAnimation);

// // Start the animation immediately when the script runs
// handleAnimation();








