document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");

    function checkVideoPlayback() {
        if (window.innerWidth >= 1200) {
            titleVideo.play();
        } else {
            titleVideo.pause();
        }
    }

    // 페이지가 로드될 때 동영상 재생 상태를 확인합니다.
    checkVideoPlayback();

    // 화면 크기가 변경될 때마다 함수를 호출합니다.
    window.addEventListener("resize", checkVideoPlayback);
});
