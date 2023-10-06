document.addEventListener('DOMContentLoaded', function() {
    const sidenav = document.getElementById('mySidenav');
    const aboutTopmargin = document.getElementById('about');

    sidenav.style.opacity = '0.7';
    sidenav.style.marginTop = '100px';
    
    document.addEventListener('scroll', function(){
        if(window.scrollY > 0) {
            sidenav.style.opacity = '1';
            sidenav.style.marginTop = '250px';
        } 
    });


    document.addEventListener('click', function(){
        sidenav.style.opacity = '0';
        sidenav.style.marginTop = '0';
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('mySidenav').style.width = '130px';

// });

// document.addEventListener('scroll', function () {
//     var sidenav = document.getElementById('mySidenav');

//     if (window.scrollY > 0) {
//         sidenav.style.opacity = '0.2';
//     } else {
//         sidenav.style.opacity = '1';
//     }
// });
