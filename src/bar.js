let animated = false; // 애니메이션이 발생했는지를 확인하는 flag

document.querySelector('.skills').addEventListener('mouseover', function() {
    // 이미 애니메이션이 한 번 실행되었다면 더 이상 실행하지 않습니다.
    if (animated) return;

    // 모든 'bar' 요소를 순회
    document.querySelectorAll('.bar ul').forEach(function(bar) {
        // 각 바의 목표 너비를 가져옴
        let targetWidth = bar.querySelector('.bar_metadata span:last-child').textContent.trim();
        // 애니메이션 적용 (너비 변경)
        bar.querySelector('.bar_value').style.width = targetWidth;
    });

    animated = true; // 애니메이션이 실행되었음을 표시
});
