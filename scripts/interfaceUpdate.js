function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

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

  // Set class for update element to animated fadeInDown
  newElement.setAttribute("class", "animated fadeInDown");

  // Insert the new element before the first child
  textArea.insertBefore(newElement, theFirstChild);
}

function updateInteractions(array) {
  // Baseline check for null parameters
  if (array != null) {

    // Get a reference to the interactions element
    var updateArea = document.getElementById(inputField);
    // Get a reference to the last update (first child)
    var theFirstChild = textArea.firstChild;

    // Create counter
    var counter = 0;
    // Create length minus 1
    var length = array.length() - 1 ;

    // v is equal to the currently iterated property
    for(var v in array) {
      // Grab info from array
      var name = v["buttonText"];
      var action = v["action"];
      
      // Create a new interactions element
      var newElement = document.createElement("li");
      // Create text for element
      var text = document.createTextNode(name);
      // Create full update element with text
      newElement.appendChild(text);

      // Set class for interactions element to animated fadeInDown
      newElement.setAttribute("class", "animated fadeInDown");

      // Set onclick action for interactions element
      newElement.setAttribute("onclick", "action");

      // Append list element
      textArea.appendChild(newElement);

      counter++;

      if (counter != length) {
        // Create a new interactions element
        var spanElement = document.createElement("span");
        // Create text for element
        var text = document.createTextNode("|");
        // Create full update element with text
        spanElement.appendChild(text);

        textArea.appendChild(spanElement);
      }
    }
  }
}

function updateInventory(array) {
  // Baseline check for null parameters
  if (array != null) {
    // Get a reference to the elementID element (.inventory or .inputField)
    var updateArea = document.getElementById(elementID);

    for(var v in array) {
    //v is equal to the currently iterated property

       
    }
  }
}