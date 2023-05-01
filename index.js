/*************ZADANI**************/
// U všech následujících úryvků kódů vytvořte technický popis jejich fungování a zároveň zkuste odhadnout záměr daného kódu. Obě dvě části si skutečně napište například do textového souboru.
const average = (a, b) => {
  return (a + b) / 2;
};
// Vytvářím funkci, která očekává na vstupu dva parametry, které sipojmenovávám a a b. Funkci si ukládám do proměnné pojmenované average.
// V těle funkce je jediný příkaz, který vypočítá součet parametrů a a b, součet vydělí dvěma a výslednou hodnotu vrátí pomocí return jako návratovou hodnotu funkce.
// Funkce average počítá průměrnou hodnotu dvou zadaných čísel.

// Creating a function that expects two input parameters, which I name a and b. I save the function in a variable named "average".
// The body of the function contains only one command, which calculates the sum of the parameters a and b, divides the sum by two, and returns the resulting value as the return value of the function.
// The average function calculates the average value of two given numbers.

2
const titleElement = document.querySelector('.title');
titleElement.textContent = 'Nadpis';
// Pomocí metody querySelector() vyhledám první element v dokumentu, který odpovídá zadanému CSS selektoru .title. Selektor odpovídá všem prvkům s třídou title. Nalezený prvek se uloží do proměnné titleElement.
// Do textového obsahu (textContent) nalezeného prvku se vloží text „Nadpis“ – původní obsah se přepíše.
// Kód nastaví text „Nadpis“ do prvního elekemntu se třídou title v dokumentu. (Pokud by v dokumentu takový element nebyl, kód spadne s chybou.)

// Using the querySelector() method, we search for the first element in the document that matches the given CSS selector ".title". The selector matches all elements with the class "title". The found element is saved to the variable titleElement.
// The text "Nadpis" is inserted into the content of the found element (textContent) - the original content is overwritten.
// The code sets the text "Nadpis" into the first element with the class "title" in the document. (If there was no such element in the document, the code would fail with an error.)

3
let time = 0;
setTimeout(() => {
  time += 1;
  console.log('time', time);
}, 1000);
// Vytvořím proměnnou time, do které se uloží číslo 0. Obsah proměnné bude možné později v kódu změnit.
// Zavolám funkci setTimeout(), která zavolá mou funkci (callback) za jednu sekundu.
// Předaná callback funkce je anonymní.
// Předaná callback funkce má v těle dva příkazy.
// První příkaz funkce zvýší hodnotu proměnné time o 1.
// Druhý příkaz vypíše dvě hodnoty do konzole v DevTools prohlížeče. První hodnota je text „time“, druhá hodnota je aktuální hodnota proměnné time (tj. 1).
// Kód jednu sekundu po načtení stránky vypíše do konzole time 1.

// I am creating a variable called "time" and setting its initial value to 0. The value of this variable can be changed later in the code.
// I am calling the setTimeout() function, which will call my anonymous callback function after one second.
// The passed-in callback function has two statements inside its body.
// The first statement increases the value of the "time" variable by 1.
// The second statement logs two values to the console of the DevTools browser: the first value is the text "time", and the second value is the current value of the "time" variable (which is 1 at this point).
// One second after the page loads, the code will log "time 1" to the console.

