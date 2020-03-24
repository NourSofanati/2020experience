const mainDiv = document.querySelector('main');
const startButton = document.querySelector('#startButton');
const simulationDiv = document.querySelector('#simulation');
const monthText = document.querySelector('#month');
const screamText = document.querySelector('#scream');
const screamAudio = document.querySelector('audio');
const fireGif = document.querySelector('#fire');
const audioDuration = (screamAudio.duration - 1) * 1000;
const monthDuration = audioDuration / 12;
const introHeading = document.querySelector('#intro');
console.table(audioDuration, monthDuration);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
startButton.onclick = e => {
    startButton.classList.add('hide');
    introHeading.classList.add('hide');
    setTimeout(() => {
        startButton.remove();
        introHeading.remove();
        simulationDiv.classList.add('show');
        startSimulation();
    }, 550);
};
function startSimulation() {
    startAudio();
    changeText(1);
    fireGif.classList.add('show');
    mainDiv.classList.add('shake');
}
function changeText(index) {
    screamText.classList.add('textAnimation');
    setInterval(() => {
        monthText.textContent = months[index];
        index++;
        if (index >= 12) {
            monthText.classList.add('hide');
            fireGif.classList.add('hide');
            //test
        }
    }, monthDuration);
    setInterval(() => {
        screamText.textContent += Math.random() > .7 ? 'a' : 'A';
        if (screamText.textContent.length > 20)
            screamText.textContent = screamText.textContent.slice(1, 20);
    }, 33);
}
function startAudio() {
    screamAudio.play();
}
