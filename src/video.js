document.addEventListener('DOMContentLoaded', function() {
    const titleVideo = document.getElementById("title_video");
    const homeTitle = document.querySelector(".home_title");
    const homeTitleStrong = document.querySelector(".home_title--strong");
    const homeDescription = document.querySelector(".home_description");
    const homeContact = document.querySelector(".home_contact");
    const homeAvatar = document.querySelector(".home_avatar");


    titleVideo.volume = 0.5;  

    if (window.innerWidth <= 768) {
        titleVideo.remove();
        return; 
    }

    titleVideo.addEventListener('timeupdate', function() {
        if (titleVideo.currentTime >= 6.5) {
            titleVideo.pause();
            
            titleVideo.style.transition = 'opacity 1s ease-out';
            titleVideo.style.opacity = 0;

            homeTitle.classList.add('fadeIn');
            homeTitleStrong.classList.add('fadeIn');
            homeDescription.classList.add('fadeIn');
            homeContact.classList.add('fadeIn');

            setTimeout(() => {
                titleVideo.remove();
            }, 1000); 

            setTimeout(() => {
                homeAvatar.classList.add('active');
            }, 1000);
        }
    });
});
