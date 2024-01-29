
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


const dynamicText = document.querySelector("h1 span");
const words = ["DIGITAL."];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();


function openImage(imageUrl) {
    window.open(imageUrl, '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.Btn');

    btn.addEventListener('click', function () {
      // Rolar suavemente para o topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('.checkbox');
    var body = document.body;

    document.querySelector('.switch-label').addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;
      body.classList.toggle('light-theme', checkbox.checked);
    });
  });


  document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    
    if (!isValidEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault(); // Impede o envio do formulário se o e-mail não for válido
    }

    // Outras verificações de validação podem ser adicionadas conforme necessário
});

function isValidEmail(email) {
    // Simples verificação de e-mail para este exemplo
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}