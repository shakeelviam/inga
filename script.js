document.addEventListener('DOMContentLoaded', function() {
    const curtainContainer = document.querySelector('.curtain-container');
    let timeoutId;

    // Function to open the curtains
    function openCurtains() {
        curtainContainer.classList.add('open');

        // Close the curtains after 10 seconds
        clearTimeout(timeoutId); // Clear any existing timeout
        timeoutId = setTimeout(() => {
            curtainContainer.classList.remove('open');
        }, 10000); // 10 seconds
    }

    // Open curtains on mouse move, click, or touch
    curtainContainer.addEventListener('mousemove', openCurtains);
    curtainContainer.addEventListener('click', openCurtains);
    curtainContainer.addEventListener('touchstart', openCurtains);
});