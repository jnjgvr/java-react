document.addEventListener("DOMContentLoaded", function () {
    var request = new XMLHttpRequest();
    var ENDPOINT = "https://api.chucknorris.io/jokes/random";
    var btnNext = document.querySelector(".nes-btn");
    var contenedorFrase = document.querySelector(".nes-text");
    btnNext.addEventListener('click', function () { return obtenerFraseAPI(); });
    var obtenerFraseAPI = function () {
        request.open('GET', ENDPOINT, true);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    var response = JSON.parse(request.responseText);
                    contenedorFrase.innerText = response.value;
                }
                else {
                    console.log("Error : " + request.responseText);
                }
            }
        };
    };
});
