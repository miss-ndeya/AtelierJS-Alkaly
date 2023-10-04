document.querySelector('#sports').addEventListener('click', function(e) {
  console.log(e.target.id, " est", " cliquer");

  const target = e.target;
  console.log(target);

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
    target.removeAtribute('style')
  }
})


const sports = document.getElementById('sports')
const newSport = document.createElement('li')

newSport.innerText = 'rugby'
newSport.setAttribute('id', 'rugby')
sports.append(newSport)

// document.querySelector('#football').addEventListener('click', function(e) {
//   console.log("je comprends pas l'anglais");

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey'
//   }
// })