document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.getElementById('mySidenav');
    document.getElementById('mySidenav').style.opacity = '1';
    sidenav.style.marginTop = '350px';

})

document.addEventListener('scroll', function(){
    let sidenav = document.getElementById('mySidenav');
    if(window.scrollY > 0) {
        sidenav.style.opacity = '1';
        // sidenav.style.padding = '0';
    sidenav.style.marginTop = '350px';

    } 
});

document.addEventListener('click', function(){
    let sidenav = document.getElementById('mySidenav');
    sidenav.style.opacity = '0';
    // sidenav.style.padding = '0';
    sidenav.style.marginTop = '0';
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
