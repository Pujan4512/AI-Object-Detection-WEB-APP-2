Status = "";

function setup(){
    canvas = createCanvas(420, 380);
    canvas.position(420,250);

    video = createCapture(VIDEO);
    video.size(420, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value_of_input = document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
}

function draw(){
    image(video, 0, 0, 420, 380);
}