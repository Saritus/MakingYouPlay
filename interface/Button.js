function Button(x, y, w, h, message, func) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.message = message;
  this.func = func;

  this.show = function() {
    this.showRect(primary);
    this.showFill(secondary);
    this.showText(primary);
  }

  this.showRect = function(color) {
    stroke(color);
    scribble.scribbleRect(this.x, this.y, this.w, this.h);
  }

  this.showFill = function(color) {
    stroke(color);
    // calculate the x and y coordinates for the border points of the hachure
    var xleft = this.x - this.w / 2 + 5;
    var xright = this.x + this.w / 2 - 5;
    var ytop = this.y - this.h / 2 + 5;
    var ybottom = this.y + this.h / 2 - 5;

    if (mouseX > xleft && mouseX < xright && mouseY > ytop && mouseY < ybottom) {

      // the x coordinates of the border points of the hachure
      var xCoords = [xleft, xright, xright, xleft];
      // the y coordinates of the border points of the hachure
      var yCoords = [ytop, ytop, ybottom, ybottom];
      // the gap between two hachure lines
      var gap = 7;
      // the angle of the hachure in degrees
      var angle = 315;
      // fill the rect with a hachure
      scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    }
  }

  this.showText = function(color) {
    stroke(color);
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(primary);
    text(this.message, this.x, this.y);
  }

  this.checkClick = function() {
    var xleft = this.x - this.w / 2 + 5;
    var xright = this.x + this.w / 2 - 5;
    var ytop = this.y - this.h / 2 + 5;
    var ybottom = this.y + this.h / 2 - 5;

    if (mouseX > xleft && mouseX < xright && mouseY > ytop && mouseY < ybottom) {
      func();
    }
  }

}
