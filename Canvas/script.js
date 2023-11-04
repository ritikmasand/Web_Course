let canvas = document.getElementById("Canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
// this is same as 100vh
var window_width = window.innerWidth;
// this is same as 100vw
canvas.height = window_height;

// we are setting up a height of the canvas using this method .
// (canvas.height)
canvas.width = window_width;
// we are setting up the width of the canvas using this method .
canvas.style.background = "gray";
// this is used to set the background color .

// context.fillRect(110, 110, 50, 150); // black
// this fillReact is used to make a horizontal shape
// it takes in 4 parameters namely : (x direction distance , y direction distance , width , height)
// context.fillStyle = "red";
// context.fillRect(210, 210, 50, 150); // red

// context.beginPath();
// context.arc(510, 410, 75, Math.PI * 2, false);
// The arc method/function is also used for creating a shape (circle).
// arc method/function takes 5 parameters (x direction distance , y direction distance , radius , starting angle, ending angle(optional) , direction (clockwise or anticlockwise))
// context.lineWidth = 4;
// context.strokeStyle = "blue";
// context.stroke();
// This method is used to ultimately print the arc on the screen
// context.endpath();
// This is used to indicate the ending .
class Circle {
  constructor(xpos, ypos, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 12;
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
  }
}

let createCircle = function (circle) {
  circle.draw(circle);
};
let all_circle = [];
for (var i = 0; i < 10; i++) {
  let random_x = Math.random() * window_height;
  let random_y = Math.random() * window_width;
  let my_circle = new Circle(random_x, random_y, 50, "black");
  all_circle.push(my_circle);
  createCircle(all_circle[i]);
}
console.log(all_circle);

// let my_circle = new Circle(100, 200, 75, "blue");
// my_circle.draw(context);
// let my_circle2 = new Circle(200, 260, 75, "yellow");
// my_circle2.draw(context);
// let my_circle3 = new Circle(300, 200, 75, "black");
// my_circle3.draw(context);
// let my_circle4 = new Circle(400, 260, 75, "green");
// my_circle4.draw(context);
// let my_circle5 = new Circle(500, 200, 75, "red");
// my_circle5.draw(context);

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
