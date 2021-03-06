/*** Core functionality to setup game ***/

// Setup game
var setup = function(startGameFunction, gameOverFunction) {

  // setup canvas
  canvas = document.getElementById("my_canvas");
  ctx = canvas.getContext('2d');
  canvas.width = c_width;
  canvas.height = c_height;

  // update canvas size on any window size change
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // setup input event listeners
  setInputEventListeners(startGameFunction, gameOverFunction);
};

var loadStartScreen = function() {
  clearCanvas();
  // display static ribbon on start
  drawText(start_text1, 260, 70, null)
  drawSmallText(start_text2, 260, 120, null)
  animateSprite(ribbon);
}

var gameOverFunction = function(){

  // stop game over spam
  if (drawGameOverRepeatInterval) {
    clearInterval(drawGameOverRepeatInterval);
  }

  loadStartScreen();
}

// Resize canvas based on viewport size
var resizeCanvas = function() {
  var canvasRatio = canvas.height / canvas.width;
  var width;
  var height;
  var x_padding = 20;
  var y_padding = 50;
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  // if window width:height ratio is less than the games ratio, put it in portrait mode
  // for example, canvas is 1000:700=1.4
  // if window size is 1200:500=2.4, switch to landscape
  // if window size is 800:500=1.33, switch to potrait, because 1.33 < 1.4
  var canvasRatioPadded = (canvas.width + x_padding) / (canvas.height + y_padding)
  var windowRatio = w / h

  if (windowRatio < canvasRatioPadded) {
    // potrait
    width =  Math.min(canvas.width - x_padding, w - x_padding);
    height = width * canvasRatio;
  } else {
    // landscape
    height = Math.min(canvas.height - y_padding, h - y_padding);
    width = height / canvasRatio;
  }
  canvas.style.width =  width + "px";
  canvas.style.height = height + "px";
};


// Begin recursive animation loop
var beginAnimation = function() {
  this.requestAnimationFrame(function() {
    animateWorld(0);
  } );
}


// Run the game
var runGame = function() {
  // do everything after images are loaded
  loadAllImages.then(function(result){
    setup(beginAnimation, gameOverFunction);

    // create ribbon
    loadRibbon();
    loadStartScreen();

  });
}


// Let it rip!
runGame();
