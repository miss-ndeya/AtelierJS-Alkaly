// Création d'un modèle avec le constructeur RegExp
let pattern = "love";
let regEx = new RegExp(pattern);

pattern = "love";
let flag = "gi";
regEx = new RegExp(pattern, flag);

// Déclaration d'un modèle regex à l'aide de l'objet RegExp.
// Écrire le modèle et le drapeau dans le constructeur RegExp
regEx = new RegExp("love", "gi");

// Création d'un modèle sans constructeur RegExp
// Déclaration d'une expression régulière avec un
// indicateur global et un indicateur insensible à la casse.
regEx = /love/gi;

// Méthodes des objets RegExpp
str = "I love JavaScript";
pattern = /love/;
result = pattern.test(str);
console.log(result);

// Tableau contenant toute la correspondance
result = str.match(pattern);
console.log(result);

pattern = /love/g
result = str.match(pattern)
console.log(result)

// search() : Teste une correspondance dans une chaîne. 
// Il renvoie l'index de la correspondance, 
// ou -1 si la recherche échoue.
result = str.search(pattern)
console.log(result)

// Remplacer une sous-chaîne
let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

matchReplaced = txt.replace(/Python|python/gi, 'JavaScript')
console.log(matchReplaced)


const txte = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txte.replace(/%/g, '')
console.log(matches) 

// Support carré
pattern = '[Aa]pple' // this square bracket means either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)

console.log(matches) 

pattern = /[Aa]pple/g // this square bracket means either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)

console.log(matches) 

pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
matches = txt.match(pattern)

console.log(matches) 

// Caractère d'échappement (\) dans RegExp
pattern = /\d/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt. match(pattern)

console.log(matches) 
pattern = /\d+/g  
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt. match(pattern)

console.log(matches)  

// Une ou plusieurs fois(+)
pattern = /\d+/g  
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt. match(pattern)
console.log(matches) 

// Période(.)
pattern = /[a]./g  
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  
pattern = /[a].+/g  
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  
// Zéro ou plusieurs fois(*)
pattern = /[a].*/g  
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)
console.log(matches)  

// Zéro ou une fois (?)
// Le modèle peut ne pas se produire 
// ou se produire une seule fois.
txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g  
matches = txt.match(pattern)
console.log(matches)  

// Quantificateur dans RegExp
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\\b\w{4}\b/g  
matches = txt.match(pattern)
console.log(matches)  

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\b[a-zA-Z]{4}\b/g  
matches = txt.match(pattern)
console.log(matches) 

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{4}/g  
matches = txt.match(pattern)
console.log(matches)  

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{1,4}/g   
matches = txt.match(pattern)

console.log(matches)  
// Panier ^
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /^This/ 
matches = txt.match(pattern)
console.log(matches) 

// Négation
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /[^A-Za-z,. ]+/g  
matches = txt.match(pattern)
console.log(matches)  

// Correspondance exacte
// Il devrait avoir ^ commençant et $ qui est une fin.
pattern = /^[A-Z][a-z]{3,12}$/;
const name = 'Asabeneh';
result = pattern.test(name)

console.log(result) // true
