let startTime;
let interval;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (interval || 0);
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
    isRunning = false;
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const timeString = elapsedTime.toISOString().substr(11, 8);
    document.getElementById("display").textContent = timeString;
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").textContent;
        const lapElement = document.createElement("div");
        lapElement.textContent = lapTime;
        document.getElementById("laps").appendChild(lapElement);
    }
}
