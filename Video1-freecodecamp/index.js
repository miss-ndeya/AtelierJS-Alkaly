// initialiser variable
let a = 5;
let b = 10;
let c = "I am a";

a= a + 1
b= b + 5
c= c + "string!"

// sensibliter a la case

// declaration
var studLyCapVar;
var properCamelCase;
var TitleCaseOver;

// assignements
studLyCapVar  = 10
properCamelCase = "A String";
TitleCaseOver = 900;

// incrementer une variable
var myVar = 11;
myVar = myVar + 1; //myVar = myVar++; 

// decrementer une variable
myVar = myVar - 1; //myVar = myVar--;

// modifier une variable
a += 12 //on ajoute 12 
a -= 12 //on diminue 12 
a *= 12 //on multiplie a par 12 
a /= 12 //on divise a par 12 

// concatenation
var myStr = "I am a \"double quotd\" string inside \"doublequoted"
console.log(myStr);
var str = `<a href="https://www.example.com" target="_blank">Link</a>`
var ourStr = "I come frist. " + " I come seconde."

// (Escape Sequences string)25mn54s g op compris ceux qu'il disait

// concatenation avec les operateur
var myStr = "this is the frist sentence."
myStr += "this is the seconde sentence." 

// length avec les string
var fristNameLength = 0;
var fristName = "Ada"
fristNameLength =fristName.length
fristNameLength =fristName[0]

// string Immutibility
var myStr = "ndeye awa"
myStr = "hello"

// =================================
function prenom(nom, prenom) {
    var prenom = ''
    prenom+= "je suis " + nom + prenom
    return prenom
}
console.log(prenom("NDIAYE", "Ndeye awa"));

// =================================
// manipulaion tableau
var ourArray = ["john Doe", 23]
var my = ["Quincy", 1]

// ==================================
// acceder au elements du tableau js
var ourArray = [30, 23, 40]
ourArray[1] = 55
console.log(ourArray[0]);

// ================================
// ajouter un element dans un tableau
var ourArray = ["Stimpson", "j", "cat"]
ourArray.push(["happy", "joy"])

var array = [["john", 23], ["cat", 2]]
array.push(["dog", 3])

// ===================================
// supprimer un element du tableau
var removeArray = array.pop()

// supprimer le premier elements du tableau
var removeArray = array.shift()

// ====================================
function myfunction() {
    console.log("hello world");
}
myfunction()
myfunction()
myfunction()

// ======================================
// les fonctions

var global = 10;


function funtion1(){
    num = 5;
}

function function2(){
    var valeur = "";
    if (typeof global != "undefined") {
        valeur+= "global: " + global;
    }
    if (typeof num != "undefined") {
        valeur+= "num: " + num;
    }
    console.log(output);
}
funtion1();
function2();

// ====================================
function test(val) {
    if (val > 12) {
        return "Greater than 10";
    } else if (val < 3) {
        return "Smaller than 5";
    } else{
        return "Between 5 and 10";
    }  
}
test(15);

// ==============================
var noms = ["Abdel malick!", "moussa", "mbaye", "Pathe", "Baye Sall", "Ndella Ndione", "Ma Fall"];
function score(par, strokes) {
    if (strokes == 1) {
        return noms[0];
    } else if (strokes <= par - 2) {
        return noms[1]
    } else if (strokes == par - 1) {
        return noms[2]
    } else if (strokes == par) {
        return noms[3]
    } else if (strokes == par + 1) {
        return noms[4]
    } else if (strokes == par + 2) {
        return noms[5]
    } else if (strokes >= par + 3) {
        return noms[6]
    } 
}
console.log(score(5, 4));
