var carPosition = 5;
//$('.btn').touchStart()
document.getElementById('btn1').addEventListener('click',function btnClickLeft(number) {
  $('.btn:nth-child(1)').css({
    'background-color': 'lightgray'
  });
  carMoveLeft();
  setTimeout(() => {
    $('.btn:nth-child(1)').css({
    'background-color': 'rgba(211, 211, 211, 0.600)'
  });    
  }, 200);
})
document.getElementById('btn2').addEventListener('click',function btnClickRight(number) {
  $('.btn:nth-child(2)').css({
    'background-color': 'lightgray'
  });
  carMoveRight();
  setTimeout(() => {
    $('.btn:nth-child(2)').css({
    'background-color': 'rgba(211, 211, 211, 0.600)'
  });    
  }, 200);
})
 
document.getElementById('speed').addEventListener('click',function(){
  if (!$(this).data('status')) {
    $(this).html('Back speed');
    $(this).data('status', true);
    $('.road').css({
      'animation-duration': '20s' 
    })
    carPosition = 10;
    carMoveTop()
  }
  else {
    $(this).html('More speed');
    $(this).data('status', false);
    $('.road').css({
      'animation-duration': '40s' 
    })
    carPosition = 5;
    carMoveDown()
  }
})






var ferarri = $('.car');
var ferarriPosition = 207;
function carMoveRight() {
  if (ferarriPosition < 410 ) {
    ferarriPosition += carPosition;

  ferarri.css({
    left: ferarriPosition,
  })
  }
}
function carMoveLeft() {
  if (ferarriPosition > 30) {
  ferarriPosition -= carPosition;

  ferarri.css({
    left: ferarriPosition,
  })
}
}
function carMoveTop() {
  ferarri.css({
    top: '500px',
  })
}
function carMoveDown() {
  ferarri.css({
    top: '550px',
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
