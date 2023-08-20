// example of how to use this repo with the standalone WF app
// todo: move all the functions into the local storage

// save your functions to the local storage
localStorage.setItem('zen-tools', `
function split() {
window.open('https://workflowy.com');
}`);

// load them from the local storage when you first open the app
eval(localStorage.getItem('zen-tools'));

// run any function
split();