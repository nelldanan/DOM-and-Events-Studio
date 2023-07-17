// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", () => {

    //variables created for element id's
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const rocketImg = document.getElementById("rocket");
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const moveRight = document.getElementById("right");
    const moveLeft = document.getElementById("left");
    //rocket positioning
    const rocketHeight = 0;
    rocketImg.style.position = "absolute";
    rocketHeight.style.left = '50px';
    rocketHeight.style.bottom = '0px'

    /*let takeOff = false
    function checkY(position) {
        if (pos <= 0 || pos >= shuttleBackground.style.top) {
            return true
        } return false
    }
    function checkX(position) {
        if (pos <= 0 || pos >= shuttleBackground.style.top - 75) {
            return true
        } return false
    }*/

    //Shuttle take off 
    takeOffButton.addEventListener('click', function () {
        let response = confirm("Confirm the shuttle is ready for takeoff. ");
        if (response) {
            flightStatus.innerHTML = "Shuttle is in flight";
            shuttleBackground.style.backgroundColor = "blue";
            rocketHeight = + 10000;
            shuttleHeight.innerHTML = 10000;
        }
    });

    //Shuttle landing
    landingButton.addEventListener("click", function () {
        alert("The Shuttle is landing; Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketHeight = 0;
    });

    //abort mission
    abortMissionButton.addEventListener("click", function () {
        confirm("Confirm that you want to abort the mission.");
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketHeight = 0;
    })
    //up,down,right,left button changes


    moveUp.addEventListener("click", function () {
        rocketHeight += 10000;
        shuttleHeight.innerHTML = rocketHeight;
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) + 10 + 'px'
    });

    moveDown.addEventListener("click", function () {
        rocketHeight -= 10000;
        shuttleHeight.innerHTML = rocketHeight;
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) - 10 + 'px'
    });

    moveLeft.addEventListener("click", function () {
        rocketHeight -= 10000;
        shuttleHeight.innerHTML = rocketHeight;
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) - 10 + 'px'
    });

    moveRight.addEventListener("click", function () {
        rocketHeight += 10000;
        shuttleHeight.innerHTML = rocketHeight;
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) + 10 + 'px'
    });

});

//window.addEventListener("load", init);