document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");
    const homeTitle = document.querySelector(".home_title");
    const homeTitleStrong = document.querySelector(".home_title--strong");
    const homeDescription = document.querySelector(".home_description");
    const homeContact = document.querySelector(".home_contact");
    const homeAvatar = document.querySelector(".home_avatar");
    const homeSection = document.getElementById("home"); 
    // const headercolor = document.getElementById(".header");

    titleVideo.volume = 0.5;  // 볼륨을 0.5로 설정

    // 비디오 재생 시간이 6.5초에 도달하면 멈춤
    titleVideo.addEventListener('timeupdate', function() {
        if (titleVideo.currentTime >= 6.5) {
            titleVideo.pause();
            
            titleVideo.style.transition = 'opacity 1s ease-out';
            titleVideo.style.opacity = 0;

            homeTitle.classList.add('fadeIn');
            homeTitleStrong.classList.add('fadeIn');
            homeDescription.classList.add('fadeIn');
            homeContact.classList.add('fadeIn');
            // headercolor.classList.add("header_color_changed")

            setTimeout(() => {
                titleVideo.remove();
            }, 1000); // 1초 후

            setTimeout(() => {
                homeAvatar.classList.add('active');
            }, 2000);
        }
    });
});

    // // 비디오가 끝날 때 동작을 정의
    // titleVideo.addEventListener('ended', function() {
    //     if (window.innerWidth <= 768) {
    //         homeSection.style.height = "0";
    //         homeSection.style.overflow = 'hidden';
    //     }
    // });
