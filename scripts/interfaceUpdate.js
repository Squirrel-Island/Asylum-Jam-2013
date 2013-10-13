function updateMessages(message) {
  // Get a reference to the #textArea element
  var textArea = document.getElementById('textArea');
  // Get a reference to the last update (first child)
  var theFirstChild = textArea.firstChild;

  // Create a new update element
  var newElement = document.createElement("p");
  // Create text for element
  var text = document.createTextNode(message);
  // Create full update element with text
  newElement.appendChild(text);

  // Set class for update element to fadeBlock
  newElement.setAttribute("class", "animated fadeInDown");

  // Insert the new element before the first child
  textArea.insertBefore(newElement, theFirstChild);
}

function updateButtons(variable) {
  blah;
}