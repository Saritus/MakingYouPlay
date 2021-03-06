function TaskReader() {

  this.read = function(file) {
    return new Promise(function(resolve, reject) {
      // nur TXT-Dateien
      if (!file.type.match('text/plain')) {
        reject("Files of type '" + file.type + "' are not allowed");
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        // Reset tasks
        tasks = [];
        taskCount = 0;
        // Split text based on lines
        var lines = reader.result.split(/[\r\n]+/);
        this.evaluateLines(lines);
        this.storeLines(lines);
        // Resolve promise
        resolve();
      }.bind(this)
      reader.readAsText(file, 'windows-1252');
    }.bind(this));
  }

  this.evaluateLines = function(lines) {
    // Iterate through all lines
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
        tasks.push([line, 1, -1]);
        taskCount += 1;
      }
    }
  }

  this.storeLines = function(lines) {
    let json = JSON.stringify(lines);
    localStorage.setItem("mypLines", json);
  }

  this.loadLines = function() {
    json = localStorage.getItem("mypLines");
    if (json) {
      let lines = JSON.parse(json)
      this.evaluateLines(lines);
    }
  }

}
