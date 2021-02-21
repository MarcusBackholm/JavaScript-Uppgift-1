/* Jag har använd mig utav breakpoints när jag har debuggat koden för att se vad det är som händer stegvis i koden. Vilken data/information
som skrivsut vart och när koden exekveras. Jag har inspekterat koden under körningen genom att trycka F12 i webbläsaren. 
Har även krivit om koden i konsolfönstret "sources" i inspektera fönstret för att även se vad som händer när vi ändrar på variabler
och dess innehåll. Kort och gott sagt så använder jag mig utav "stepthrough" debugging i webbläsaren. 
Har mer eller mindre ändrat om i din kod och satt tillbaka olika värden och mer förklarat vad det är som händer i koden.
Vilka metoder det är som används och hur dom fungerar. Med tanke på att kah ligger efter så ville jag göra en så simpel komplettering som möjligt.
Har läst på mycket teori angående DOM och funktioner och olika slags anrop i JavaScript. 
*/


document.addEventListener("DOMContentLoaded", onPageLoad); // Lägger till en klickhändelse i dokumentet. Döper metoden till "onPageLoad"

//Funktion för inlägg.
function onPageLoad() {
  let inputBox = document.querySelector("#input-number"); // returnerar det första elementet i dokumentet som marchar det angivna elementet eller en så kallad "grupp" av val. Om inga matchningatr hittas så returnerar värdet "Null"

  // input funktion som kör argument anrop för dess funktioner som är skapade och körs.
  inputBox.oninput = function() {
    removeAllSections(); // funktionsanrop i funktionen oninput.
    makeSections(parseInt(inputBox.value)); //funktionsanrop makeSections. Funktionen parseInt för en analysering på ett strängargument och returnerar ett heltal
                                            //för den angivna radixen " alltså basen" av det matematiska siffersystemet. Här kikar den efter atal inlägg som skapas.
  };

}

// Funktionen makeSection med en parameter som heter "count" för att loopa igenom skapande titlar med inlägg.
function makeSections(count){
  for (var i = 0; i < count; i++) { // För varjer varav i loopen så öka antalet inlägg med 1 = i++
    var parent = document.querySelector("main"); // variablen "parent" returnerar det första elementet i dokumentet som marchar det angivna elementet eller en så kallad "grupp" av val. Om inga matchningatr hittas så returnerar värdet "Null"
    var child = document.createElement("section"); // variablen "child" skapar ett nytt "section" i dokumentet
    var title = document.createElement("h4"); // variabeln "title" skapar ett nytt "h4" element i dokumentet
    var text = document.createElement("p"); // variablen "text" skapar ett nytt "p" element i dokumentet

    title.innerText = "Blogg " + i; // Tilldelar "title.innerText" Starttextsom visar en titel som varje blogg inlägg tilldelas.
    text.innerText = `Type some...`; // Tilldelar "text.innerText" starttext i blogginlägg rutan innan vi vill skriva något annat.


  
    makeEditable(title);
    makeEditable(text);

    // .append() infogar en uppsättning node objekt eller DOMsträngobjekt från sista child av en parent node.
    child.append(title);
    child.append(text);
    parent.append(child);
  }
}

// funktion för att ta bort antal blogginlägg som skapats.
function removeAllSections(){
  var test_sections = document.querySelectorAll("section");
  for (var i = 0; i < test_sections.length; i++) {
    test_sections[i].remove(); // .remove tar gör så att vi kan ta bort det valda elemetet från dokumentet.
  }
}

// Funktion makeEditable för att editera inehåll i blogginläggen.
// Funktionen Har en parameter "rem"
function makeEditable(rem){
  rem.onclick = function(e) { // .onclick aänvänds för att utlösa en funktion när ett element klickas på.
    rem.contentEditable = true;
    rem.focus(); // .focus sätter fokus på det angivna elementet och tar emot användar input som standard.
  };
  //funktion
  rem.onblur = function(e) { // .onblur kör ett script när användaren lämnar ett inmatningsfält.
    rem.contentEditable = false;
  };
}
