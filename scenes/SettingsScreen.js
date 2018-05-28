function SettingsScreen() {
  this.buttons = [];

  this.setup = function() {
    let buttonBack = new Button(150, 100, 200, 100, "Back", function() {
      mgr.showScene(StartScreen);
    });
    this.buttons.push(buttonBack);
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
      this.buttons[i].checkClick()
    }
  }
}
