const handleAnimation = () => {
    document.querySelectorAll('.bar').forEach(skillBar => {
        let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
        let targetWidth = targetWidthElement.textContent.trim();
        let duration = parseFloat(targetWidth)/100*5;

        // Reset the width to 0 before starting the animation
        skillBar.querySelector('.bar_value').style.width = '0';
        
        // Set the transition and the target width for the animation
        skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
        skillBar.querySelector('.bar_value').style.width = targetWidth;

        const incrementWidth = () => {
            let currentWidth = parseFloat(targetWidthElement.textContent.trim());
            currentWidth++;
            if(currentWidth <= parseFloat(targetWidth)){
                targetWidthElement.textContent = currentWidth + '%';
            }else{
                clearInterval(intervalId); // Stop the interval when reaching the target width
            }
        };
        
        const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); // Distributing the duration time for each percentage point
    });
};

window.addEventListener('resize', handleAnimation);
window.addEventListener('scroll', handleAnimation);

// Start the animation immediately when the script runs
handleAnimation();







// let isAnimated = false;
// const handleAnimation = () => {
//     if (isAnimated) return;

//     document.querySelectorAll('.bar').forEach(skillBar => {
//         let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
//         let targetWidth = targetWidthElement.textContent.trim();
//         let duration = parseFloat(targetWidth)/100*5;
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
        
//         isAnimated = true;
//     });
// };


// window.addEventListener('resize', handleAnimation);
// window.addEventListener('scroll', handleAnimation);

// setTimeout(handleAnimation, 4000);

