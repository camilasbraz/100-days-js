const USERLOCATION = document.querySelector(".location");
const BTN = document.querySelector(".btn");

BTN.addEventListener("click", () => {
    console.log( navigator.geolocation.getCurrentPosition(showPosition))
    navigator.geolocation.getCurrentPosition(showPosition);

})


function showPosition(position) {
    console.log("cliqye")
    USERLOCATION.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude}

    `;
}

