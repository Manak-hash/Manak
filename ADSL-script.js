const speedSlider = document.getElementById('speedSlider');
const priceDisplay = document.getElementById('Mbps');

const Mbps = [4, 8, 12, 20];

speedSlider.addEventListener('input', function() {
    const selectedIndex = speedSlider.value;
    priceDisplay.textContent = Mbps[selectedIndex];
});