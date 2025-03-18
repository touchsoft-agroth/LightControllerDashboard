// Light control module

// Initialize color preview on page load
document.addEventListener('DOMContentLoaded', function() {
    updateColorPreview('#ffffff');
});

// Color preview update
function updateColorPreview(color) {
    document.getElementById('colorPreview').style.backgroundColor = color;
}

// Light control functions
function turnOn() {
    sendCommand({state: 'on'});
}

function turnOff() {
    sendCommand({state: 'off'});
}

function setColor() {
    const hexColor = document.getElementById('colorPicker').value;
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    sendCommand({
        state: 'on',
        color: {r, g, b}
    });
}

function setBlink() {
    sendCommand({
        effect: 'blink',
        state: 'on'
    });
}

function setCandlelight() {
    sendCommand({
        effect: 'candlelight',
        state: 'on'
    });
}

function setNightlight() {
    sendCommand({
        effect: 'nightlight',
        state: 'on'
    });
}

function setDaylight() {
    sendCommand({
        effect: 'daylight',
        state: 'on'
    });
}

// API communication function
function sendCommand(data) {
    // Get authentication token
    const token = getAuthToken();
    if (!token) {
        alert('You are not authenticated. Please login.');
        checkAuth();
        return;
    }

    // For development, just log the command
    console.log('Sending command:', data);

    // In production, you would send to your backend like this:
    /*
    fetch('/api/lights', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
}