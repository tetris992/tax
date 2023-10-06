// let isAnimated = false;

// const resetAnimation = () => {
//     document.querySelectorAll('.bar').forEach(skillBar => {
//         // Reset bar value style
//         skillBar.querySelector('.bar_value').style.transition = '';
//         skillBar.querySelector('.bar_value').style.width = '0';
        
//         // Reset target width element text
//         let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
//         targetWidthElement.textContent = '0 건';
//     });
//     isAnimated = false; // Reset the animation flag
// };

// const handleAnimation = () => {
//     if (isAnimated) return;

//     document.querySelectorAll('.bar').forEach(skillBar => {
//         let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
//         let targetWidth = targetWidthElement.textContent.trim();
//         let duration = parseFloat(targetWidth) / 100 * 9;
//         let currentWidth = 1;
        
//         skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
//         skillBar.querySelector('.bar_value').style.width = targetWidth;

//         const incrementWidth = () => {
//             currentWidth++;
//             if(currentWidth <= parseFloat(targetWidth)){
//                 targetWidthElement.textContent = Math.ceil((currentWidth) ** 2) + ' 건';
//             }else{
//                 clearInterval(intervalId); // Stop the interval when reaching the target width
//             }
//         };
//         const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); // Distributing the duration time for each percentage point
        
//         isAnimated = true;
//     });
// };

// // Event listeners for resize, scroll, and timeout
// window.addEventListener('resize', handleAnimation);
// setTimeout(handleAnimation, 9000);
// window.addEventListener('click', () => {resetAnimation(); handleAnimation();});




// 좀 더 확장된 로직이 필요함. 

let isAnimated = false;

const handleAnimation = () => {
    if (isAnimated) return;

    document.querySelectorAll('.bar').forEach(skillBar => {
        let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
        let targetWidth = targetWidthElement.textContent.trim();
        let duration = parseFloat(targetWidth) / 100 * 9;
        let currentWidth = 1;
        
        skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
        skillBar.querySelector('.bar_value').style.width = targetWidth;

        const incrementWidth = () => {
            currentWidth++;
            if(currentWidth <= parseFloat(targetWidth)){
                targetWidthElement.textContent = Math.ceil((currentWidth) ** 2) + ' 건';
            }else{
                clearInterval(intervalId); 
            }
        };
        const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); 
        
        isAnimated = true;
    });
};

// Event listeners for resize, scroll, and timeout
window.addEventListener('resize', handleAnimation);
window.addEventListener('click', handleAnimation);
setTimeout(handleAnimation, 12000);



