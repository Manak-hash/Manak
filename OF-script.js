const speedSlider = document.getElementById('speedSlider');
const MbpsDisplay = document.getElementById('Mbps');

const Mbps = [100, 200]; 

speedSlider.addEventListener('input', function() {
    const selectedIndex = speedSlider.value;
    MbpsDisplay.textContent = Mbps[selectedIndex];
});
const speedSlider2 = document.getElementById('speedSlider-2');
const MbpsDisplay2 = document.getElementById('Mbps-2');
const feesDisplay = document.getElementById('fees');

const Mbps2 = ["50 Mbps for 3 months then 20", "100 Mbps for 3 months then 50", "200 Mbps for 3 months then 100", "Fiber up to 200"];
const fees = [": 99 MAD incl. tax", " is Free", " is Free", " is Free"];

speedSlider2.addEventListener('input', function() {
    const selectedIndex = speedSlider2.value;
    MbpsDisplay2.textContent = Mbps2[selectedIndex];
    feesDisplay.textContent = fees[selectedIndex];
});
const speedSlider3 = document.getElementById('speedSlider-3');
const MbpsDisplay3 = document.getElementById('Mbps-3');

const Mbpss3 = ["50 Mbps for 3 months then 20", "100 Mbps for 3 months then 50", "200 Mbps for 3 months then 100", "Fiber up to 200"]; 

speedSlider3.addEventListener('input', function() {
    const selectedIndex = speedSlider3.value;
    MbpsDisplay3.textContent = Mbpss3[selectedIndex];
});