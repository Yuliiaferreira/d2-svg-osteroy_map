document.querySelectorAll('[id^="terminal_"]').forEach(function(terminalElem) {
    console.log(terminalElem.id, terminalElem);
    document.querySelectorAll('[id^="bus_"]').forEach(function(busElem) {
        console.log(busElem.id, busElem);
    
    const popupIt = "popup_" + terminalElem.id.split("_")[1];

    const popupElem = document.getElementById(popupIt);
    
    terminalElem.addEventListener("mouseover", function(event) {
        popupElem.classList.add("popup-open");
    });
    terminalElem.addEventListener("mouseout", function(event) {
        popupElem.classList.remove("popup-open");
    });
    busElem.addEventListener("mouseover", function(event) {
        popupElem.classList.add("routeline-higlight");
    });
    busElem.addEventListener("mouseout", function(event) {
        popupElem.classList.remove("routeline-higlight");
    });

    });
});
/*
document.querySelectorAll('[id^="bus_"]').forEach(function(busElem) {
    console.log(busElem.id, busElem);

    const higlightRoute = "routeline_" + busElem.id.split("_")[1];
    const higlightBus = document.getElementById(higlightRoute);
    busElem.addEventListener("mouseover", function(event) {
        higlightBus.classList.add("routeline-higlight");
    });
    busElem.addEventListener("mouseout", function(event) {
        higlightBus.classList.remove("routeline-higlight");
    });
});*/

document.querySelectorAll('[id^="routeline_"]').forEach(function(routeline) {
    routeline.addEventListener("mouseover", function(event) {
        // move the line to the front
        event.currentTarget.parentElement.append(event.currentTarget);
    });
});