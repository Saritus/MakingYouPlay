function Task(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.show = function() {
    textAlign("center");
    text(this.message, this.x, this.y, this.w, this.h);
  }

}
