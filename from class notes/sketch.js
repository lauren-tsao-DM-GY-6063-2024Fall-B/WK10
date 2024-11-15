let mMic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mMic = new p5.AudioIn();
}

function draw() {
  background(220, 10);
  let vol = mMic.getLevel();
  let diam = map(vol, 0, 1, 0, height);
  ellipse(width / 2, height / 2, diam);
}

function mousePressed() {
  if (!mMic.enabled) {
    mMic.start();
  }
}
