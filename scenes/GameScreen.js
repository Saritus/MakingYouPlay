function GameScreen() {
  this.buttons = [];

  this.setup = function() {
    // Back-Button
    let buttonBack = new Button(150, 100, 200, 100, "Back", function() {
      mgr.showScene(StartScreen);
    });
    this.buttons.push(buttonBack);
    // Next-Button
    let buttonNext = new Button(width / 2, height - 100, width - 100, 100, "Next task", this.nextTask);
    this.buttons.push(buttonNext);

    this.task = new Task(50, 200, width - 100, height - 400);
  }

  this.enter = function() {
    this.nextTask();
  }

  this.draw = function() {

    background(tertiary);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show();
    }

    this.task.show();

  }

  this.nextTask = function() {
    let index = Math.floor((Math.random() * lines.length));
    this.task.message = lines[index];
  }.bind(this)

  this.mousePressed = function() {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].checkClick();
    }
  }

  this.keyPressed = function() {
    this.nextTask();
  }

}
