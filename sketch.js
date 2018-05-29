// Global variables
var mgr;
var canvas;
var scribble;
var lines = ["Keine Aufgaben eingetragen"];

// Global colors
var primary = 0;
var secondary = 51;
var tertiary = 100;

function preload() {
  // font = loadFont('font/HandScribbleSketchTimes.otf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 21);

  scribble = new Scribble();

  mgr = new SceneManager();

  mgr.addScene(StartScreen);
  mgr.addScene(GameScreen);
  mgr.addScene(SettingsScreen);

  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

/*
window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
*/
