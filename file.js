let reset_button = document.getElementById('reset-button');
let happy_button = document.getElementById('happy-button');
let sad_button = document.getElementById('sad-button');
let angry_button = document.getElementById('angry-button');
let navbar = document.getElementById('navbar');
let container = document.getElementById('container');
let mood = document.getElementById('mood-display');
happy_button.addEventListener('click', () => {
container.classList.add('bg-yellow-300');
navbar.classList.add('bg-yellow-700');
container.classList.remove('bg-red-500');
navbar.classList.remove('bg-red-700');
container.classList.add('bg-green-500');
navbar.classList.add('bg-green-700');
mood.innerHTML = 'your mood is Happy!';
     container.classList.remove('bg-indigo-500');
    navbar.classList.remove('bg-indigo-700');
});


sad_button.addEventListener('click', () => {
container.classList.add('bg-green-500');
navbar.classList.add('bg-green-700');
container.classList.remove('bg-yellow-300');
navbar.classList.remove('bg-yellow-700');
container.classList.remove('bg-red-500');
navbar.classList.remove('bg-red-700');
mood.innerHTML = 'your mood is Sad!';
     container.classList.remove('bg-indigo-500');
    navbar.classList.remove('bg-indigo-700');
});



angry_button.addEventListener('click', () => {
container.classList.add('bg-red-500');
navbar.classList.add('bg-red-700');
container.classList.remove('bg-green-500');
navbar.classList.remove('bg-green-700');
container.classList.remove('bg-yellow-300');
navbar.classList.remove('bg-yellow-700');
mood.innerHTML = 'your mood is Angryyy!';
     container.classList.remove('bg-indigo-500');
    navbar.classList.remove('bg-indigo-700');
});




reset_button.addEventListener('click', () => {
    container.classList.add('bg-indigo-500');
    navbar.classList.add('bg-indigo-700');
    container.classList.remove('bg-red-500', 'bg-yellow-300', 'bg-green-500');
    navbar.classList.remove('bg-red-700', 'bg-yellow-700', 'bg-green-700');
    mood.innerHTML = 'your mood is Neutral!';
});
window.onload = () => {
     container.classList.add('bg-indigo-500');
    navbar.classList.add('bg-indigo-700');
}