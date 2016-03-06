/*** Initialize global variables ***/

// Canvas parameters
var canvas = null;
var ctx = null;
var framerate = 1000/60;
var c_width = 1000;
var c_height = 700;

// Physics engine contants
var jump_dist = -2; // negative means going up
var gravity_constant = 9.8; // positive means going down
var gravity_multiplier = 0.07;
var gravity = gravity_constant * gravity_multiplier;


// Entity image map. 
// Sources will be converted to image objects by the getImage function
var entityImgMap = {
  "CASIO" : "resources/osbtacles.png",
  "RIBBON" : "resources/cube.png"
};


// Obstacle parameters
var OBSTACLE_PER_FRAMES = 50; // a new obstacle is created per X frames
var MAX_NUMBER_OF_OBSTACLES = 6; // max number of obstacles on screen at a time (to save computation for collision detection)
var OBST_POSX = 0;  // not used
var OBST_POSY = 0;  // not used

var OBST_VELX = -4;  // moving to the left
var OBST_VELY = 0;  // staying still in y-axis


// Global game variables

var GAME_OVER = false;
var GAME_OVER_TIME = 2000;
// Action states of the game. if an action is being performed, then it is true.
// if all values are false, then the game is in neutral state
// Note: used by input_engine.js, physics_engine.js
var actions = {
  "jump" : false
};
