document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");
    const homeTitle = document.querySelector(".home_title");
    const homeTitleStrong = document.querySelector(".home_title--strong");
    const homeDescription = document.querySelector(".home_description");
    const homeContact = document.querySelector(".home_contact");
    // const homeAvatar = document.querySelector(".home_avatar");

    
    titleVideo.volume = 0.5;  // 볼륨을 0.5로 설정

    // if (window.innerWidth <= 768) {
    //     homeAvatar.classList.add('active');
    // }

    // 비디오 재생 시간이 6.5초에 도달하면 멈춤
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
            // homeAvatar.classList.add('fadeIn');

            // 애니메이션 종료 후 비디오 요소 삭제
            setTimeout(() => {
                titleVideo.remove();
            }, 1000); // 1초 후
            // setTimeout(() => {
            //     homeAvatar.classList.add('fadeIn');
            // }, 1000);
            setTimeout(() => {
                homeAvatar.classList.add('active');
            }, 2000);
        }
    });

});

// 윈도우 리사이즈 때 영상을 실행
// window.addEventListener('resize', function() {
//     if (this.window.innerWidth > 768) {
//         titleVideo.add();
//     const titleVideo = document.getElementById("title_video");
//     titleVideo.play();
//     }
// }); //수정이 필요함 add할수 없음. 