document.addEventListener('DOMContentLoaded', () => {
    let interfazJugador = document.querySelector(".jugador") as HTMLElement;
    let interfazMaquina = document.querySelector(".maquina") as HTMLElement;
    let btnPiedra = document.querySelector(".piedra") as HTMLElement;
    let btnPapel = document.querySelector(".papel") as HTMLElement;
    let btnTijera = document.querySelector(".tijera") as HTMLElement;
    let btnPlay = document.querySelector(".play-again") as HTMLElement;
    let resultPlayer1 = document.querySelector('.player1') as HTMLElement;
    let resultPlayer2 = document.querySelector('.player2') as HTMLElement;
    let resultsBox = document.querySelector('.resultados') as HTMLElement;

    let eleccionJugador: any = null;
    let eleccionMaquina: any = null;
    // Verificar si los elementos existen antes de continuar
    if (!interfazJugador || !interfazMaquina) {
        console.error("No se encontraron los elementos .jugador o .maquina.");
        return;
    }

    let numPartidas = 1;
    const elecciones: string[] = ['🖐️', '👊', '✌️'];

    btnPlay.addEventListener('click', (element) => {
        numPartidas++;
        eleccionJugador = null;
        eleccionMaquina = null;
        btnTijera.style = "display: block;";
        btnPapel.style = "display: block;";
        btnPiedra.style = "display: block;";
        btnPlay.style = "display: none;";
        resultPlayer1.style = 'display: none;';
        resultPlayer2.style = 'display: none;';

        resultPlayer1.classList.remove('winner');
        resultPlayer1.classList.remove('looser');
        resultPlayer2.classList.remove('winner');
        resultPlayer2.classList.remove('looser');
    })

    btnPiedra.addEventListener('click', (element) => {
        if (eleccionJugador === null) {
            let target = element.target as HTMLElement
            let playerSelecction = interfazJugador.querySelector('p') as HTMLElement;
            eleccionJugador = target?.textContent;
            playerSelecction.textContent = target?.textContent;

            turnoMaquina();
        }
    })
    btnPapel.addEventListener('click', (element) => {
        if (eleccionJugador === null) {
            let target = element.target as HTMLElement
            let playerSelecction = interfazJugador.querySelector('p') as HTMLElement;
            eleccionJugador = target?.textContent;
            playerSelecction.textContent = target?.textContent;

            turnoMaquina();
        }
    })
    btnTijera.addEventListener('click', (element) => {
        if (eleccionJugador === null) {
            let target = element.target as HTMLElement
            let playerSelecction = interfazJugador.querySelector('p') as HTMLElement;
            eleccionJugador = target?.textContent;
            playerSelecction.textContent = target?.textContent;

            turnoMaquina();
        }
    })

    const turnoMaquina = () => {
        let maquinaSelection = interfazMaquina.querySelector('p') as HTMLElement;
        eleccionMaquina = getRandomIcon();
        maquinaSelection.innerText = eleccionMaquina;

        setTimeout(() => {
            let playerSelecction = interfazJugador.querySelector('p') as HTMLElement;
            playerSelecction.innerText = '❌';
            maquinaSelection.innerText = '⭕';
            btnTijera.style = "display: none;";
            btnPapel.style = "display: none;";
            btnPiedra.style = "display: none;";
            resultPlayer1.style = 'display: none;';
            resultPlayer2.style = 'display: none;';
            btnPlay.style = "display: block;";

            let winner = whoWins(eleccionJugador, eleccionMaquina);
            guardarResultados(winner);
            if (winner === '') {
                console.log('EMPATE');
                resultPlayer1.classList.remove('winner');
                resultPlayer1.classList.remove('looser');
                resultPlayer2.classList.remove('winner');
                resultPlayer2.classList.remove('looser');
                //MOSTRAR EMPATE 
            } else {
                if (winner === eleccionJugador) {
                    console.log('GANA PLAYER 1');
                    resultPlayer1.innerText = 'WINNER';
                    resultPlayer1.classList.add('winner');
                    resultPlayer2.innerText = 'LOOSER';
                    resultPlayer2.classList.add('looser');
                    resultPlayer1.style = 'display: block;';
                    resultPlayer2.style = 'display: block;';
                } else {
                    console.log('GANA PLAYER 2');
                    resultPlayer1.innerText = 'LOOSER';
                    resultPlayer1.classList.add('looser');
                    resultPlayer2.innerText = 'WINNER';
                    resultPlayer2.classList.add('winner');
                    resultPlayer1.style = 'display: block;';
                    resultPlayer2.style = 'display: block;';
                }
            }
        }, 2000);
    }

    const getRandomIcon = () => {
        const indiceAleatorio = Math.floor(Math.random() * elecciones.length);

        const eleccionAleatoria = elecciones[indiceAleatorio];
        return eleccionAleatoria;
    }

    const whoWins = (simbolo1: string, simbolo2: string) => {
        switch (simbolo1) {
            case '🖐️':

                if (simbolo2 === '✌️') {
                    return simbolo2;
                } else if (simbolo2 === '👊') {
                    return simbolo1;
                } else {
                    return '';
                }
                break;

            case '👊':

                if (simbolo2 === '✌️') {
                    return simbolo1;
                } else if (simbolo2 === '🖐️') {
                    return simbolo2;
                } else {
                    return '';
                }
                break;


            case '✌️':

                if (simbolo2 === '👊') {
                    return simbolo2;
                } else if (simbolo2 === '🖐️') {
                    return simbolo1;
                } else {
                    return '';
                }
                break;
            default:
                return '';
                break;
        }
    }

    const guardarResultados = (winner: string) => {
        if (resultsBox) {
            let nuevoHTML = `<div class="resultado-item">
                <h4>Partida ${numPartidas}</h4>
                <div class="resultado">
                    ${winner === eleccionJugador
                    ? `<div class="resultado-ganador">${eleccionJugador}</div>
                               <div class="resultado-perdedor">${eleccionMaquina}</div>`
                    : winner === eleccionMaquina
                        ? `<div class="resultado-perdedor">${eleccionJugador}</div>
                               <div class="resultado-ganador">${eleccionMaquina}</div>`
                        : `<div class="resultado-empate">${eleccionJugador}</div>
                               <div class="resultado-empate">${eleccionMaquina}</div>`
                }
                </div>
            </div>`;

            // Agrega el nuevo HTML al inicio de resultsBox
            resultsBox.insertAdjacentHTML('afterbegin', nuevoHTML);

            // Verifica si hay más de 6 elementos y elimina el más antiguo
            let resultados = resultsBox.querySelectorAll('.resultado-item');
            if (resultados.length > getMaxResults()) {
                resultsBox.removeChild(resultados[resultados.length - 1]); // Elimina el último
            }
        }
    };

    const getMaxResults = () => {
        return Math.round(window.innerWidth/104);
    }

});
