const speedSlider = document.getElementById('speedSlider');
const MbpsDisplay = document.getElementById('Mbps');
const PriceDisplay = document.getElementById('price');
const feesDisplay = document.getElementById('fees');

const Mbps = [
    "3 h + 3 Go<br>or<br>1 h + 11 Go",
    "11 h + 2 Go<br>or<br>4 h + 13 Go<br>or<br>1 h + 20 Go",
    "5 h + 15 Go<br>or<br>2 h + 22 Go",
    "14 h + 14 Go<br>or<br>3 h + 30 Go",
    "22 h + 12 Go<br>or<br>12 h + 30 Go",
    "20 h + 25 Go<br>or<br>5 h + 45 Go",
    "Unlimited national calls<br>+ 30 Go + 1000 SMS",
    "30 h + 30 Go<br>or<br>15 h + 55 Go",
    "Unlimited national calls<br>+ 100h international + 35 Go<br>+ Unlimited SMS<br>(1000 nationals or 250 internationals)",
    "Unlimited national calls<br>+ Unlimited international calls (200 h)<br>+ Unlimited Data<br>(Speed cap beyond 100 Go)<br>+ Unlimited SMS<br>(1000 nationals or 250 internationals)",
];
const Price = [59, 99, 119, 165, 220, 249, 259, 349, 439, 649];
const fees = [59, 99, 119, 165, 220, 249, 259, 349, 439, 649];

speedSlider.addEventListener('input', function() {
    const selectedIndex = speedSlider.value;
    MbpsDisplay.innerHTML = Mbps[selectedIndex];
    PriceDisplay.textContent = Price[selectedIndex];
    feesDisplay.textContent = fees[selectedIndex];
});
const speedSlider2 = document.getElementById('speedSlider-2');
const MbpsDisplay2 = document.getElementById('Mbps-2');
const PriceDisplay2 = document.getElementById('price-2');
const feesDisplay2 = document.getElementById('fees-2');

const Mbps2 = [
    "5 h (Unlimited to Orange)<br>+ 1 Go (Unlimited WhatsApp)<br>or<br>1 h (Unlimited to Orange)<br>+ 2 Go (Unlimited Social Media)<br>or<br>1 h + 11 Go (Unlimited WhatsApp)<br>or<br>3 h (Unlimited to Orange) + 3 Go",
    "1 h + 20 Go (Unlimited Social Media)<br>or<br>11 h (Unlimited to Orange) + 11 Go",
    "17 h (Unlimited to Orange) + 17 Go<br>or<br>3 h + 30 Go (Unlimited Social Media)",
    "5 h + 40 Go (Unlimited Social Media)<br>or<br>Unlimited national calls<br>+ 25 Go + Unlimited national SMS",
];
const Price2 = [49, 99, 149, 199];
const fees2 = [49, 99, 149, 199];

speedSlider2.addEventListener('input', function() {
    const selectedIndex = speedSlider2.value;
    MbpsDisplay2.innerHTML = Mbps2[selectedIndex];
    PriceDisplay2.textContent = Price2[selectedIndex];
    feesDisplay2.textContent = fees2[selectedIndex];
});
const speedSlider3 = document.getElementById('speedSlider-3');
const MbpsDisplay3 = document.getElementById('Mbps-3');
const PriceDisplay3 = document.getElementById('price-3');
const feesDisplay3 = document.getElementById('fees-3');

const Mbpss3 = [
    "1 h (Unlimited to inwi)<br>+ 2 Go (Unlimited Social Media)<br>or<br>1 h + 11 Go (Unlimited WhatsApp)<br>or<br>4 h (Unlimited to inwi) + 2 Go",
    "2 h (Unlimited to inwi)<br>+ 15 Go (Unlimited Social Media)<br>or<br>5 h + 18 Go (Unlimited WhatsApp)<br>or<br>1 h + 25 Go (Unlimited WhatsApp)<br>or<br>11 h + 11 Go (Unlimited WhatsApp)<br>or<br>11 h (Unlimited to inwi) + 11 Go",
    "2 h + 29 Go",
    "3 h + 33 Go (Unlimited WhatsApp)<br>or<br>17 h + 17 Go (Unlimited WhatsApp)",
    "4 h + 44 Go (Unlimited WhatsApp)<br>or<br>Unlimited national calls<br>+ 25 Go (Unlimited WhatsApp)<br>+ 50 MAD Free",
    "Unlimited national calls<br>+ 50 Go (Unlimited WhatsApp)<br>+ 25 MAD Free",
    "Unlimited national & international calls<br>+100 Go (Unlimited WhatsApp)<br>+ 125 MAD Free"
]; 
const Price3 = [49, 99, 119, 149, 199, 249, 499];
const fees3 = [49, 99, 119, 149, 199, 249, 499];

speedSlider3.addEventListener('input', function() {
    const selectedIndex = speedSlider3.value;
    MbpsDisplay3.innerHTML = Mbpss3[selectedIndex];
    PriceDisplay3.textContent = Price3[selectedIndex];
    feesDisplay3.textContent = fees3[selectedIndex];
});