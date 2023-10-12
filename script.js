document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const circleElement = document.querySelector('.circle');
    const checkButton = document.getElementById('checkButton');

    function updateInternetConnectionStatus() {
        const online = navigator.onLine;

        if (online) {
            circleElement.style.backgroundColor = '#00ff00';
            statusElement.innerText = 'You are online';
            document.body.classList.remove('offline');
            document.body.classList.add('online');
        } else {
            circleElement.style.backgroundColor = '#ff0000';
            statusElement.innerText = 'You are offline';
            document.body.classList.remove('online');
            document.body.classList.add('offline');
        }
    }

    // Initial check
    updateInternetConnectionStatus();

    // Add an event listener to monitor changes in connection status
    window.addEventListener('online', updateInternetConnectionStatus);
    window.addEventListener('offline', updateInternetConnectionStatus);

    // Add a click event listener to the "Check Again" button
    checkButton.addEventListener('click', function() {
        statusElement.innerText = 'Checking...';
        circleElement.style.backgroundColor = '#ccc';
        setTimeout(updateInternetConnectionStatus, 1000); // Simulate checking delay
    });
});