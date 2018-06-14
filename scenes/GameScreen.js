function GameScreen() {
  this.buttons = [];
  this.backColor = {
    "h": 0,
    "s": 40,
    "l": 80
  };

  this.setup = function() {
    // Back-Button
    let buttonBack = new Button(150, 100, 200, 100, "Back", function() {
      mgr.showScene(StartScreen);
    });
    this.buttons.push(buttonBack);
    // Next-Button
    let buttonNext = new Button(width / 2, height - 100, width - 100, 100, "Press Enter", this.nextTask);
    this.buttons.push(buttonNext);

    this.task = new Task(50, 200, width - 100, height - 400);
  }

  this.enter = function() {
    this.nextTask();
  }

  this.draw = function() {

    colorMode(HSL, 100)
    background(this.backColor.h, this.backColor.s, this.backColor.l);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show();
    }

    this.task.show();

  }

  this.nextTask = function() {

    let isValidTask = function(task) {
      // No new task
      if (!task) return false;
      // No old task
      if (!this.task) return true;
      // Only one task available
      if (tasks.length < 2) return true;
      // New task same as old one
      if (this.task.message == task[0]) return false;
      // Default case
      return true;
    }.bind(this)

    let selectNewTask = function() {

      if (tasks.length == 0) {
        return ["No tasks left", 1, -1]
      }

      let selectedIndex = -1;
      let targetValue = Math.random() * taskCount;
      let currentValue = 0;

      for (var index = 0; index < tasks.length; index++) {
        currentValue += tasks[index][1];
        if (currentValue >= targetValue) {
          selectedIndex = index;
          break;
        }
      }
      if (selectedIndex == -1) {
        selectedIndex = tasks.length - 1;
      }
      return tasks[selectedIndex];
    }

    let selectedTask = undefined;

    while (!isValidTask(selectedTask)) {
      selectedTask = selectNewTask();
    }

    if (selectedTask[2] > -1) {
      selectedTask[2] -= 1;
    }
    if (selectedTask[2] == 0) {
      let taskIndex = tasks.indexOf(selectedTask);
      tasks.splice(taskIndex, 1);
      taskCount -= selectedTask[1]
    }
    this.task.message = selectedTask[0];
    this.backColor.h = (this.backColor.h + 26) % 100;
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
