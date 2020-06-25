// Manipulando a Dom //
const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const imagemId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `/assets/${imagemId}`    })
}

document.querySelector(".close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

