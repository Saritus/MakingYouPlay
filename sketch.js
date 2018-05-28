var mgr;
var canvas;
var scribble;

function preload() {
  // font = loadFont('font/HandScribbleSketchTimes.otf');
}

function setup() {
  canvas = createCanvas(windowWidth - 20, windowHeight - 20);

  scribble = new Scribble();

  mgr = new SceneManager();

  mgr.addScene(StartScreen);
  mgr.addScene(Animation2);
  mgr.addScene(Animation3);

  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
