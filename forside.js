window.onload = function() {
    // Skjul alle filterunderpunkter, når siden indlæses
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }
};

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block"; // Vis alle elementer
        }
        return; // Afslut funktionen her, så vi undgår at ændre visning for specifikke kategorier
    }
    for (i = 0; i < x.length; i++) {
        if (c === "all") {
            x[i].style.display = "block"; // Vis alle elementer
        } else {
            if (x[i].style.display === "block" && x[i].className.indexOf(c) > -1) {
                x[i].style.display = "none"; // Skjul element, hvis det allerede er synligt
            } else if (x[i].className.indexOf(c) > -1) {
                x[i].style.display = "block"; // Vis elementer med den ønskede klasse
            } else {
                x[i].style.display = "none"; // Skjul alle elementer, der ikke matcher filteret
            }
        }
    }
}