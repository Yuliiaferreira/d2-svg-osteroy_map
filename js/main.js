document.querySelectorAll('[id^="terminal_"]').forEach(function(terminalElem) {
    console.log(terminalElem.id, terminalElem);
    
    const popupIt = "popup_" + terminalElem.id.split("_")[1];

    const popupElem = document.getElementById(popupIt);
    
    terminalElem.addEventListener("mouseover", function(event) {
        popupElem.classList.add("popup-open");
    });
    terminalElem.addEventListener("mouseout", function(event) {
        popupElem.classList.remove("popup-open");
    });
});

document.querySelectorAll('[id^="bus_"]').forEach(function(busElem) {
    console.log(busElem.id, busElem);

    const splitRoute = "routeline_" + busElem.id.split("_")[1];

    const splitElem = document.getElementById(splitRoute);
    
    busElem.addEventListener("mouseover", function(event) {
       splitElem.classList.add("routeline-active");
    });
    busElem.addEventListener("mouseout", function(event) {
        splitElem.classList.remove("routeline-active");
    });
});

document.querySelectorAll('[id^="routeline_"]').forEach(function(routeElem) {
    console.log(routeElem.id, routeElem);

    const splitBus = "bus_" + routeElem.id.split("_")[1];

    const busClass = document.getElementById(splitBus);
    
    routeElem.addEventListener("mouseover", function(event) {
        busClass.classList.add("bus-active");
    });
    routeElem.addEventListener("mouseout", function(event) {
        busClass.classList.remove("bus-active");
    });
});

document.querySelectorAll('[id^="routeline_"]').forEach(function(routeline) {
    routeline.addEventListener("mouseover", function(event) {
        // move the line to the front
        event.currentTarget.parentElement.append(event.currentTarget);
    });
    //console.log(routeline);
});

document.querySelectorAll('[id^="bus_"]').forEach(function(routeBus) {
    routeBus.addEventListener("mouseover", function(event) {
        event.currentTarget.parentElement.append(event.currentTarget);
    });
    //console.log(routeBus);
});