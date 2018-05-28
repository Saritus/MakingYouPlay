function Animation1() {
  var textX;
  var textY;

  this.enter = function() {
    textX = 10;
    textY = 0;

    background("teal");
    textAlign(CENTER);

    fill("black");
    text("Press keys 1, 2, 3 to jump to a particular animation\n" +
      "... or mouse to advance animation.\n\n" +
      "Press any other key to display it.", width / 2, height / 2);
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
