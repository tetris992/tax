document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const colorChangePosition = 650; // 색상이 변경되는 y 좌표
    
    const tooltips = document.querySelectorAll('.tooltiptext');

    // 스크롤 위치에 따라 툴팁 텍스트 색상 변경
    if (scrollY >= colorChangePosition) {
        // 특정 y 좌표를 넘어가면 툴팁 텍스트 색상을 흰색으로 변경
        tooltips.forEach((tooltip) => {
            tooltip.style.color = 'white';
        });
    } else {
        // 특정 y 좌표 이전에 있을 때는 툴팁 텍스트 색상을 검은색으로 변경
        tooltips.forEach((tooltip) => {
            tooltip.style.color = 'black';
        });
    }
});
