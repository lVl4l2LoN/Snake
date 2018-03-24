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
    
    
    
})