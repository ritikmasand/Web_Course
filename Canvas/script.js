let canvas = document.getElementById("Canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "yellow";

// context.fillRect(110, 110, 50, 150);
// context.fillStyle = "red";
// context.fillRect(210, 210, 50, 150);

// context.beginPath();
// context.arc(510, 410, 75, Math.PI * 2, false);
// context.lineWidth = 4;
// context.strokeStyle = "blue";
// context.stroke();
// context.endpath();
class Circle {
  constructor(xpos, ypos, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
  }
  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 6;
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.stroke();

    context.closePath();
  }
}

let my_circle = new Circle(100, 200, 75, "red");
my_circle.draw(context);
let my_circle2 = new Circle(200, 200, 75, "green");
my_circle2.draw(context);

// class Circle {
//   constructor(xpos, ypos, radius, color) {
//     this.xpos = xpos;
//     this.ypos = ypos;
//     this.radius = radius;
//     this.color = color;
//   }

//   draw(context) {
//     context.beginPath();
//     context.lineWidth = 6;
//     context.arc(this.xpos, this.ypos, this.radius, ); // You were missing the start and end angles for the arc
//     context.strokeStyle = this.color; // Set the strokeStyle to the circle's color
//     context.stroke();
//     context.closePath(); // It should be closePath() instead of endpath()
//   }
// }

// Assuming you have a canvas element in your HTML with id "myCanvas"
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// let my_circle = new Circle(100, 200, 75, "red");
// my_circle.draw(context);

// class(1,2,56,red)
