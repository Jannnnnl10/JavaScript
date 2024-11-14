window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    var choice = document.getElementById("choice");

    if (ingredients.selectedIndex > -1) {
        var selectedOption = ingredients.options[ingredients.selectedIndex];
        choice.appendChild(selectedOption);
    }
}

function remove() {
    var choice = document.getElementById("choice");
    var ingredients = document.getElementById("ingredients");

    if (choice.selectedIndex > -1) {
        var selectedOption = choice.options[choice.selectedIndex];
        ingredients.appendChild(selectedOption);
    }
}
