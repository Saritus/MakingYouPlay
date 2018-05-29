function SettingsScreen() {
  this.buttons = [];

  this.setup = function() {
    // Back-Button
    let buttonBack = new Button(150, 100, 200, 100, "Back", this.backToStart);
    this.buttons.push(buttonBack);
  }

  this.enter = function() {
    // File-Input
    this.input = document.createElement('input');
    this.input.type = "file";
    this.input.name = "files[]";
    this.input.addEventListener('change', this.fileChange, false);
    document.body.appendChild(this.input);
  }

  this.draw = function() {

    background(tertiary);

    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show()
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

    // Auslesen der gespeicherten Dateien durch Schleife
    for (var i = 0, f; f = dateien[i]; i++) {

      // nur TXT-Dateien
      if (!f.type.match('text/plain')) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = function(e) {
        lines = reader.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
          console.log(lines[line]);
        }
        this.backToStart();
      }.bind(this)

      reader.readAsText(f);
    }

  }.bind(this)

}
