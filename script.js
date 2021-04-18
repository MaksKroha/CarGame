
//$('.btn').touchStart()
document.getElementById('btn').addEventListener('touchstart',function btnClick(number) {
  $('.btn:nth-child(1)').css({
    'background-color': 'lightgray'
  });
  carMoveLeft();
  setTimeout(() => {
    $('.btn:nth-child(1)').css({
    'background-color': 'blue'
  })    
  }, 100);
}) 




var ferarri = $('.car');
var ferarriPosition = 207;
function carMoveRight() {
  ferarriPosition += 5;

  ferarri.css({
    left: ferarriPosition,
  })
}
function carMoveLeft() {
  ferarriPosition -= 5;

  ferarri.css({
    left: ferarriPosition,
  })
}


document.onkeydown = function (key) {
  if (key.keyCode === 39) {
   carMoveRight()
 } else if (key.keyCode === 37) {
   carMoveLeft()
 }
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
