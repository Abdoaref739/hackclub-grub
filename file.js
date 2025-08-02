let happy_button = document.getElementById('happy-button');
let sad_button = document.getElementById('sad-button');
let angry_button = document.getElementById('angry-button');
let navbar = document.getElementById('navbar');
let container = document.getElementById('container');

function resetMoodColors() {
    container.classList.remove('bg-red-500', 'bg-yellow-300', 'bg-green-500', 'bg-indigo-500');
    navbar.classList.remove('bg-red-700', 'bg-yellow-700', 'bg-green-700', 'bg-indigo-700');
}

happy_button.addEventListener('click', () => {
    resetMoodColors();
    container.classList.add('bg-yellow-300');
    navbar.classList.add('bg-yellow-700');
});

sad_button.addEventListener('click', () => {
    resetMoodColors();
    container.classList.add('bg-green-500');
    navbar.classList.add('bg-green-700');
});

angry_button.addEventListener('click', () => {
    resetMoodColors();
    container.classList.add('bg-red-500');
    navbar.classList.add('bg-red-700');
});