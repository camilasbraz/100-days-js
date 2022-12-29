const MODAL = document.querySelector(".modal"),
MODALCONTENT = document.querySelector(".modal-content"),
      BTN = document.querySelector(".btn"),  
      CLOSE = document.querySelector('.close'); 




BTN.addEventListener("click", openModal);
CLOSE.addEventListener("click", closeModal);
MODAL.addEventListener("click", closeModal);



function openModal(e) {
    e.preventDefault();
    MODAL.style.display = 'block';
}

function closeModal() {
    MODALCONTENT.classList.add('slide-up')
    setTimeout(() => {
        MODAL.style.display = 'none';
        MODALCONTENT.classList.remove('slide-up')
    }, 500)


}
