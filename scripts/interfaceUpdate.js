function updateContents(message) {
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
  newElement.setAttribute("class", "fadeBlock");

  // Insert the new element before the first child
  textArea.insertBefore(newElement, theFirstChild);
}

function originalUpdate()
{
    // create a p tag and text node
    var newP = document.createElement("p");
    var newText = document.createTextNode("Oh hai, I'm dynamically generated.");
    
    newP.appendChild(newText); // add text to created p tag
    
    // add p tag and text element to list of text updates in textArea
    var textArea = document.getElementById("field2");
    document.body.insertBefore(newP, textArea);
}