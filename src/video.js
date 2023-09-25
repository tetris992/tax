document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");
    const homeSection = document.getElementById("home");
    
    titleVideo.volume = 0.5;  // 볼륨을 0.5로 설정

    function playOrPauseVideo() {
        if (window.innerWidth >= 769) {
            titleVideo.currentTime = 0; // 동영상을 처음으로 되돌립니다.
            titleVideo.play();
        } else if (window.innerWidth < 768) {
            titleVideo.pause();
        }
    }

    playOrPauseVideo();  // 페이지 로드 시 체크합니다.

    // 비디오 재생 시간이 6.5초에 도달하면 멈춤
    titleVideo.addEventListener('timeupdate', function() {
        if (titleVideo.currentTime >= 6.5) {
            titleVideo.pause();
            homeSection.classList.add('shrink');
        }
    });
    // 창 크기 변경 시 동영상 재생/일시정지 처리
    window.addEventListener('resize', playOrPauseVideo);
});
