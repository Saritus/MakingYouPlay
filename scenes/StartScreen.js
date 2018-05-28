function StartScreen() {
  this.buttons = [];

  this.enter = function() {
    let buttonGame = new Button(width / 2, height / 2 - 150, 250, 100, "Play", GameScreen);
    this.buttons.push(buttonGame);
    let buttonSettings = new Button(width / 2, height / 2, 250, 100, "Settings", Animation3);
    this.buttons.push(buttonSettings);
    let buttonCredits = new Button(width / 2, height / 2 + 150, 250, 100, "Credits", Animation3);
    this.buttons.push(buttonCredits);
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

  this.mousePressed = function() {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].checkClick()
    }
  }
}
