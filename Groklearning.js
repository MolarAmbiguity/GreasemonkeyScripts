// ==UserScript==
// @name        Grok shortcuts
// @namespace   Grok shortcuts
// @description Adds keyboard shortcuts for grok learning
// @include     https://groklearning.com/*
// @version     1
// @grant       none
// ==/UserScript==

function run() {
  runButtons = document.getElementsByClassName('action run js-run');
  runButtons[runButtons.length -1].click(); 
}
  
function submit() {
  document.getElementById('mark-confirmation-submit').click();
}
  
document.addEventListener('keydown', (event) => {
  //control + enter to run
  if (event.ctrlKey) {
    if (event.key == 'Enter') {
      run(); 
      return;
    }
  }
  //shift + enter to submit
  if (event.shiftKey) {
     if (event.key == 'Enter') {
       submit();
       return;
      }    
  }
}, false);