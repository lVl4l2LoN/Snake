/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Gobal variables for the canvas element in the html file
var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
var snakeSize = 10;
var width = 350;
var height = 350;
var score = 0;
var snake;
var food;

//Module pattern
var drawModule = (function(){
    //canvas elements
    var bodyOfSnake = function(x,y){
        //single square
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
        
        //border of the square
        ctx.strokeStyle = 'darkred';
        ctx.strokeRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
    }
    
    var fruit = function(x,y){
        //border of the fruit
        ctx.fillStyle='black';
        ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
        
        //single square
        ctx.fillStyle='blue';
        ctx.fillRect(x*snakeSize+1,y*snakeSize+1,snakeSize-2,snakeSize-2);
    }
    
    var scoreText = function(){
        //keeps track of how many fruits the snake had ate
        var scoreText = "Score: " + score;
        ctx.fillStyle = 'green';
        ctx.fillText(scoreText,145,height-5);
             
    }
    
    //Creating the structure of the snake
    var drawSnake = function(){
        //The snake will start with the length of 5 squares
        var length = 4;
        snake = [];
        
        //The for loop is used to put the 5 squares into the array.
        //The squres will have x and y values. X = 0 and y will be the index value
        for(var i = length; i >=0; i--){
            snake.push({x:0,y:i});
        }
    }
    
    //random appearance of food into the playing field while making sure the
    //food does not appear at the same place as the snake's body.
    var createFood = function(){
        food = {
            //generate random numbers
            x: Math.floor((Math.random()*30)+1),
            y: Math.floor((Math.random()*30)+1)
        }
        
        //Look at the position of the snake's body
        for(var i=0; i>snake.length;i++){
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;
            if(food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX){
                food.x = Math.floor((Math.random()*30)+1);
                food.y = Math.floor((Math.random()*30)+1);
            }
        }
    }
    
    //checkCollision function to see if the snake crashes into itself
    var checkCollision = function(x,y,array){
        for(var i = 0; i < array.length;i++){
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    }
    
    //the main function
    var paint = function(){
        //drawing the space that the snake will move
        ctx.fillStyle ='lightgrey';
        ctx.fillRect(0,0, width,height);
        
        //Give the space a border
        ctx.strokeStyle = 'black';
        ctx.strokeReact(0,0,width,height);
        
        //disable the start button while playing
        btn.setAttribute('disabled', true);
        
        var snakeX = snake[0].x;
        var snakeY = snake[0].y;
        
        /*
         * The snake movements. The variable 'direction' is used to control the
         * movement. To move the snake, pop out the last element of the array
         * and shift it on the top as first element.
         */    
        if(direction == 'right'){
            snakeX++;
        }
        else if (direction =='left'){
            snakeX--;
        }
        else if (direction == 'up'){
            snakeY--;
        }
        else if(direction =='down'){
            snakeY++;
        }
        
        /*
         * The snake dies if it crashes into itself or the edge of the canvas.
         * If x or y of an element(squaure) of the snake does not fit inside the
         * canvas, the game will stop.
         * If the checkCollision is true, it means the snake has crashed on
         * itself and the game will also stop.
         */
        if(snakeX==-1 || snakeX == width/snakeSize || snakeY == -1 || snakeY == h/snakeSize||checkCollision(snakeX,snakeY,snake)){
            //stop the game
            //The start button is enabled again.
            btn.removeAttribute('disabled',true);
            
            //clean up the canvas
            ctx.clearRect(0,0,width,height);
            gameloop = clearInterval(gameloop);
            return;
        }
        
        //if the snake eats food it will get bigger and the last element should not pop out of the array
        if(snakeX == food.x && snakeY == food.y){
            //create a new square instead of moving the tail
            var tail = {
                x: snakeX,
                y: snakeY
            };
            score++;
            
            //create new food
            createFood();
        }
        else{
            //pop ou the last cell
            var tail = snake.pop();
            tail.x = snakeX;
            tail.y = snakeY;
        }
        //put the tail as the first cell
        snake.unshift(tail);
        
        //for each element of the array create a square using the bodySnake function
        for(var i =0; i<snake.length;i++){
            bodySnake(snake[i].x,snake[i].y);
        }
        
        //create the food using the fruit function
        fruit(food.x,food.y);
        
        //place the score text
        scoreText();
        
    }
    
})