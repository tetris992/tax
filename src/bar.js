const handleAnimation = () => {
    if (isAnimated) return;

    document.querySelectorAll('.bar').forEach(skillBar => {
        let targetWidthElement = skillBar.querySelector('.bar_metadata span:last-child');
        let targetWidth = targetWidthElement.textContent.trim();
        let duration = parseFloat(targetWidth)/100*2;
        let currentWidth = 0;
        
        skillBar.querySelector('.bar_value').style.transition = `width ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
        skillBar.querySelector('.bar_value').style.width = targetWidth;

        const incrementWidth = () => {
            currentWidth++;
            if(currentWidth <= parseFloat(targetWidth)){
                targetWidthElement.textContent = currentWidth + '%';
            }else{
                clearInterval(intervalId); // Stop the interval when reaching the target width
            }
        };
        const intervalId = setInterval(incrementWidth, (duration * 1000) / parseFloat(targetWidth)); // Distributing the duration time for each percentage point
        
        // isAnimated = true;
    });
};




// document.getElementById('Skills').addEventListener('click', () =>{
//     isAnimated = false;
//     handleAnimation();
// })


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