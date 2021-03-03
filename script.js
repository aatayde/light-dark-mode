const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(dark) {
  // Change nav background
  nav.style.backgroundColor = dark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  // Change text background
  textBox.style.backgroundColor = dark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  // Change nav icon & text
  toggleIcon.children[0].textContent = dark ? 'Dark Mode' : 'Light Mode';
  dark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  // change images
  dark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  // console.log(event.target.checked); // console test
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
    console.log('Dark Mode Endabled');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
    console.log('Light Mode Endabled');
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
