// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    let rocketHeight = 0;
    rocket.style.position = "absolute";
    rocket.style.left = "40%";
    rocket.style.bottom = "0px";
    let takeOff = false;
  
    takeOffButton.addEventListener("click", function () {
      let response = window.confirm(
        "Confirm that the shuttle is ready for takeoff."
      );
      if (response) {
        takeOff = true;
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "powderblue";
        rocketHeight += 10000;
        spaceShuttleHeight.innerHTML = rocketHeight;
      }
    });
  
    landingButton.addEventListener("click", function () {
      window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "darkgreen";
      rocketHeight = 0;
      spaceShuttleHeight.innerHTML = rocketHeight;
    });
  
    missionAbortButton.addEventListener("click", function () {
      let response = window.confirm(
        "Confirm that you want to abort the mission."
      );
      if (response) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "lightgreen";
        rocketHeight = 0;
        spaceShuttleHeight.innerHTML = rocketHeight;
      }
    });
  
    upButton.addEventListener("click", function () {
      rocketHeight += 10000;
      spaceShuttleHeight.innerHTML = rocketHeight;
      rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
    });
  
    downButton.addEventListener("click", function () {
      rocketHeight -= 10000;
      spaceShuttleHeight.innerHTML = rocketHeight;
      rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
    });
  
    leftButton.addEventListener("click", function () {
      rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    });
  
    rightButton.addEventListener("click", function () {
      rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    });
  });