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

function updateInteractions(arr) {
  // Get a reference to the interactions element
  var updateArea = document.getElementById('interactions');
  updateArea.innerHTML = "";

  // v is equal to the currently iterated property
  for (var iii = 0; iii < arr.length; iii++) {
    // Grab info from array
    var name = arr[iii]["buttonText"];
    var action = arr[iii]["action"];

    // Create a new interactions element
    var newElement = document.createElement("li");
    // Create text for element
    var text = document.createTextNode(name);
    // Create full update element with text
    newElement.appendChild(text);

    // Set class for interactions element to animated fadeInDown
    newElement.setAttribute("class", "animated fadeInUp interface");

    // Set onclick action for interactions element
    //newElement.setAttribute("onclick", action);
    newElement.onclick = action;

    // Append list element
    updateArea.appendChild(newElement);
  }
}

function updateInventory(arr) {
  var arr = window.gameController.gameState.player.inventory;
  // Get a reference to the interactions element
  var updateArea = document.getElementById('inventoryList');
  updateArea.innerHTML = "";

  // v is equal to the currently iterated property
  for (var iii = 0; iii < arr.length; iii++) {
    // Grab info from array
    var name = arr[iii]["item"];
    var action = arr[iii]["action"];

    // Create a new interactions element
    var newElement = document.createElement("li");
    // Create text for element
    var text = document.createTextNode(name);
    // Create full update element with text
    newElement.appendChild(text);

    // Set class for interactions element to animated fadeInDown
    newElement.setAttribute("class", "animated fadeInDown");

    // Set onclick action for interactions element
    //newElement.setAttribute("onclick", action);
    newElement.onclick = action;

    // Append list element
    updateArea.appendChild(newElement);
  }
}