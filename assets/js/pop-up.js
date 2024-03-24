document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const popupMessage = document.getElementById("popup-message");

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(response => {
        if (response.status === 200) {
            popupMessage.classList.remove("hidden");
            form.reset();
        } else {
            handleError(response.status);
        }
    })
    .catch(error => {
        handleError(500);
        console.error(error);
    });

    function handleError(status) {
        popupMessage.classList.remove("hidden");
        popupMessage.querySelector("span").innerText = `Error: (${status})`;
    }
});