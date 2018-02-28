/**
 * Script
 */

// playSound function, default event
function playSound(event) {
  // Select the audio tag
  // as per key pressed (data-key)
  const audio = document.querySelector(`
    audio[data-key='${event.keyCode}']
  `);

  // Select the key class
  // as per key pressed (data-key)
  const key = document.querySelector(`
    .key[data-key='${event.keyCode}']
  `);

  // If no audio var, then stop the function.
  if (!audio) 
    return;

  // Initialize the currentTime
  audio.currentTime = 0;

  // Play the audio
  audio.play();

  // Add playing class when key is called.
  key.classList.add('playing');
}

// removeTransition function, default event
function removeTransition (event) {
  // If `event.propertyName` is not transform, then dont run 
  // Rest, remove the `playing` class
  if(event.propertyName !== 'transform') 
    return;
  this.classList.remove('playing');
}

// Select all `key` classname
const keys = document.querySelectorAll('.key');

// Loop over it, add an event listener on 
// key pressed pass `transitionend` event 
// to run `removeTransition` function
keys.forEach(key => key.addEventListener(
  'transitionend', removeTransition
));

// Listen for keydown event,
// Run function playSound()
window.addEventListener('keydown', playSound);
