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

var currentHTML, newHTML, allHTML, text;
// var message = "Oh hai, watch out for Sunny Jim";

function updateContents(message) {
  // create variable for current html of #textArea
  currentHTML = document.getElementById("textArea");
  
  // create variable for new html node
  newHTML = document.creatElement("p");
  // create varible for new text for new node
  text = document.createTextNode(message);
  // combine html node with text node
  newHTML.appendChild(text);
  
  // create variable to hold all html for #textArea
  allHTMML = currentHTML + newHTML;
  
  
  // almost works, not tested. allHTML may be a string
}