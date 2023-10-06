document.addEventListener('DOMContentLoaded', function() {
    const homeHeight = document.getElementById('home');
    const crossfade = document.querySelector('.crosshair1');
    const crossfade2 = document.querySelector('.crosshair2');
    const circle = document.querySelector('.circle');
    const abouttext = document.getElementById('aboutText');
    const aboutdescription = document.getElementById('aboutDescription');
    const titleVideo = document.getElementById("title_video");


    setTimeout(() => {
        homeHeight.classList.add('shrink'); 
    }, 7000); 

    setTimeout(() => {
        titleVideo.classList.add('shrink')
    }, 7000); 
    
    
    setTimeout(() => {
        crossfade.style.stroke = 'transparent';
        crossfade2.style.stroke = 'transparent';
        circle.style.stroke = 'transparent';
    }, 9900)
    
    setTimeout(()=>{
        const aboutText = document.getElementById('aboutText');
        const aboutDescription = document.getElementById('aboutDescription');

        // 원래 텍스트를 서서히 사라지게 합니다.
        aboutText.style.opacity = '0';
        aboutDescription.style.opacity = '0';
        titleVideo.style.opacity = '0.4';
    }, 12000);

    setTimeout(()=>{
        const aboutText = document.getElementById('aboutText');
        const aboutDescription = document.getElementById('aboutDescription');

        aboutText.innerHTML ='사업자를 위한 든든한 파트너!';
        aboutDescription.innerHTML ='문이 세무회계에서 상담 받아보세요';

        // 새로운 텍스트를 서서히 나타나게 합니다.
        aboutText.style.opacity = '1';
        aboutDescription.style.opacity = '1';
    }, 15000)
});

