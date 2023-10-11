// Fonction flèche
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function squa(n) {
    return n * n
  }
  
  console.log(squa(2)) // 4
  
  const squas = n => {
    return n * n
  }
  
  console.log(squa(2))  // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
  const square = n => n * n  // -> 4

  const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))


//   const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))

// fontion flechee avec parametre par defaut

// syntax
// Declaring a function

const functionName = (param = "value") => {
    //codes
    console.log(param);
  }
  
  // Calling function
  functionName()
//   functionName(arg)

  const greetinges = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
  }
  
  console.log(greetinges())
  console.log(greetinges('Asabeneh'))

  const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))


  const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
  console.log('Age: ', calculateAge(1819))


  const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
