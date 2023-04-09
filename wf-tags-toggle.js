var elements = document.querySelectorAll('.contentTag');
  var displayValue = 'none';
  if (elements.length > 0 && elements[0].style.display === 'none') {
    displayValue = 'initial';
  }
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = displayValue;
  }