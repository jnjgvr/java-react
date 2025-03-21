document.addEventListener("DOMContentLoaded", () =>{
    const request = new XMLHttpRequest();
    const ENDPOINT = "https://api.chucknorris.io/jokes/random";

    let btnNext = document.querySelector(".nes-btn") as HTMLElement;
    let contenedorFrase = document.querySelector(".nes-text") as HTMLElement;

    btnNext.addEventListener('click',() => obtenerFraseAPI());

    const obtenerFraseAPI = () =>{
        request.open('GET', ENDPOINT, true);
        request.send();
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status === 200){
                    let response = JSON.parse(request.responseText)
                    contenedorFrase.innerText = response.value;
                } else {
                    console.log("Error : " + request.responseText)
                }
            }
        }
    }
})