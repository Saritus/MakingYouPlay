function GameScreen() {
  this.buttons = [];

  this.setup = function() {
    let buttonBack = new Button(150, 100, 200, 100, "Back", function() {
      mgr.showScene(StartScreen);
    });
    this.buttons.push(buttonBack);
    let buttonNext = new Button(width / 2, height - 100, width - 100, 100, "Next task", function() {
      mgr.showScene(SettingsScreen);
    });
    this.buttons.push(buttonNext);
  }

  this.draw = function() {

    randomSeed(0);
    scribble.bowing = 0.1;
    scribble.roughness = 1.5;

    background(100);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show()
    }

    text("L\u00f6se Aufgabe Nr. 1", 50, height / 2);
  }

  this.mousePressed = function() {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].checkClick()
    }
  }
}
