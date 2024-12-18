const speedSlider = document.getElementById('speedSlider');
const MbpsDisplay = document.getElementById('Mbps');

const Mbps = [4, 8, 12, 20];

speedSlider.addEventListener('input', function() {
    const selectedIndex = speedSlider.value;
    MbpsDisplay.textContent = Mbps[selectedIndex];
});