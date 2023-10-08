let currentIndex = 0;
const ids = ['about', 'skills', 'work', 'Testimonal', 'FAQ'];
const cards = ids.map(id => document.getElementById(id));

// 

const updateCards = () => {
    cards.forEach((card, index) => {
        let zIndex = 0;
        let transformValue = '';
        let opacityValue = 1;
        let grayscaleValue = 0;
        let boxShadowValue = '';

        let rotateValue = '0deg';  // 기본 회전값은 0도

        if (index === currentIndex) {
            zIndex = 1000;
            transformValue = 'translateY(-15px) translateX(0)';
        } else if (index === (currentIndex + 1) % cards.length) {
            zIndex = 500;
            transformValue = 'translateY(0) translateX(15px)';
            opacityValue = 0.8;
            grayscaleValue = 0.1;
        } else if (index === (currentIndex + 2) % cards.length) {
            zIndex = 400;
            transformValue = 'translateY(7.5px) translateX(30px)';
            opacityValue = 0.6;
            grayscaleValue = 0.4;
        } else if (index === (currentIndex + 3) % cards.length) {
            zIndex = 300;
            transformValue = 'translateY(15px) translateX(45px)';
            opacityValue = 0.7;
            grayscaleValue = 1;
        } else {
            zIndex = 200;
            transformValue = 'translateY(22.5px) translateX(60px)';
            opacityValue = 0.2;
            grayscaleValue = 1;  // 완전한 흑백
            boxShadowValue = '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)';
            rotateValue = '-15deg';  // 뒤로 가는 카드에 대한 회전값
        }

        card.style.transform = `${transformValue} rotate(${rotateValue})`;  // 회전값 추가
        card.style.zIndex = zIndex.toString();
        card.style.opacity = opacityValue.toString();
        card.style.filter = `grayscale(${grayscaleValue})`;
        card.style.boxShadow = boxShadowValue;
    });
};





let isScrolling = false;

const rotateCards = (event) => {
    if (isScrolling) return;

    isScrolling = true;
    setTimeout(() => { isScrolling = false }, 600);

    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % cards.length;
    } else {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }
    updateCards();
};

updateCards(); // initial setup
window.addEventListener('wheel', rotateCards);