4
buttonOk.addEventListener('click', () => {
  document.body.innerHTML = '<p>Everything OK</p>';
});
// Kód předpokládá existenci proměnné buttonOk, která obsahuje DOM element (pravděpodobně potvrzovací tlačítko).
// Na proměnné buttonOk se volá metoda addEventListener se dvěma parametry. Metoda addEventListener nastaví posluchače událostí na DOM elementu buttonOk.
// První parametr metody addEventListener je název události, které chceme poslouchat. Zde se nastavuje událost click, tedy kliknutí tlačítkem myši.
// Druhý parametr je funkce (callback), která se zavolá v okamžiku, kdy došlo k dané události – v tomto případě kdy uživatel klikl na tlačítko buttonOk.
// V tomto případě se předává anonymní funkce (callback).
// V těle funkce je jediný příkaz. Z proměnné document (ve které je DOM element reprezentující celý dokument zobrazený v prohlížeči) se přečte vlastnost (property) body, která obsahuje DOM element odpovídající elementu <body> v HTML, tedy viditelnou část webové stránky.
// Do vlastnosti (property) innerHTML property body se zapíše (přepíše) text „Everything OK“. Vlastnost innerHTML reprezentuje HTML kód příslušného DOM elementu (v tomto případě viditelného obsahu celé stránky).
// Text „Everything OK“ představuje HTML kód – odstavec textu (element <p>) s vloženým textem „Everything OK“.
// Při kliknutí na tlačítko buttonOk se přepíše obsah celé webové stránky, nahradí se jedním odstavcem, ve kterém bude text „Everything OK“.

// The code assumes the existence of a variable called buttonOk, which contains a DOM element (probably a confirmation button).
// The addEventListener method is called on the buttonOk variable with two parameters. The addEventListener method sets event listeners on the DOM element buttonOk.
// The first parameter of the addEventListener method is the name of the event we want to listen for. Here, the event click is set, which means clicking the mouse button.
// The second parameter is a function (callback) that is called when the event occurs - in this case, when the user clicks the buttonOk button.
// In this case, an anonymous function (callback) is passed.
// The body property is read from the document variable (which represents the DOM element that displays the entire document in the browser), which contains the DOM element corresponding to the <body> element in HTML, i.e., the visible part of the webpage.
// The text "Everything OK" is written (overwritten) into the innerHTML property of the body property. The innerHTML property represents the HTML code of the corresponding DOM element (in this case, the visible content of the entire page).
// The text "Everything OK" represents HTML code - a text paragraph (element <p>) with the text "Everything OK" inserted.
// When the buttonOk button is clicked, the entire content of the webpage is replaced with one paragraph containing the text "Everything OK".

5
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyP') {
    console.log('paused');
  }
});
// Na proměnné document (reprezentující celý dokument zobrazený v prohlížeči) se zavolá metoda addEventListener, která nastavuje posluchač události. Metoda dostane dva parametry.
// První parametr je text „keyup“, posluchač události tedy bude navěšen na události, když uživatel pustil dříve stisknutou klávesu.
// Druhý parametr je funkce (callback), která se zavolá, když k uvedené události dojde.
// Předávaná funkce je anonymní funkce, která očekává jeden parametr. Pojmenovává si ho event.
// Tělo funkce tvoří jeden příkaz – podmínka (if), která testuje, zda vlastnost (property) code události (parametr event) je rovna řetězci „KeyP“. Testuje se, zda událost nese informaci, že uživatel pustil klávesu s písmenem „P“.
// Pokud je podmínka splněna, zavolá se metoda log na objektu console s parametrem – textem „paused“.
// Pokaždé, když uživatel kdekoli v dokumentu stiskne a pak pustí klávesu „P“, vypíše se do konzole v DevTools text „paused“.

// The code assumes the existence of a variable named document, which represents the entire document displayed in the browser.
// The addEventListener method is called on the document variable, which sets an event listener on it. The method takes two parameters.
// The first parameter is the string "keyup", so the event listener will be attached to events when the user releases a previously pressed key.
// The second parameter is a function (callback) that will be called when the specified event occurs.
// The passed function is an anonymous function that expects one parameter named event.
// The body of the function consists of a single command - an if statement that tests whether the code property of the event parameter is equal to the string "KeyP". This tests whether the event contains information that the user released the key with the letter "P".
// If the condition is met, the log method is called on the console object with a parameter - the string "paused".
// Every time the user presses and then releases the "P" key anywhere in the document, the text "paused" will be printed to the DevTools console.