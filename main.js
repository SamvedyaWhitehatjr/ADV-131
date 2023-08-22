img = "";

function preload() {
    img = loadImage('bedroom.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 120, 170);
    noFill();
    stroke("#FF0000");
    rect(100, 150, 500, 300);
}