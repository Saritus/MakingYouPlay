function Animation1() {
  this.buttons = [];

  this.enter = function() {
    let button = new Button(width / 2, height / 2, 200, 200);
    this.buttons.push(button);
  }

  this.draw = function() {

    randomSeed(0);
    scribble.bowing = 0.1;
    scribble.roughness = 1.5;

    background(51);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show()
    }



  }

  this.keyPressed = function() {
    text(keyCode, textX, textY += 10);
    if (textY > height) {
      textX += 20;
      textY = 0;
    }
  }

  this.mousePressed = function() {
    // this.sceneManager.showNextScene();
  }
}
