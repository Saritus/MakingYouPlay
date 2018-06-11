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

    // Auslesen der gespeicherten Dateien durch Schleife
    for (var i = 0, f; f = dateien[i]; i++) {

      // nur TXT-Dateien
      if (!f.type.match('text/plain')) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = function(e) {
        tasks = [];
        taskCount = 0;
        var lines = reader.result.split('\n');
        for (var index = 0; index < lines.length; index++) {
          let line = lines[index];
          if (line.length < 2) {
            // Ignore this line
          } else if (line.includes(';')) {
            let parts = line.split(';');
            let chance = parseFloat(parts[1].replace(',', '.'));
            let occurrences = parts.length > 2 ? parseInt(parts[2]) : -1;
            tasks.push([parts[0], chance, occurrences]);
            taskCount += chance;
          } else {
            tasks.push([line, 1]);
            taskCount += 1;
          }
        }
        this.backToStart();
      }.bind(this)

      reader.readAsText(f);
    }

  }.bind(this)

}
