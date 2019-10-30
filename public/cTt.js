var colorRed = document.getElementById('red');
var colorPurple = document.getElementById('purple');
var colorBlack = document.getElementById('black');
var colorBlue = document.getElementById('blue');
var colorPink = document.getElementById('pink');
var image = document.getElementById('image');

var time = document.getElementById('button1');
var heart = document.getElementById('button2');

var timeText = document.getElementById('timetext');
var heart1 = document.getElementById('heart1');


//color change section
colorPurple.addEventListener('click', function(){

    image.src="https://i.imgur.com/xSIK4M8.png" ; alt="Foo eating a sandwich purple.";

   });
colorRed.addEventListener('click', function(){
    image.src="https://i.imgur.com/PTgQlim.png"; alt="Foo eating a sandwich red.";
});
colorBlack.addEventListener('click', function(){
    image.src="https://i.imgur.com/iOeUBV7.png"; alt="Foo eating a sandwich black .";
});
colorBlue.addEventListener('click', function(){
    image.src="https://i.imgur.com/Mplj1YR.png"; alt="Foo eating a sandwich blue .";
});
colorPink.addEventListener('click', function(){
    image.src="https://i.imgur.com/Zygu7I3.png"; alt="Foo eating a sandwich pink .";
});

//inside watch change events
time.addEventListener('click', function(){
    heart1.style.display = "none";
    timeText.style.display = "block";
});


//time increment

setInterval(function(){
    window.timetextC.innerHTML =new Date().toLocaleTimeString();
}, 1000);