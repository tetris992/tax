// 'skills' 섹션에 마우스가 들어갈 때
document.querySelector('.skills').addEventListener('mouseover', function() {
    // 모든 'bar' 요소를 순회
    document.querySelectorAll('.bar').forEach(function(bar) {
        // 각 바의 목표 너비를 가져옴
        let targetWidth = bar.querySelector('.bar_metadata span:last-child').innerText;
        // 애니메이션 적용 (너비 변경)
        bar.querySelector('.bar_value').style.width = targetWidth;
    });
});
