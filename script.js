document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animatedBox');
    let position = 0;
    let direction = 1;

    function animate() {
        position += direction;
        box.style.left = position + 'px';

        if (position >= 300 || position <= 0) {
            direction *= -1;
        }

        requestAnimationFrame(animate);
    }

    animate();
});