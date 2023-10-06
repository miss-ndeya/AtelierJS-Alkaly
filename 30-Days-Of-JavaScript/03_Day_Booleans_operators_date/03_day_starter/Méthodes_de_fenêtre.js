// Window alert() method
alert(message)
alert('Welcome to 30DaysOfJavaScript')
prompt('required text', 'optional text')

// Window prompt() method
let number = prompt('Enter number', 'number goes here')
console.log(number)

// Window confirm() method
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

// Creating a time object
const now = new Date()
console.log(now) 

// Getting full year
console.log(now.getFullYear()) 

// Getting month
console.log(now.getDate()) 

// Getting date
console.log(now.getDate()) 

// Getting day
console.log(now.getDay()) 

// Getting minutes
console.log(now.getMinutes())

// Getting seconds
console.log(now.getSeconds()) 


const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 

