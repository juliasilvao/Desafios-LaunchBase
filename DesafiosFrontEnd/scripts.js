const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const pageId = card.getAttribute("id")
        if (modal.classList.contains("maximize") == true) {
            modal.classList.remove("maximize")
        }
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.rocketseat.com.br/${pageId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})

document.querySelector('.maximize-modal').addEventListener("click", function() {
    if (modal.classList.contains("maximize") == false) {
        modal.classList.add("maximize")
    }
})

document.querySelector('.minimize-modal').addEventListener("click", function() {
    if (modal.classList.contains("maximize") == true) {
        modal.classList.remove("maximize")
    }
})