// selectionner mes elements
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// evenement click sur le button open pour ouvrir le modal
openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

// // evenement pour fermer le modal
closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});