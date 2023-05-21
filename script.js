// add event to the start button
const startBtn = document
	.querySelector(".start-game button")
	.addEventListener("click", (event) => {
		console.log("starting...");
		countDown(10);
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

const displayCountDown = (timeLeft)=>{
    document.querySelector('.timer').textContent = timeLeft
} 
