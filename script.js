let initialTimerSecs = 10;
let initialScore = 0;
let selectedHole = 0;
let countDownTimer;

// add event to the start button
const startBtn = document
	.querySelector(".start-game button")
	.addEventListener("click", (event) => {
		console.log("starting...");

        

		//showMole("hole3");
		resetAll();
		countDown(initialTimerSecs);
        generateRandomAppearance()
        chooseRandomHole(1,6)
	});

const countDown = (seconds) => {
	clearInterval(countDownTimer);

	countDownTimer = setInterval(() => {
		const newTime = seconds--;
		console.log("count down", newTime);
		displayCountDown(newTime);
		if (newTime == 0) {
			clearInterval(countDownTimer);
			console.log("time up...");
            hideMoles();
		}
	}, 1000);
};

// display countDown
const displayCountDown = (timeLeft) => {
	document.querySelector(".timer").textContent = timeLeft;
};

// display score
const displayScore = (score) => {
	document.querySelector(".score").textContent = score;
};

// show mole
const showMole = (hole) => {
	const mole = document.querySelector(`.${hole} .mole`);
	mole.style.top = "0";
};

// hide mole
const hideMoles = () => {
	const moles = document.querySelectorAll(`.mole`).forEach(mole=>{
        mole.style.top = "100%";
    });
};

// whacked mole. add click event to mole
function whackMole(event) {
	updateScore(initialScore);
	const selectedHole = event.srcElement.parentElement.className
		.toString()
		.split(" ")[1];
	console.log("whacked...", selectedHole, event);
	hideMoles();
    chooseRandomHole(1,6)
}

const clickedMole = document.querySelectorAll(".mole").forEach((mole) => {
	mole.addEventListener("click", (event) => whackMole(event));
});

// update score
const updateScore = (score) => {
	initialScore = score+1;
	console.log("initial score", initialScore);
	displayScore(initialScore);
};

// generate random number between 0 and 1
const generateRandomAppearance = ()=>{
    const random = Math.random(0,1)
    console.log('random Apperance', Math.round(random))
}

const chooseRandomHole = (min,max)=>{
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    //show a mole in the selected hole
    const hole = `hole${random}`
    selectedHole = hole
    showMole(selectedHole)
    console.log('random hole', hole)
}

const resetAll = () => {
	//reset timer
	displayCountDown(initialTimerSecs);

    //hide moles
    hideMoles()
	// reset score
    initialScore = 0;
	displayScore(initialScore);

};