const introElement = document.getElementById("intro");


introElement.textContent = "Welcome to the DOM lesson!";

introElement.setAttribute("id", "newIntro");
console.log(introElement.getAttribute("id")); // Output: newIntro
introElement.removeAttribute("id");


introElement.style.color = "blue";
introElement.classList.add("highlight");


const button = document.getElementById("myButton");
button.onclick = function() {
  alert("Button was clicked!");
};

button.onmousedown = function() {
  button.style.color = "blue";
};
button.onmouseup = function() {
  button.style.color = "black";
};