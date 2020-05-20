// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    let buttonTakeOff = document.getElementById("takeoff");
    let buttonLand = document.getElementById("landing");
    let buttonAbort = document.getElementById("missionAbort");
    let background = document.querySelector("#shuttleBackground");
    let status = document.getElementById("flightStatus");
    let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let display = document.getElementById("rocket");

    display.style.position = "absolute";
    display.style.top = "250px";
    display.style.left = "320px";

buttonTakeOff.onclick = function(){
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (result === true){
        background.style.background = "blue";
        status.innerHTML = "Shuttle in flight.";
        height = height + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = `${height}`;
        buttonLand.style.opacity = "1";
    }
}

buttonLand.onclick = function(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "The shuttle has landed.";
    background.style.background = "green";
    height = 0;
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    buttonLand.style.opacity = "0";
}

buttonAbort.onclick = function(){
    let result = window.confirm("Confirm that you want to abort the mission.");
    if (result === true){
        status.innerHTML = "Mission aborted.";
        background.style.background = "green";
        height = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        buttonLand.style.opacity = "0";
    }
}

up.onclick = function(){
    if(background.style.background == "blue"){
        if(height > 250000){
            window.alert('Cannot go higher');
        } else {
             height = height + 10000;
             document.getElementById("spaceShuttleHeight").innerHTML = `${height}`;
             let distance = parseInt(display.style.top);
             distance = distance - 10;
             display.style.top = distance + 'px';}
        } else {
        window.alert("Please launch the shuttle.");
    }
}

down.onclick = function(){
    if((background.style.background == "blue") && (height > 10000) ){
        height = height - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = `${height}`;
        let distance = parseInt(display.style.top);
        distance = distance + 10;
        display.style.top = distance + 'px';
    } else if (background.style.background == "blue") {
        window.alert("ALERT! THIS WILL CRASH THE ROCKET!");
    } else {
        window.alert("Please launch the shuttle.");
    }
}

right.onclick = function(){
    if(background.style.background == "blue"){
        let rightLeft = parseInt(display.style.left);
        if(rightLeft > 650){
            window.alert("Cannot travel further right.")
        } else{
            rightLeft = rightLeft + 10;
            display.style.left = rightLeft + 'px';
        }
    } else {
        window.alert("Please launch the shuttle.");
    }
}

left.onclick = function(){
    if(background.style.background == "blue"){
        let rightLeft = parseInt(display.style.left);
        if(rightLeft < 0){
            window.alert("Cannot travel further left.")
        } else{
            rightLeft = rightLeft - 10;
            display.style.left = rightLeft + 'px';
        }
    } else {
        window.alert("Please launch the shuttle.");
    }
}

})
