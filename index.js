let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let homePlusOne = document.getElementById('home-plus-one-btn');
let homePlusTwo = document.getElementById('home-plus-two-btn');
let homePlusThree = document.getElementById('home-plus-three-btn');
let homeReset = document.getElementById('home-reset-btn');

let guestPlusOne = document.getElementById('guest-plus-one-btn');
let guestPlusTwo = document.getElementById('guest-plus-two-btn');
let guestPlusThree = document.getElementById('guest-plus-three-btn');
let guestReset = document.getElementById('guest-reset-btn');

homePlusOne.addEventListener('click', () => homeScore.textContent++);
homePlusTwo.addEventListener('click', () => homeScore.textContent = Number(homeScore.textContent) + 2);
homePlusThree.addEventListener('click', () => homeScore.textContent = Number(homeScore.textContent) + 3);
homeReset.addEventListener('click', () => homeScore.textContent = 0);

guestPlusOne.addEventListener('click', () => guestScore.textContent++);
guestPlusTwo.addEventListener('click', () => guestScore.textContent = Number(guestScore.textContent) + 2);
guestPlusThree.addEventListener('click', () => guestScore.textContent = Number(guestScore.textContent) + 3);
guestReset.addEventListener('click', () => guestScore.textContent = 0);
