// Stockage Web HTML5

// Nous stockons les données dans localStorage à 
// l'aide de la méthode localStorage.setItem .

//syntax
localStorage.setItem('key', 'value')

// Stockage de la chaîne dans un localStorage
localStorage.setItem('firstName', 'Asabeneh') 
console.log(localStorage)

// Stockage du numéro dans un stockage local
localStorage.setItem('age', 200)
console.log(localStorage)

// Stockage d'un tableau dans un localStorage. 

// Si nous stockons un tableau, un objet ou un tableau d'objets, 
// nous devons d'abord chaîner l'objet. Voir l'exemple ci-dessous.
let skills = ['HTML', 'CSS', 'JS', 'React']

const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)

// Stocker un objet dans un localStorage. 
// Avant de stocker des objets dans un localStorage, 
// l'objet doit être chaîne.
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

// Obtenir un article de localStorage
// Nous obtenons les données du stockage local 
// en utilisant la méthode localStorage.getItem() .

//syntax
localStorage.getItem('key')

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
skills = localStorage.getItem('skills')
console.log(firstName, age, skills)

// Utilisons JSON.parse() pour l'analyser dans un tableau normal.
skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)

// Effacer le stockage local
// La méthode clear effacera tout ce qui 
// est stocké dans le stockage local

localStorage.clear()