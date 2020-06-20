const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const cardId = card.getAttribute("id")
        var title = document.getElementById('title').innerHTML
        var chef = document.getElementById('chef').innerHTML
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/DesafioFoodFy/assets/${cardId}.png`
        document.getElementById('modal-title').innerHTML = title
        document.getElementById('modal-chef').innerHTML = chef
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})