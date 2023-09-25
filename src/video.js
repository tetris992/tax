document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");

    // 너비가 1200px 이상일 때만 동영상이 재생되도록
    if (window.innerWidth >= 1200) {
        titleVideo.play();
    } else {
        titleVideo.pause();
    }

    // 비디오 재생 시간이 5초에 도달하면 멈춤
    titleVideo.addEventListener('timeupdate', function() {
        if (titleVideo.currentTime >= 5) {
            titleVideo.pause();
        }
    });

    // 창 크기 변경 시 동영상 재생/일시정지 처리
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1200) {
            titleVideo.play();
        } else {
            titleVideo.pause();
        }
    });
});