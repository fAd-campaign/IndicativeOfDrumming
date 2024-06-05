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


// Listen for window resize event
window.addEventListener('resize', function() {
  adjustContentPosition();
});

// Function to adjust content position
function adjustContentPosition() {
  const video = document.getElementById('background-video');
  const content = document.querySelector('.content');
  const sidenav = document.querySelector('.sidenav');

  if (video && content && sidenav) {
    if (window.innerWidth <= 768) {
      const videoHeight = video.clientHeight;
      const sidenavWidth = sidenav.clientWidth;
      content.style.position = 'absolute';
      content.style.top = `${videoHeight + 16}px`;
      content.style.left = `${sidenavWidth + 7}px`;
      content.style.right = '7px';
    } else {
      content.style.position = 'relative';
      content.style.top = 'auto';
      content.style.left = '88px'; // reset to original value
    }
  }
}

// Call adjustContentPosition function on initial page load
adjustContentPosition();


