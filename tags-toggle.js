function tagsToggleLocal(){ // toggles the tags, works with an open page only
console.clear();
let message = ''
var elements = document.querySelectorAll('.contentTag');
  var displayValue = 'none';
  if (elements.length > 0 && elements[0].style.display === 'none') {
    displayValue = 'initial';
    message = 'Tags are now switched on';
  } else {
    message = 'Tags are now switched off';
}
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = displayValue;
  }
  return message;
}

function tagsGlobal(control) { // turns the tags on or off based on a parameter, works globally
  console.clear();
  let message;
  if (control === 'on') {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<style>.contentTag { display: initial; }</style>');
  } else if (control === 'off') {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<style>.contentTag { display: none; }</style>');
  } else {
    message = `You have to type: tagsGlobal('on') or tagsGlobal('off')`;
  }
  return message;
}

function t1() { // turn on the tags fast, works globally
  console.clear();
  document.querySelector('body').insertAdjacentHTML('beforeend', '<style>.contentTag { display: initial; }</style>');
  return 'Tags are now switched on';
}

function t0() { // turn off the tags fast, works globally
  console.clear();
  document.querySelector('body').insertAdjacentHTML('beforeend', '<style>.contentTag { display: none; }</style>');
  return 'Tags are now switched off';
}

// todo: a global toggle function
