document.querySelectorAll('.project_metadata').forEach(function(metaData) {
    metaData.addEventListener('click', function(event) {
        // 형제 요소인 img의 src 값을 가져옵니다.
        var imgSrc = event.currentTarget.previousElementSibling.src;

        // imgSrc를 모달의 이미지 src에 할당합니다.
        document.getElementById('modalImage').src = imgSrc;
        
        if(window.innerWidth <= 768) {
            return;
        } else {

            document.getElementById('myModal').style.display = 'block';
        }
    });
});

// 모달 닫기 이벤트는 이전과 동일하게 유지합니다.
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    let modal2 = document.getElementById('modalImage');
    if (event.target === modal || event.target === modal2) {
        modal.style.display = 'none';
    }
}



// 모달이 작동되지 않는 비전 
// 이유는  css 충돌로 아래 이미지에 클릭이 도달하지 못해서.. 이벤트가 감지되지 않기 때문 그런데 위에 코딩은 .project_metadata의 클릭 이벤트를 감지하여 동작을 수행하면 문제가 해결될 수 있음.

// HTML 구조를 보면, .project_img가 .project_metadata의 형제 요소(sibling)임을 확인할 수 있음/ 클릭 이벤트를 .project_metadata에 연결하고, 이벤트 핸들러 내에서 event.currentTarget의 형제 요소인 이미지의 src를 가져와서 모달에 사용


// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.project_img').forEach(function(img) {
//         img.addEventListener('click', function() {
//             document.getElementById('modalImage').src = img.src;
//             document.getElementById('myModal').style.display = 'block';
//         });
//     });
    
//     document.getElementById('closeModal').addEventListener('click', function() {
//         document.getElementById('myModal').style.display = 'none';
//     });
    
// window.onclick = function(event) {
//     let modal = document.getElementById('myModal');
//     let modal2 = document.getElementById('modalImage');
//     if (event.target === modal || event.target === modal2) {
//         modal.style.display = 'none';
//     }
// }
// });
