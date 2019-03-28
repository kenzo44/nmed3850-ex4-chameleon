var app = new Framework7({
    root: "#app", //this is the app element
})

var mainView = app.views.create('.view-main');

//For Plugins
document.addEventListener("deviceready", init, false);

//Declaring vriables
var posx = 0;
var posy = 0;

function init() {

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
    } else {
        alert("no luck");
    }

    function handleOrientation(event) {
        posy += event.beta; // add x to y position
        posx += event.gamma; // add y to x position
    }
}

function setup() {
    var cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.parent("canvas");
}

function draw() {
    ellipse(posx, posy, 55, 55);
}
