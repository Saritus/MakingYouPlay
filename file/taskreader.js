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
        var lines = reader.result.split('\n');

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

        // Resolve promise
        resolve();

      }

      reader.readAsText(file, 'windows-1252');

    });
  }
}
