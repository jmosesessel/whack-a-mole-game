const initialTimerSecs = 10;
const initialScore = 0;
// add event to the start button
const startBtn = document
	.querySelector(".start-game button")
	.addEventListener("click", (event) => {
		console.log("starting...");
        resetAll();
		countDown(initialTimerSecs);
	});

let countDownTimer;
const countDown = (seconds) => {
    clearInterval(countDownTimer)
    
	countDownTimer = setInterval(() => {
		const newTime = seconds--;
		console.log("count down", newTime);
        displayCountDown(newTime)
		if (newTime == 0) {
            clearInterval(countDownTimer)
			console.log("time up...");
		}
	}, 1000);
};

const resetAll = ()=>{
    //reset timer
    displayCountDown(initialTimerSecs)

    // reset score
    displayScore(initialScore)
    
}

// display countDown
const displayCountDown = (timeLeft)=>{
    document.querySelector('.timer').textContent = timeLeft
} 

// display score
const displayScore = (score)=>{
    document.querySelector('.score').textContent = score
}


