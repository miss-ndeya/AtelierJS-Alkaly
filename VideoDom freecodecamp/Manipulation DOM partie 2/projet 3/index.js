// selectionner mes elements
const accordion = document.getElementsByClassName('content-container');

// parcourir les elements de accordion
for(i = 0; i < accordion.length; i++) {

    // ajout ecouteur d'evenements sur chaque elements de accordion
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    }) 
}