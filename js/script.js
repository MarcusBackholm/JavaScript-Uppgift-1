document.addEventListener("DOMContentLoaded", onPageLoad);

//Funktion för input som returnerar elementet som matchar selector.
function onPageLoad() {
  let inputBox = document.querySelector("#input-number");

  inputBox.oninput = function() {
    removeAllSections(); //Returnerar ingenting.
    makeSections(parseInt(inputBox.value)); // Parse som konverterar en string till en integer i input.value
  };
}
//Ökar antalet inlägg med 1 för varje inlägg som skall skapas.
function makeSections(count){
  for (var i = 0; i < count; i++) { //För varje varv i loopen så öka med 1.
    var parent = document.querySelector("main"); // returnerar element 
    var child = document.createElement("section"); // skapar en instans för specifik element tag.
    var title = document.createElement("h4"); // skapar en instans för specifik element tag.
    var blurb = document.createElement("p"); // skapar en instans för specifik element tag.

    title.innerText = "Blogg " + i; // Ökar titel text med 1 för varje nytt inlägg.
    blurb.innerText = `Type some...`; // Standard värde i rutan för inlägg.

    makeEditable(title);
    makeEditable(blurb);

    child.append(title);
    child.append(blurb);
    parent.append(child);
  }
}
//Minskar antalet inlägg med 1 som tas bort.
function removeAllSections(){
  var test_sections = document.querySelectorAll("section"); // returnerar alla element som matchar selektor.
  for (var i = 0; i < test_sections.length; i++) { // returnerar värden ifrån kollektion.
    test_sections[i].remove(); //reducerar antalet inlägg med 1
  }
}
// Måste läsa på mer om hur just denna funktion fungerar, har med klick att göra så vill gärna komplettera denna.
// Hittar dock förtillfället ingen bra information angående hur just den du har gjort fungerar.
function makeEditable(elem){
  elem.onclick = function(e) {
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function(e) {
    elem.contentEditable = false;
  };
}
