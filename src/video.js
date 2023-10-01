document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");
    const homeTitle = document.querySelector(".home_title");
    const homeTitleStrong = document.querySelector(".home_title--strong");
    const homeDescription = document.querySelector(".home_description");
    const homeContact = document.querySelector(".home_contact");
    const homeAvatar = document.querySelector(".home_avatar");


    titleVideo.volume = 0.5;  // 볼륨을 0.5로 설정

    // 모바일 환경에서는 비디오 제거
    if (window.innerWidth <= 768) {
        titleVideo.remove();
        return; // 모바일 환경에서는 아래 로직을 진행하지 않음
    }

    // 비디오 재생 시간이 6.5초에 도달하면 멈춤 및 애니메이션 처리
    titleVideo.addEventListener('timeupdate', function() {
        if (titleVideo.currentTime >= 6.5) {
            titleVideo.pause();
            
            // 비디오의 투명도를 서서히 0으로 만드는 애니메이션 적용
            titleVideo.style.transition = 'opacity 1s ease-out';
            titleVideo.style.opacity = 0;

            // 글자들이 서서히 보이도록 .fadeIn 클래스 추가
            homeTitle.classList.add('fadeIn');
            homeTitleStrong.classList.add('fadeIn');
            homeDescription.classList.add('fadeIn');
            homeContact.classList.add('fadeIn');

            // 애니메이션 종료 후 비디오 요소 삭제
            setTimeout(() => {
                titleVideo.remove();
            }, 1000); // 1초 후

            setTimeout(() => {
                homeAvatar.classList.add('active');
            }, 1000);
        }
        window.onload = function() {
            setTimeout(function() {
                document.querySelector('.home_contact').classList.add('animate');
            }, 2000); // 8 seconds delay
        };
    });
});
