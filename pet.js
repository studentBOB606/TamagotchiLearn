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
        COunt += 16;
        UPdateDisplay()

    }else if (COunt < KWartCOunt){
        COunt += 8;
        UPdateDisplay()
    }else if (COunt < MAxCOunt){
        COunt += 4;
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
        updateDisplay();
    }
    else {
        alert("Maximum count reached!");
    }
}
function updateDisplay() {
    document.getElementById('honger').textContent = count;
}
function UpdateDisplay() {
    document.getElementById('plezier').textContent = Count;
}
function UPdateDisplay() {
    document.getElementById('slaap').textContent = COunt;
}
function UPDateDisplay() {
    document.getElementById('job').textContent = COUnt;
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

function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
