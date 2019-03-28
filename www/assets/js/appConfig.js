var app = new Framework7({
    root: "#app", //this is the app element
})

var mainView = app.views.create('.view-main');

//For Plugins
document.addEventListener("deviceready", init, false);

//Declaring vriables
var x = 0;
var y = 0;
var z = 0;

function init() {

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
    } else {
        alert("no luck");
    }

    function handleOrientation(event) {
        x += event.gamma;
        y += event.beta;
        z += event.gamma;
    }
}

function setup() {
    var cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.parent('canvas');
}

function draw() {
    background(250);
    normalMaterial();
    rotateX(x * 100);
    rotateY(y * 100);
    rotateZ(z * 100);
    box(100, 100, 100);
}
