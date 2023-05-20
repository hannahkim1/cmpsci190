var timer1 = null; 
var timer2 = null; // make another timer to differentiate
var el = null;
var score = 0; // number of 'hits'
var shots = 0; // total 'shots'


function moveIt() {

    // animate the image
    if(parseInt(el.style.left) > (screen.width - 50)) {
        moveLeft();
    }
    else {
        el.style.left = parseInt(el.style.left) + 6 + 'px';
    
        el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left) / 50)) + 'px';
        
        // set the timer
        timer1 = setTimeout(moveIt, 30);
    }
}

function moveLeft() {
    
    // animate the image
    if(parseInt(el.style.left) < 0) {
        moveIt(); // once it reaches 0, it should move back the other way
    }
    else {
        el.style.left = parseInt(el.style.left) - 6 + 'px';
        // - 6 makes it move the other way
    
        el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left) / 50)) + 'px';
       
        // set the timer
        timer2 = setTimeout(moveLeft, 30);
    }
}




function scoreUp() {
    // increment the player's score
    score++;
}

function scoreboard() {
    // display the scoreboard
    document.getElementById("score").innerHTML = "Shots: " + shots + " Score: " + score;
}

window.onload = function() {
    el = document.getElementById("img1");

    // onClick handler calls scoreUp()
    // when the image is clicked
    el.onclick = scoreUp;

    //update total number of shots
    // for every click within play field
    document.getElementById("range").onclick = function() {
        shots++;

        // update scoreboard
        scoreboard();
    }
    
    // initialize game 
    
    scoreboard();
    el.style.left = '50px';
    el.style.top = '50px';
    moveIt();
}