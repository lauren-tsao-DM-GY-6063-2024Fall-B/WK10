// TODO: add color and mouseover
//       classify it

let blinks = []; // array to put things that blink

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++){
    let mBlink = blinks[idx];
    if (millis() - mBlink.changed > mBlink.period) { //if millis - the blinking state, eg 1000 millis has gone by, change the state
      mBlink.visible = !mBlink.visible;
      mBlink.changed = millis();
    }

    let isMouseOver = dist(mouseX, mouseY, mBlink.x, mBlink.y) < (m.Blink.diam / 2); //is the mouse over

    if (mBlink.visible || isMouseOver) {
      if (isMouseOver) {
        fill(mBlink.mocolor);
      } else {
        fill(255);
      }
      ellipse(mBlink.x, mBlink.y, mBlink.diam);
    }
  }
}

function mousePressed() {
  blinks.push({
    x: mouseX,
    y: mouseY,
    visible: false,
    period: random(100, 1000),
    changed: 0,
    diam: 50,
    mocolor: color(255, 0, 0) //mouse color
  });
}
