document.addEventListener('DOMContentLoaded', () => {
    const dayTimeElement = document.getElementById('day-time');

    function updateDateTime() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[now.getDay()];
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');

        dayTimeElement.textContent = `${day} ${hours}:${minutes}`;
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);
    updateDateTime();
});


