
/*** 1.0 Arrays */

/* let arr;
arr = new Array(); // Konstruktor
arr = []; // Literal 
arr = [2,6,7,12];
arr = [false,true];
arr = ["Ich","bin","Imran"];

ausgabe(arr);
ausgabe(arr[0]);
ausgabe(arr.length);
 */

/*** 1.1 Schleifen */

/* let arr = ["Ich","bin","Imran"];
ausgabe(arr);

// Index -->  0,1,2,3,4,5 ...
for (let i = 0; i < arr.length; i++) 
{
    ausgabe(i + " : " + arr[i]);
} */


 /*********   Überlegungen **********/

/* 
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/*
let a = 0; // Anfangswert :: DRY !
ausgabe("inhalt von a: " + a);
a = a + 1; // a = 0 + 1
ausgabe("inhalt von a: " + a);
a = a + 1; // a = 1 + 1
ausgabe("inhalt von a: " + a);
a = a + 1; // a = 2 + 1
a*/

/*
let a = 0; // Anfangswert
for (let index = 0; index < 10; index++)
{
    //ausgabe("ausgabe von innen: " + a)
    a += 1;
}
ausgabe("ausgabe nach loop: " + a);
*/

/* 
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Konkatenation eines Strings
*/

/*
let str = "";
let gap = " ";
let addStr = "Test";
for (let index = 0; index < 10; index++)
{
    str += addStr + gap;
}
ausgabe(str);
*/



/*** Funktion mit Array als Parameter */
// Modul: Satz zusammenbauen | Test:
ausgabe(satzbauArr(["Ich","bin","Andreas","Fritz","Günther"]));
function satzbauArr(arr) {
    
    let gap     = " ";
    let punct   = ".";
    let str     = "";

    /* let str     = arr[0] + gap +
                    arr[1] + gap +
                    arr[2] + gap +
                    arr[3] + 
                    punct; */

    for (let i = 0; i < arr.length; i++) 
    {
        str +=  gap + arr[i];
    }                

    return str + punct; 

}


/*** Funktionalität mit Einzelparametern */
// Ich bin Imran Malik.  --> (Ich, bin, Imran, Malik)
// Modul: Satz zusammenbauen | Test:
ausgabe(satzbau("Ich","bin","Imran","Malik"));
function satzbau(wort1,wort2,wort3,wort4) {
    
    let gap     = " ";
    let punct   = ".";
    let str     =   wort1 + gap +
                    wort2 + gap +
                    wort3 + gap +
                    wort4 + 
                    punct;

    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}