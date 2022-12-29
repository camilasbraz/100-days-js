const IMAGE = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

function setColor() {
    bgColor.classList.add("online")
}

async function connectionStatus() {
    try {
        const fetchResults = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
        IMAGE.src = "./images/online.png";
        setColor();
        return fetchResults.status >= 200 && fetchResults.status < 300
    } catch(error) {
        console.log(error)
        statusDisplay.textContent = "OO0PS!!! Your internet connection is down! "
        IMAGE.src = "./images/offline.png";
        bgColor.classList.remove("online");
    }
}


// Monitor the connection
setInterval( async () => {
    const RESULT = await connectionStatus();
    if (RESULT) {
        statusDisplay.textContent = "You are online!"
        setColor()
    }
        
}, 5000);


//  Check connection when page loads
window.addEventListener("load", async (event) => {
    if(connectionStatus) {
        statusDisplay.textContent = "You are online!";
    } else {
        statusDisplay.textContent = "You are offline!";
    }
  });
