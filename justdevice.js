function applyGridGapColor(color) {
    const gridContainer = document.getElementsByClassName('alldevice');
    gridContainer.style.setProperty('--gap-color', '#ff0000');
}

// Example usage:
applyGridGapColor('#ff0000');