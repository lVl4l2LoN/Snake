/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//keyCode controls to allow the snake to move up, down, left and right
//by using the keyboard arrow keys (the values are 37, 38, 39,40). The function will allow the movement while
//making sure that the snake can't go to the opposite direction while travelling
//at a certain direction to avoid immediate collision with itself.

(function(window,document,drawModule,undefined){
    //connect the button in the html with the init function
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function(){
        drawModule.init();
        var btnUp = document.getElementById('btnUp');
    btnUp.addEventListener("click", function(){
        if(direction !='down'){
                    direction = 'up';
                    console.log('up');
                }
    });
    
    var btnDwn = document.getElementById('btnDwn');
    btnDwn.addEventListener("click", function(){
        if(direction !='up'){
                    direction = 'down';
                    console.log('down');
                }
    });
    
    var btnL = document.getElementById('btnL');
    btnL.addEventListener("click", function(){
        if(direction !='right'){
                    direction = 'left';
                }
                console.log('left');
    });
    
    var btnR = document.getElementById('btnR');
    btnR.addEventListener("click", function(){
        if(direction != 'left'){
                    direction = 'right';
                    console.log('right');
                }
    });
    });
    
    
    
    document.onkeydown = function(event){
        
        keyCode = window.event.keyCode;
        keyCode = event.keyCode;
        
        switch(keyCode){
            
            case 37:
                if(direction !='right'){
                    direction = 'left';
                }
                console.log('left');
                break;
            case 39:
                if(direction != 'left'){
                    direction = 'right';
                    console.log('right');
                }
                break;
            case 38:
                if(direction !='down'){
                    direction = 'up';
                    console.log('up');
                }
                break;
            case 40:
                if(direction !='up'){
                    direction = 'down';
                    console.log('down');
                }
                break;
        }
    }
    
    
})(window, document,drawModule);


