var app = new Framework7({
    root: "#app", //this is the app element
    routes: [
        {
            path: '/page2/',
            url: 'pages/page2.html'
        }
    ]
})

var mainView = app.views.create('.view-main');

//For Plugins
document.addEventListener("deviceready", init, false);


//Declaring vriables
var x, y, z, posX, posY;


function init() {

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
    } else {
        alert("no luck");
    }

    function handleOrientation(event) {
        //        $("#alpha").html(event.alpha);
        //        $("#beta").html(event.beta);
        //        $("#gamma").html(event.gamma);

        z = event.alpha;
        y = event.beta;
        x = event.gamma;

        posX += x;
        posY += y;

        posX = map(x, -180, 180, 0, window.innerWidth, true);
        posY = map(y, -90, 90, 0, window.innerHeight, true);

        $("#alpha").html(x);
        $("#beta").html(y);
        $("#gamma").html(z);
    }


}

function setup() {
    //3d canvas
    var cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.parent("canvas");
    
    
    posX = width / 2;
    posY = height / 2;
}

function draw() {

    background(255);
    fill(220, 55, 135);
    //Stroke();
    ellipse(posX, posY, 100);

    //    noFill();
    //    stroke(220, 55, 135);
    //    ellipse(z, y, 100);

    //    ellipse(window.innerWidth/2, window.innerHeight/2, 100);
    //    
    //    if (mouseIsPressed) {
    //    fill(0);
    //  } else {
    //    fill(255);
    //  }
    //  ellipse(mouseX, mouseY, 80, 80);
}
