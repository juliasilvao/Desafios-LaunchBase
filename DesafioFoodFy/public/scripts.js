const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const nav_about = document.querySelector('.nav-about')

for (let i = 0; i < cards.length; i++) {
    // index é a posição do array
    (function(index) {
        // pegando o evento de click
        cards[i].onclick = function() {
                window.location.href = `/recipes/${index}`
            }
            // i é o parametro da função que passa o seu valor para o parametro index
    })(i);
}

debugger
const buttons = document.querySelectorAll('.button')
const elements = document.querySelectorAll('.toggle');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {

        if (buttons[i].innerHTML == "Esconder") {
            elements[i].classList.add('hide');
            buttons[i].innerHTML = "Mostrar"
        } else {
            elements[i].classList.remove('hide');
            buttons[i].innerHTML = "Esconder"
        }
    }
}