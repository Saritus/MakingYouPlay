function StartScreen() {
  this.buttons = [];

  this.setup = function() {
    let buttonGame = new Button(width / 2, height / 2 - 150, 250, 100, "Play", function() {
      mgr.showScene(GameScreen);
    });
    this.buttons.push(buttonGame);
    let buttonSettings = new Button(width / 2, height / 2, 250, 100, "Settings", function() {
      mgr.showScene(SettingsScreen);
    });
    this.buttons.push(buttonSettings);
    let buttonCredits = new Button(width / 2, height / 2 + 150, 250, 100, "Credits", function() {
      mgr.showScene(SettingsScreen);
    });
    this.buttons.push(buttonCredits);
  }

  this.draw = function() {

    randomSeed(0);
    scribble.bowing = 0.1;
    scribble.roughness = 1.5;

    background(100);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show()
    }
  }

  this.mousePressed = function() {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].checkClick();
    }
  }
}
