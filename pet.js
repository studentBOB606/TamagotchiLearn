function MyFunction(){
    document.getElementById("animal").src="Cowboy Monkey.png"
} function MYFunction(){
    document.getElementById("animal").src="Safari Monkey.png"
} function MYFUnction(){
    document.getElementById("animal").src="Summer Monkey.png"
} function MYFUNction(){
    document.getElementById("animal").src="Knight Monkey.png"
}
function activateMode(mode, button) {
    // Remove all classes from the body
    document.body.className = "";

    // Add the selected mode to the body
    document.body.classList.add(mode);

    // Reset all buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Highlight the clicked button
    button.classList.add("active");

}

let count = 0;
const halfCount = 50;
const Kwartcount= 75;
const maxCount = 100;
const decrementRate = 10000;

function updateDisplay() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = count + '%';
    progressBar.textContent = count + '%';
}

function increment() {
    if (count < halfCount) {
        count += 16;
        updateDisplay();
    }else if (count < Kwartcount){
        count += 8;

        updateDisplay();

    }
    else if (count < maxCount){
        count += 4;
        updateDisplay();
    }
    else {
        alert("Maximum count reached!");
    }
}
let COunt = 0;
const HAlfCOunt = 50;
const KWartCOunt= 75;
const MAxCOunt = 100;
const DEcrementRate = 10000;
function INcrement() {
    if (COunt < HAlfCOunt) {
        COunt += 32;
        UPdateDisplay()

    }else if (COunt < KWartCOunt){
        COunt += 16;
        UPdateDisplay()
    }else if (COunt < MAxCOunt){
        COunt += 8;
        UPdateDisplay()
    }
    else {
        alert("Maximum count reached!");
    }
}
let COUnt = 0;
const HAlFCOUnt = 50;
const KWArtCOUnt= 75;
const MAXCOUnt = 100;
const DECrementRate = 10000;
function INCrement() {
    if (COUnt < HAlFCOUnt) {
        COUnt += 16;
        UPDateDisplay()

    }else if (COUnt < KWArtCOUnt){
        COUnt += 8;
        UPDateDisplay()
    }else if (COUnt < MAXCOUnt){
        COUnt += 4;
        UPDateDisplay()
    }
    else {
        alert("Maximum count reached!");
    }
}
let Count = 0;
const HalfCount = 50;
const KwartCount= 75;
const MaxCount = 100;
const DecrementRate = 10000;
function Increment() {
    if (Count < HalfCount) {
        Count += 16;
        UpdateDisplay();
    }else if (Count < KwartCount){
        Count += 8;
        UpdateDisplay();
    }
    else if (Count < MaxCount){
        Count += 4;
        UpdateDisplay();
    }
    else {
        alert("Maximum count reached!");
    }
}
function updateDisplay() {
    document.getElementById('honger').textContent = count;
    const popup = document.getElementById('popup');
    if (count < 45) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}
function UpdateDisplay() {
    document.getElementById('plezier').textContent = Count;
    const popup = document.getElementById('popup-text');
    if (Count < 45) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}
function UPdateDisplay() {
    document.getElementById('slaap').textContent = COunt;
    const popup = document.getElementById('Text');
    if (COunt < 45) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}
function UPDateDisplay() {
    document.getElementById('job').textContent = COUnt;
    const popup = document.getElementById('Text-Popup');
    if (COUnt < 45) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

setInterval(() => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}, decrementRate);
setInterval(() => {
    if (Count > 0) {
        Count--;
        UpdateDisplay()
    }
}, DecrementRate);
setInterval(() => {
    if (COunt > 0) {
        COunt--;
        UPdateDisplay()
    }
}, DEcrementRate);
setInterval(() => {
    if (COUnt > 0) {
        COUnt--;
        UPDateDisplay()
    }
}, DECrementRate);

function startAnimation() {
    const animatedDiv = document.getElementById('animatedDiv');

    // Remove the animation by resetting the style
    animatedDiv.style.animation = 'none';

    // Force a reflow to restart the animation
    void animatedDiv.offsetWidth;

    // Add the animation back
    animatedDiv.style.animation = 'mymove 1750ms forwards';
}
function StartAnimation() {
    const Animated = document.getElementById('Animated');

    // Remove the animation by resetting the style
    Animated.style.animation = 'none';

    // Force a reflow to restart the animation
    void Animated.offsetWidth;

    // Add the animation back
    Animated.style.animation = 'move 1750ms forwards';
}
function Animation() {
    const AnimatedWork = document.getElementById('AnimatedWork');

    // Remove the animation by resetting the style
    AnimatedWork.style.animation = 'none';

    // Force a reflow to restart the animation
    void AnimatedWork.offsetWidth;

    // Add the animation back
    AnimatedWork.style.animation = 'Animated 1750ms forwards';
}
function StartingAnimation() {
    const working = document.getElementById('working');

    // Remove the animation by resetting the style
    working.style.animation = 'none';

    // Force a reflow to restart the animation
    void working.offsetWidth;

    // Add the animation back
    working.style.animation = 'Moving 1750ms forwards';
}


