document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");

    function calculateMaxPlayTime() {
        if (window.innerWidth >= 1920) {
            return 9;  // 풀사이즈일 때 최대 재생 시간
        } else {
            // 너비가 1200에서 100씩 줄어들 때마다 재생 시간이 1초씩 감소
            let decrease = Math.floor((1920 - window.innerWidth) / 150);
            return 9 - decrease;
        }
    }

    function playOrPauseVideo() {
        if (window.innerWidth >= 1920) {
            titleVideo.currentTime = 0;
            titleVideo.play();
        } else if (window.innerWidth < 768) {
            titleVideo.pause();
        }
    }

    playOrPauseVideo();

    titleVideo.addEventListener('timeupdate', function() {
        let maxPlayTime = calculateMaxPlayTime();
        if (titleVideo.currentTime >= maxPlayTime) {
            titleVideo.pause();
        }
    });

    window.addEventListener('resize', playOrPauseVideo);
});
