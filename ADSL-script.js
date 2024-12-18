const speedSlider = document.getElementById('speedSlider');
const MbpsDisplay = document.getElementById('Mbps');
const PriceDisplay = document.getElementById('price');

const Mbps = [4, 8, 12, 20];
const Price = [99, 149, 199, 399];

speedSlider.addEventListener('input', function() {
    const selectedIndex = speedSlider.value;
    MbpsDisplay.textContent = Mbps[selectedIndex];
    PriceDisplay.textContent = Price[selectedIndex];
});