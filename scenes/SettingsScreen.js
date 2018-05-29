function SettingsScreen() {
  this.buttons = [];

  this.setup = function() {
    let buttonBack = new Button(150, 100, 200, 100, "Back", this.backToStart);
    this.buttons.push(buttonBack);
  }

  this.enter = function() {
    // <input type="file" id="files" name="files[]" multiple />
    this.input = document.createElement('input');
    this.input.type = "file";
    this.input.name = "files[]";
    document.body.appendChild(this.input);

    // <output id="list"></output>
    this.output = document.createElement("output");
    document.body.appendChild(this.output);

    // Auf neue Auswahl reagieren und gegebenenfalls Funktion neu ausführen.
    this.input.addEventListener('change', this.fileChange, false);
  }

  this.draw = function() {

    randomSeed(0);
    scribble.bowing = 0.1;
    scribble.roughness = 1.5;

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
    this.output.remove();
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
