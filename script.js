var userInput = document.querySelector("#user-input");
var button = document.querySelector("#button");
var ul = document.querySelector("#list");

function inputLength() {
    return userInput.value.length
}

function createListElement() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  li.appendChild(document.createTextNode(userInput.value));
  li.appendChild(deleteButton);
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  ul.appendChild(li);
  userInput.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0){
    createListElement();
  }
}

function addListAfterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }
}

// function getEventTarget(e){
// 	e = e || window.event;
// 	return e.target || e.srcElement;
// }
//
// ul.onclick = function(event){
// 	var target = getEventTarget(event);
// 	target.classList.toggle("done");
// }
ul.addEventListener("click", function(e) {
  if(e.target.nodeName == "LI"){
    e.target.classList.toggle("done");
  } else if(e.target.nodeName == "BUTTON") {
    e.target.parentNode.remove();
  }
});


button.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterEnter);
