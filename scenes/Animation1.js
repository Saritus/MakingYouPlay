function Animation1() {
  var textX;
  var textY;

  this.enter = function() {
    background(51);
    let w = 300;
    let h = 200;
    stroke(255, 0, 0);
    scribble.scribbleRect(width / 2, height / 2, w, h);
  }

  this.keyPressed = function() {
    text(keyCode, textX, textY += 10);
    if (textY > height) {
      textX += 20;
      textY = 0;
    }
  }

  this.mousePressed = function() {
    this.sceneManager.showNextScene();
  }
}
