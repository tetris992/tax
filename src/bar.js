
document.querySelectorAll('.bar').forEach(skillBar => {
    let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
    let targetWidth = targetWidthElement.textContent.trim();
    let duration = 5; // 바가 목표치에 도달하는데 걸리는 시간을 5초로 설정
    
    skillBar.querySelector('.bar_value').style.transition = `width ${duration}s ease-in-out`;
    skillBar.querySelector('.bar_value').style.width = targetWidth;

    // '%'에서 '건'으로 변환: 예를 들어, '55%'를 '550 건'으로 변환
    let targetCount = parseInt(targetWidth) * 10; // 예를 들어, 소수점이 없는 정수로 변환 후 10을 곱함
    let currentCount = 0;
    
    const incrementCount = () => {
        currentCount++;
        if(currentCount <= targetCount){
            targetWidthElement.textContent = `${currentCount} 건`; // '건' 단위로 표시
        }else{
            clearInterval(intervalId); // 목표치에 도달했을 때 인터벌을 정지
        }
    };
    
    const intervalId = setInterval(incrementCount, (duration * 2000) / targetCount); // 동안 각 건수를 등록
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








