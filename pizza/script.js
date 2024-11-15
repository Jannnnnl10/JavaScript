window.addEventListener("load", initialize);
var ingredients;
var choice; 

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);

    ingredients = document.getElementById("ingredients");
    choice = document.getElementById("choice"); // Nimmt <select> für den rechten Balken
}

function add() {
     
    if (ingredients.selectedIndex > -1) { // Schaut ob in die linke Liste geklickt wurde
        var selectedOption = ingredients.options[ingredients.selectedIndex]; // Wählt das Ausgewählte Item
        choice.appendChild(selectedOption); // Schiebt das Element von Links nach rechts
    }
}

function remove() {

    if (choice.selectedIndex > -1) {
        var selectedOption = choice.options[choice.selectedIndex];
        ingredients.appendChild(selectedOption);
    }
}
