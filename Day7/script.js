const BTN = document.querySelector('.btn');
const COUPON = document.querySelector('.coupon')



const copyText = (e) => {
    e.preventDefault();

    COUPON.select();
    COUPON.setSelectionRange(0, 999999);
    document.execCommand("copy");

    BTN.textContent = "Copied!"

    setTimeout(() => {
        BTN.textContent = "Copy"
    }, 3000)
}

BTN.addEventListener("click", copyText)
