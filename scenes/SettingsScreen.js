function SettingsScreen() {
  this.oAnim1 = null;
}

SettingsScreen.prototype.setup = function() {
  // access a different scene using the SceneManager
  oAnim1 = this.sceneManager.findScene(GameScreen);
}

SettingsScreen.prototype.draw = function() {
  background("lightblue");

  var r = sin(frameCount * 0.01);

  fill("white");
  ellipse(width / 2, height / 2, map(r, 0, 1, 100, 200));

  if (oAnim1 != null) {
    fill("black");
    textAlign(LEFT);
    text("Scene1 y: " + oAnim1.oScene.y, 10, height - 20);
  }
}

SettingsScreen.prototype.mousePressed = function() {
  // this.sceneManager.showNextScene();
}
