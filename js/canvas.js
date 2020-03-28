// Variables!
var color ="red";
var radius = 15;
var x = 0;
var y = 0;
//You will want to add more

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

document.querySelector("h1").innerHTML = "testing touchmove, add preventDefault to touchmove, change to pageX";


//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", resize);
//Add a listener for the mouse movement
canvas.addEventListener("mousemove", mouseDraw);



clr.addEventListener("input", function(e) {
  // console.log("picker");
  // console.log(this);
  // console.log(e);
  // console.log(this.value);
  color = this.value;

})
//Add a listener for the touch move
canvas.addEventListener("touchmove", touchDraw);
// canvas.addEventListener("touchstart",  function(event) {event.preventDefault()})
// canvas.addEventListener("touchmove",   function(event) {event.preventDefault()})
// canvas.addEventListener("touchend",    function(event) {event.preventDefault()})
// canvas.addEventListener("touchcancel", function(event) {event.preventDefault()})
// disable scrolling when drawing
//ref: http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
// document.body.addEventListener("touchmove", function(e) {
//   document.querySelector("h1").innerHTML = "testing touchmove";
//   if (e.target == canvas) {
//     console.log(e.target);
//     e.preventDefault();
//   }
// }, {passive: false})
//Add a listener for the keydown
document.addEventListener("keydown", function(e) {
  // console.log("in key");
  // console.log(e.key);
  _key = e.key;
  // change color
  if (_key == "r"){
    color = "#FF0000";
  }
  else if (_key == "g") {
    color = "#00FF00";
  }
  else if (_key == "b") {
    color = "#0000FF";
  }
  else if (_key == "y") {
    color = "#FFFF00";
  }
  // clear
  if (_key == " ") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  // up and down
  if (_key == "ArrowUp") {
    canvas.removeEventListener("mousemove", mouseDraw)
  }
  if (_key == "ArrowDown") {
    canvas.addEventListener("mousemove", mouseDraw);
  }
  // draw();
})

// Functions!
function resize() {
  console.log("resize");
  console.log(screen.width);
  console.log(window.innerWidth);
  console.log(canvas.width);
  canvas.width = 0.75 * window.innerWidth;
  canvas.height = 0.75 * window.innerHeight;
  // console.log(canvas.width);
}

function touchDraw(e) {
  // console.log("in touchDraw");
  // console.log("border:");
  x = e.touches[0].pageX - 5; 
  y = e.touches[0].pageY - 5;
  // e.preventDefault();
  e.preventDefault();
  document.body.style.touchAction = "none";
  draw();
}

function mouseDraw(e) {
  x = e.offsetX; 
  //offset - Returns the horizontal coordinate of the mouse pointer 
  //relative to the position of the edge of the target element
  y = e.offsetY;
  draw();
}

function draw() {
  // console.log("start draw()")
  ctx.fillStyle = color;
  ctx.beginPath();
  // console.log(x, y); //debugging for touchmove
  ctx.arc(x, y, 15, 0, 2*Math.PI);

  ctx.fill();

}
