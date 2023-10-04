// document.addEventListener('scroll', function () {
//     const scrollY = window.scrollY;
//     const colorChangePosition = 550; // 첫 번째 색상이 변경되는 y 좌표
//     const minDistanceFromBottom = 600; // 맨 아래부터의 최소 거리

//     const tooltips = document.querySelectorAll('.tooltiptext');

//     tooltips.forEach((tooltip) => {
//         if (scrollY >= colorChangePosition || scrollY <= (document.documentElement.scrollHeight - window.innerHeight - minDistanceFromBottom)) {
//             // 첫 번째 색상 변경 지점에 도달하거나 맨 아래부터의 최소 거리보다 가까운 경우 검은색으로 설정
//             tooltip.style.color = 'black';
//         } else {
//             // 그 외의 경우 흰색으로 설정
//             tooltip.style.color = 'white';
//         }
//     });
// });






document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const colorChangePosition = 550; // 첫 번째 색상이 변경되는 y 좌표

    const tooltips = document.querySelectorAll('.tooltiptext');

    tooltips.forEach((tooltip) => {
        tooltip.style.color = scrollY >= colorChangePosition ? 'white' : 'black';
    });
});
