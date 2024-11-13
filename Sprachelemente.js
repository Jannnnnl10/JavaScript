// Aufgabe 1
var myNumber = 5;

// Aufgabe 3
    var n1 = "3a";
    var n2 = "3";
    if (n1 != 3) {
        n1 = Number.NaN;
    }
    if (n2 != 3) {
        n2 = Number.NaN;
    }
    alert(n1);   //?
    alert(n2);   //?

// Aufgabe 4
    var n = Math.PI;
    document.write(n.toFixed(2));

// Aufgabe 6
    var monate = ["Januar", "März", "April", "Mai", 
        "JavaScript", "JS", "Juni", "Juli", "August", "September"];

    monate.splice(1, 0, "Februar");
    monate.splice(5, 6);
    monate.push("Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");

    document.write(monate);


// Aufgabe 7
    var a = 2;
document.write(quadrieren(a)); 

function quadrieren(zahl) {
   return zahl *= zahl;

  

 if (typeof(addieren) == 'function') {
    var summe = addieren(5, 3);
    document.write(summe);
}
else { 
    document.write("Funktion existiert nicht!");
}

function addieren(a, b) {
    return a + b;
}   
}
