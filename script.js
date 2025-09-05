/* Part 1: Animation Trigger */
const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

animateBtn.addEventListener('click', () => {
  animatedBox.style.animation = 'moveBox 2s ease-in-out';

  // Remove animation after it ends to allow re-trigger
  animatedBox.addEventListener('animationend', () => {
    animatedBox.style.animation = '';
  }, { once: true });
});

/* Part 2: Function Demonstration */
function sum(a, b) {
  return a + b;
}

const calculateBtn = document.getElementById('calculateBtn');
const functionResult = document.getElementById('functionResult');

calculateBtn.addEventListener('click', () => {
  const result = sum(10, 20); // Using parameters and return value
  functionResult.textContent = `The sum of 10 and 20 is ${result}.`;
});
