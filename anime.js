var input = document.getElementById("enter");
var button = document.getElementById("userinput");
var ul = document.querySelector("ul");
function inputlength() {
}
button.addEventListener("click", function() {
    if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})