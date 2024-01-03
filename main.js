function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 180);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
fill("red");
stroke("blue");
strokeWeight(2);
circle(100, 50, 70);
circle(100, 400, 70);
circle(550, 50, 70);
circle(550, 400, 70);
fill("green");
rect(135, 40, 380, 20);
rect(135, 390, 380, 20);
rect(90, 80, 20, 285);
rect(540, 80, 20, 285);
stroke("green");



image(video, 150, 100, 350, 250);

}

function takesnapshot(){
    save('image');
}