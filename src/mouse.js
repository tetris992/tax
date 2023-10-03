document.addEventListener('mousemove', function(e) {
    const follower = document.getElementById('follower');
    follower.style.left = e.pageX + 'px';
    follower.style.top = e.pageY + 'px';

    // Check if the follower is over the text element
    const textElement = document.getElementById('text');
    const textRect = textElement.getBoundingClientRect();
    if (
        e.pageX > textRect.left && e.pageX < textRect.right &&
        e.pageY > textRect.top && e.pageY < textRect.bottom
    ) {
        follower.style.backgroundColor = 'white';
    } else {
        follower.style.backgroundColor = 'black';
    }
});
