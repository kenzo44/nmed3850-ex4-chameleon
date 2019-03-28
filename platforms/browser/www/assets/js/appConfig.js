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

var r = random(50, 255)
var g = random(0, 200);
var b = random(50, 255);

function init() {

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
    } else {
        alert("no luck");
    }

    function handleOrientation(event) {
        y += event.gamma;
        x += event.beta;
        z += event.alpha;

        r = map(x, 0, 255, 100, 175);
        g = map(y, 0, 255, 100, 200);
        b = map(z, 0, 255, 100, 200);
    }
}

function setup() {
    var cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.parent('canvas');

}

function draw() {
    background(r, g, b);

    ambientLight(50);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, x, y, 250);

    specularMaterial(250);
    rotateX(x * 0.001);
    rotateY(y * 0.001);
    box(100, 100, 100);
}
