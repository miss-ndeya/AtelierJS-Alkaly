// Fonction avec paramètres par défaut
// syntax
// Declaring a function
function functionNames(param = 'value') {
    //codes
  }
  
  // Calling function
  functionNames()
//   functionName(arg)

  function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))

  function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))

  function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1819))

  function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
  }
  
  console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon