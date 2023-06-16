function preload() {

}

function setup() {
    video= createCapture(VIDEO);
    video.size(500, 350)

    canvas= createCanvas(500, 350);
    canvas.position(510, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw() {
   background('#0000FF');
   document.getElementById('square_side').innerHTML = "Width and Height of the square are: " + difference
   fill('#FFFFFF');
   stroke('#000000')
   square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('Model is working.')
}
 
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function gotPose(result) {
    if(result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = " + noseX + " " + "noseY = " +noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        console.log("rightWristX = " + rightWristX + " " + "leftWristX = " + leftWristX);

        difference = floor(leftWristX - rightWristX)
    }
}

