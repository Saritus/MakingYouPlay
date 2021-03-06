function SettingsScreen() {
  this.buttons = [];

  this.setup = function() {
    // Back-Button
    let buttonBack = new Button(150, 100, 200, 100, "Back", this.backToStart);
    this.buttons.push(buttonBack);

    let buttonUpload = new Button(width / 2, height / 2 + 75, windowWidth - 100, windowHeight - 250, "Click or drop for file upload", function() {});
    this.buttons.push(buttonUpload);
  }

  this.enter = function() {
    // File-Input
    this.input = document.createElement('input');
    this.input.type = "file";
    this.input.name = "files[]";
    this.input.addEventListener('change', this.fileChange, false);

    this.input.style.position = "absolute";
    this.input.style.top = "200px";
    this.input.style.left = "50px";
    this.input.style.width = windowWidth - 100;
    this.input.style.height = windowHeight - 250;
    this.input.style.opacity = 0;

    document.body.appendChild(this.input);
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

  this.backToStart = function() {
    this.input.remove();
    mgr.showScene(StartScreen);
  }.bind(this)

  this.fileChange = function(evt) {
    // FileList object
    var dateien = evt.target.files;

    // Create task reader object
    var reader = new TaskReader();

    // Auslesen der gespeicherten Dateien durch Schleife
    for (var i = 0, f; f = dateien[i]; i++) {

      reader.read(f).then(
        resp => this.backToStart(),
        err => console.error(err)
      );

    }

  }.bind(this)

}
