const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls")); 

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome to your first time on this page!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
todayDisplay.textContent = Date.now();
let longnum= 1676650639658;
let today = new Date();