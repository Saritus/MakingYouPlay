// Global variables
var mgr;
var canvas;
var scribble;
var tasks = [];
var taskCount = 0.;

// Global colors
var primary = 0;
var secondary = 51;
var tertiary = 100;

function preload() {
  reader = new TaskReader();
  reader.loadLines();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  scribble = new Scribble();
  scribble.bowing = 0.1;
  scribble.roughness = 1.5;

  mgr = new SceneManager();

  mgr.addScene(StartScreen);
  mgr.addScene(GameScreen);
  mgr.addScene(SettingsScreen);

  mgr.showNextScene();
}

function draw() {
  randomSeed(0);
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

function keyPressed() {
  mgr.keyPressed();
}

/*
window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
*/
