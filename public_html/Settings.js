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
        ctx.fillRect(x*snakeSize+1,y*snakeSize+1,snakeSize-2,snakeSize-2)
    }
    
    var scoreText = function(){
        //keeps track of how many fruits the snake had ate
        var scoreText = "Score: " + score;
        ctx.fillStyle = 'green';
        ctx.fillText(scoreText,145,h-5);
             
    }
    
    
})