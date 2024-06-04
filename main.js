document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');

    if (content) {
        content.classList.add('hovered'); // Start in the hovered state

        content.addEventListener('mouseenter', function() {
            content.classList.remove('unhovered');
            content.classList.add('hovered');
        });

        content.addEventListener('mouseleave', function() {
            content.classList.remove('hovered');
            content.classList.add('unhovered');
        });
    }

    const video = document.getElementById('background-video');
    const button = document.getElementById('muteButton');

    if (button && video) {
        button.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                button.textContent = 'Mute';
            } else {
                video.muted = true;
                button.textContent = 'Unmute';
            }
        });

        window.addEventListener('click', function(event) {
            const isLink = event.target.closest('a');

            if (!isLink && video.muted) {
                video.muted = false;
                button.textContent = 'Mute';
                video.play();
            }
        }, { once: true });
    }
});
