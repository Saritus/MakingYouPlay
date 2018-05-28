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

  mgr.addScene(Animation1);
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

function keyPressed() {
  // You can optionaly handle the key press at global level...
  switch (key) {
    case '1':
      mgr.showScene(Animation1);
      break;
    case '2':
      mgr.showScene(Animation2);
      break;
    case '3':
      mgr.showScene(Animation3);
      break;
  }

  // ... then dispatch via the SceneManager.
  mgr.keyPressed();
}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
