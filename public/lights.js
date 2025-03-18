// Light control module

document.addEventListener('DOMContentLoaded', function() {
    updateColorPreview('#ffffff');
});

function updateColorPreview(color) {
    document.getElementById('colorPreview').style.backgroundColor = color;
}

function turnOn() {
    fetch('/api/power/on', {
        method: 'POST'
    })
}

function turnOff() {
    fetch('/api/power/off', {
        method: 'POST'
    })
}

function setColor() {
    const hexColor = document.getElementById('colorPicker').value;
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    fetch('/api/color', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            colors: {
                red: r,
                green: g,
                blue: b
            }
        })
    })
}