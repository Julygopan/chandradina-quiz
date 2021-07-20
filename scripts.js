const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownTimer = document.getElementById('countdown');

setInterval(updateCountDown , 1000)

function updateCountDown(){
    if (time >= 0){
        const minutes  = Math.floor(time/60);
        let seconds = time % 60
        countdownTimer.innerHTML = `${minutes} : ${seconds}`;
        console.log(`${minutes} : ${seconds}`)
        time --;
    }else{
        console.log('over')
        window.location.replace('https://julygopan.github.io/chandradina-quiz/completed.htmll')
    }
}