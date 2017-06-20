  var left_paddle = document.getElementById("left_paddle");
  var right_paddle = document.getElementById("right_paddle");
  var ball = document.getElementById("ball");

  var left_score = 0;
  var right_score = 0;
  var rally = 0;



  var left_paddle_x = 20;
  var left_paddle_y = 100;

  var right_paddle_x = 760;
  var right_paddle_y = 100;
  var right_paddle_vy = 100; // attempting to create a right paddle y velocity


  var ball_x = (400 - 10);
  var ball_y = (300 - 10);

  var ball_vx = 5;
  var ball_vy = 6;

  function draw() {

    left_paddle.style.left = left_paddle_x + "px";
    left_paddle.style.top = left_paddle_y + "px";
    
    right_paddle.style.left = right_paddle_x + "px";
    right_paddle.style.top = right_paddle_y + "px";

    ball.style.left = ball_x + "px";
    ball.style.top = ball_y + "px";

  }

  function updateBall() {

    if (ball_y >= (600 - 20) // the ball is touching the bottom
      && ball_vy > 0
      ) {
      ball_vy *= -1; // bounce in the y direction
    }

    if (ball_y <= 0 // the ball is touching the top
      && ball_vy < 0
      ) {
      ball_vy *= -1; // bounce in the y direction
    }

    ball_x += ball_vx;
    ball_y += ball_vy;

  }

  function updateScore() {

    if (ball_x <= 0 // the ball is touching the left side
      && ball_vx < 0
      ) {
      left_score++; // 
      lastScore = "p2";
      // console.log("left_score");
      resetBall();
    }

    if (ball_x + 20 >= 800 // the ball is touching the right side
      && ball_vx > 0
      ) {
      right_score++;
      lastScore = "p1";
      // console.log("right_score");
      resetBall();
    }
    document.getElementById("right_score_box").innerHTML = left_score;
    document.getElementById("left_score_box").innerHTML = right_score;
  }

  function resetBall() {  // after a score, serve from the other players paddle

    rally =0;

    ball_vx *= -1;

    if (lastScore === "p1") {
      ball_x = 740;
      ball_y = right_paddle_y + 50;
    } else if (lastScore === "p2") {
      ball_x = 40;
      ball_y = left_paddle_y + 50;

    } else {

      ball_x = 390;
      ball_y = 290;
    }
  }

  function checkCollision() {
    if (ball_x < left_paddle_x + 20 // left paddle collision
      && ball_y < left_paddle_y + 100
      && ball_x + 20 > left_paddle_x
      && ball_y + 20 > left_paddle_y
      && ball_vx < 0) {
      ball_vx *= -1;
      rally++;
      console.log(ball_vx);
    }
    
    // if (ball_x < left_paddle_x + 20 // TODO: left paddle top collision
    //   && ball_y < left_paddle_y + 100
    //   && ball_x + 20 > left_paddle_x
    //   && ball_y + 20 > left_paddle_y
    //   && ball_vx < 0) {
    //   ball_vx *= -1;
    //   rally++;
    //   console.log(ball_vx);
    // }

    // if (ball_x < left_paddle_x + 20 // TODO: left paddle bottom collision
    //   && ball_y < left_paddle_y + 100
    //   && ball_x + 20 > left_paddle_x
    //   && ball_y + 20 > left_paddle_y
    //   && ball_vx < 0) {
    //   ball_vx *= -1;
    // }



    if (ball_x + 20 > right_paddle_x // right paddle collision
      && ball_y < right_paddle_y + 100
      && ball_x < right_paddle_x + 20
      && ball_y + 20 > right_paddle_y
      && ball_vx > 0) {
      ball_vx *= -1;
      rally++;
    }
    
    // if (ball_x < right_paddle_x + 20 // TODO: right paddle top collision
    //   && ball_y < right_paddle_y + 100
    //   && ball_x + 20 > right_paddle_x
    //   && ball_y + 20 > right_paddle_y
    //   && ball_vx < 0) {
    //   ball_vx *= -1;
    // }

    // if (ball_x < right_paddle_x + 20 // TODO: right paddle bottom collision
    //   && ball_y < right_paddle_y + 100
    //   && ball_x + 20 > right_paddle_x
    //   && ball_y + 20 > right_paddle_y
    //   && ball_vx < 0) {
    //   ball_vx *= -1;
    // }
    
    document.getElementById("rally").innerHTML = rally;
  }


  function update() {
    updateBall();
    checkCollision();
    computerPlayer();
    updateScore();
  }

  function loop() {
    update();
    draw();
  }

  function handleMouseMove(event) {

    left_paddle_y = event.pageY - event.target.offsetTop - 50;
    // left_paddle_x = event.pageX - event.target.offsetTop - 50;  // do some weird crazy shit!


  }

  function getRandomOffset(min, max) {
    return Math.random() * (max - min) + min;
}

  function computerPlayer() {

    return right_paddle_y = (ball_y - 50)
     // + getRandomOffset(0, 300);

  }

  setInterval(loop, (1000 / 60));

  document.getElementById("game").onmousemove = handleMouseMove;







  /*
    TODO:

    1. Get the computer player working ✅
    2. Get the ball to bounce off of the computer player's paddle ✅
    3. Display the score somehow? ✅
    4. If the ball goes off the side, increase the score for the other player ✅
    5. When the ball goes off the side, reset the game so the ball is in the middle ✅

    Optional:
    Whoever lost the last point serves ✅
    Have the ball delay start when it is resetx
    Interesting graphics
    Ball moves faster as the game goes on

    Difficult and optional:

    Adjust the angle of the ball based on where it hits the paddle
    (or based on the speed of the paddle)

    Have the ability to have many balls in play at one time

    Make the computer not a perfect pong player

    Max out the speed at which the player can move their paddle

    Add keyboard controls for player 2 (multiplayer mode!)

    */
