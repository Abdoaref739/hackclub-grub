let happy_button = document.getElementById('happy-button');
let sad_button = document.getElementById('sad-button');
let angry_button = document.getElementById('angry-button');
let navbar = document.getElementById('navbar');
let container = document.getElementById('container');
let mood_display = document.getElementById('mood-display');
happy_button.addEventListener('click', () => {
    mood_display.textContent = "Your current mood is: Happy 😊";
});

sad_button.addEventListener('click', () => {
    mood_display.textContent = "Your current mood is: sad 😢";
});

angry_button.addEventListener('click', () => {
    mood_display.textContent = "Your current mood is: angry 😠";
});