// Reveal Event
const revealBtn = document.querySelector('.reveal-btn');

const HiddenContent = document.querySelector('.hidden-content');

function revealContent() {

  if(HiddenContent.classList.contains('reveal-btn')) {
    // HiddenContent.classList.remove('reveal-btn')
  } else{
    HiddenContent.classList.add('reveal-btn')
  }
}
revealBtn.addEventListener('click', revealContent)