function StartScreen() {
  this.buttons = [];

  this.setup = function() {
    // Play-Button
    let buttonGame = new Button(width / 2, height / 2 - 150, 250, 100, "Play", function() {
      mgr.showScene(GameScreen);
    });
    this.buttons.push(buttonGame);
    // Settings-Button
    let buttonSettings = new Button(width / 2, height / 2, 250, 100, "Settings", function() {
      mgr.showScene(SettingsScreen);
    });
    this.buttons.push(buttonSettings);
    // Credits-Button
    let buttonCredits = new Button(width / 2, height / 2 + 150, 250, 100, "Credits", function() {
      window.open("https://www.youtube.com/watch?v=DLzxrzFCyOs", '_blank');
    });
    this.buttons.push(buttonCredits);
  }

  this.draw = function() {

    colorMode(RGB, 255);
    background(tertiary);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show();
    }
  }

  this.mousePressed = function() {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].checkClick();
    }
  }
}
