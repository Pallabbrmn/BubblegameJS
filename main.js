function makeBubble(){

    let bubble = "";

    for(let i = 1 ; i<= 180; i++){
    bubble += `<div id="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }       

    document.querySelector('#pbtm').innerHTML = bubble;

}

makeBubble();

let time = 60;
function timer(){

    let int = setInterval(function(){
        if(time > 0){
            time--;document.querySelector('#time').textContent = time; 
        }else{
            clearInterval(int);
            document.querySelector('#pbtm').innerHTML = `<div class="gameover"><h1>Game Over!</h1><h2>Score: ${score}</h2></div>`
        }


    }, 1000);

}
timer();

score = 0;
function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;

}

let hitVal;
function newHit(){

    hitVal = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitVal;

}

newHit();

function bubbleClick(){
    document.querySelector('#pbtm').addEventListener('click', function(event){
        let clicked = Number(event.target.textContent);
        if(clicked === hitVal){
            increaseScore();
            newHit();
            makeBubble();
        }
        

    })
}

bubbleClick();




