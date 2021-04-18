
//$('.btn').touchStart()
addEventListener('click',function btnClick(number) {
  $('.btn').css({
    'background-color': 'lightgray'
  })
  setTimeout(() => {
    $('.btn').css({
    'background-color': 'blue'
  })    
  }, 1000);
}) 




var ferarri = $('.car');
var ferarriPosition = 207;
function carMoveRight() {
  ferarriPosition += 5;

  ferarri.css({
    left: ferarriPosition,
    transform: 'rotate(5deg)'
  })
}
function carMoveLeft() {
  ferarriPosition -= 5;

  ferarri.css({
    left: ferarriPosition,
    transform: 'rotate(-5deg)'
  })
}


document.onkeydown = function (key) {
  if (key.keyCode === 39) {
   carMoveRight()
 } else if (key.keyCode === 37) {
   carMoveLeft()
 }
 setTimeout(() => (ferarri.css({
    transform: 'rotate(0deg)'
  })), 300); 
}
/*function Car(y,x) {
  this.y = y;
  this.x = x   
}

var carPosition = new Car(550, 207);
var ferarri = $('.car');

Car.prototype.moveRight = function () {
  this.x += 5;

  this.carElement = ferarri;

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}
Car.prototype.moveLeft = function () {
  this.x -= 5;

  this.carElement = ferarri;

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}
document.onkeydown = function (key) {
  if (key.keyCode === 39) {
   ferarri.moveRight()
 } else if (key.keyCode === 37) {
   ferarri.moveLeft()
 }
}*/
