let mic;
let cols = 16; // Number of columns in the "LED" grid
let rows = 8;  // Number of rows in the "LED" grid
let cellSize;

function setup(mic = new p5.AudioIn();
mic.start();
) {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn(); // Get microphone input
  mic.start(); // Start capturing sound

  cellSize = width / cols; // Calculate cell size based on screen width
}

function draw() {
  background(0); // Black background
  let volume = mic.getLevel(); // Get current microphone volume level

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      let brightness = map(volume, 0, 1, 0, 255); // Map volume to brightness

      fill(random(brightness), random(brightness / 2), brightness); // Color based on brightness
      rect(x, y, cellSize, cellSize); // Draw a rectangle to simulate "LED"
    }
  }
}
function draw() {
    background(0);
    let volume = mic.getLevel();
    textSize(32);
    fill(255);
    text("Mic Level: " + volume, 50, height / 2);
  }
  
  let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);
  let vol = mic.getLevel();
  textSize(32);
  text("Volume: " + vol, 50, 200);
}
