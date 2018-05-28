function Button(x, y, w, h, message, target) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.message = message;
  this.target = target

  this.show = function() {
    this.showRect(0);
    this.showFill(30);
    this.showText(0);
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
    fill(0)
    text(this.message, this.x - this.w / 2 + 10, y);
  }

  this.checkClick = function() {
    var xleft = this.x - this.w / 2 + 5;
    var xright = this.x + this.w / 2 - 5;
    var ytop = this.y - this.h / 2 + 5;
    var ybottom = this.y + this.h / 2 - 5;

    if (mouseX > xleft && mouseX < xright && mouseY > ytop && mouseY < ybottom) {
      mgr.showScene(target);
    }
  }

}
