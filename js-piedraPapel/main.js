document.addEventListener('DOMContentLoaded', function () {
    var interfazJugador = document.querySelector(".jugador");
    var interfazMaquina = document.querySelector(".maquina");
    var btnPiedra = document.querySelector(".piedra");
    var btnPapel = document.querySelector(".papel");
    var btnTijera = document.querySelector(".tijera");
    var btnPlay = document.querySelector(".play-again");
    var resultPlayer1 = document.querySelector('.player1');
    var resultPlayer2 = document.querySelector('.player2');
    var resultsBox = document.querySelector('.resultados');
    var eleccionJugador = null;
    var eleccionMaquina = null;
    // Verificar si los elementos existen antes de continuar
    if (!interfazJugador || !interfazMaquina) {
        console.error("No se encontraron los elementos .jugador o .maquina.");
        return;
    }
    var numPartidas = 1;
    var elecciones = ['🖐️', '👊', '✌️'];
    btnPlay.addEventListener('click', function (element) {
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
    });
    btnPiedra.addEventListener('click', function (element) {
        if (eleccionJugador === null) {
            var target = element.target;
            var playerSelecction = interfazJugador.querySelector('p');
            eleccionJugador = target === null || target === void 0 ? void 0 : target.textContent;
            playerSelecction.textContent = target === null || target === void 0 ? void 0 : target.textContent;
            turnoMaquina();
        }
    });
    btnPapel.addEventListener('click', function (element) {
        if (eleccionJugador === null) {
            var target = element.target;
            var playerSelecction = interfazJugador.querySelector('p');
            eleccionJugador = target === null || target === void 0 ? void 0 : target.textContent;
            playerSelecction.textContent = target === null || target === void 0 ? void 0 : target.textContent;
            turnoMaquina();
        }
    });
    btnTijera.addEventListener('click', function (element) {
        if (eleccionJugador === null) {
            var target = element.target;
            var playerSelecction = interfazJugador.querySelector('p');
            eleccionJugador = target === null || target === void 0 ? void 0 : target.textContent;
            playerSelecction.textContent = target === null || target === void 0 ? void 0 : target.textContent;
            turnoMaquina();
        }
    });
    var turnoMaquina = function () {
        var maquinaSelection = interfazMaquina.querySelector('p');
        eleccionMaquina = getRandomIcon();
        maquinaSelection.innerText = eleccionMaquina;
        setTimeout(function () {
            var playerSelecction = interfazJugador.querySelector('p');
            playerSelecction.innerText = '❌';
            maquinaSelection.innerText = '⭕';
            btnTijera.style = "display: none;";
            btnPapel.style = "display: none;";
            btnPiedra.style = "display: none;";
            resultPlayer1.style = 'display: none;';
            resultPlayer2.style = 'display: none;';
            btnPlay.style = "display: block;";
            var winner = whoWins(eleccionJugador, eleccionMaquina);
            guardarResultados(winner);
            if (winner === '') {
                console.log('EMPATE');
                resultPlayer1.classList.remove('winner');
                resultPlayer1.classList.remove('looser');
                resultPlayer2.classList.remove('winner');
                resultPlayer2.classList.remove('looser');
                //MOSTRAR EMPATE 
            }
            else {
                if (winner === eleccionJugador) {
                    console.log('GANA PLAYER 1');
                    resultPlayer1.innerText = 'WINNER';
                    resultPlayer1.classList.add('winner');
                    resultPlayer2.innerText = 'LOOSER';
                    resultPlayer2.classList.add('looser');
                    resultPlayer1.style = 'display: block;';
                    resultPlayer2.style = 'display: block;';
                }
                else {
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
    };
    var getRandomIcon = function () {
        var indiceAleatorio = Math.floor(Math.random() * elecciones.length);
        var eleccionAleatoria = elecciones[indiceAleatorio];
        return eleccionAleatoria;
    };
    var whoWins = function (simbolo1, simbolo2) {
        switch (simbolo1) {
            case '🖐️':
                if (simbolo2 === '✌️') {
                    return simbolo2;
                }
                else if (simbolo2 === '👊') {
                    return simbolo1;
                }
                else {
                    return '';
                }
                break;
            case '👊':
                if (simbolo2 === '✌️') {
                    return simbolo1;
                }
                else if (simbolo2 === '🖐️') {
                    return simbolo2;
                }
                else {
                    return '';
                }
                break;
            case '✌️':
                if (simbolo2 === '👊') {
                    return simbolo2;
                }
                else if (simbolo2 === '🖐️') {
                    return simbolo1;
                }
                else {
                    return '';
                }
                break;
            default:
                return '';
                break;
        }
    };
    var guardarResultados = function (winner) {
        if (resultsBox) {
            var nuevoHTML = "<div class=\"resultado-item\">\n                <h4>Partida ".concat(numPartidas, "</h4>\n                <div class=\"resultado\">\n                    ").concat(winner === eleccionJugador
                ? "<div class=\"resultado-ganador\">".concat(eleccionJugador, "</div>\n                               <div class=\"resultado-perdedor\">").concat(eleccionMaquina, "</div>")
                : winner === eleccionMaquina
                    ? "<div class=\"resultado-perdedor\">".concat(eleccionJugador, "</div>\n                               <div class=\"resultado-ganador\">").concat(eleccionMaquina, "</div>")
                    : "<div class=\"resultado-empate\">".concat(eleccionJugador, "</div>\n                               <div class=\"resultado-empate\">").concat(eleccionMaquina, "</div>"), "\n                </div>\n            </div>");
            // Agrega el nuevo HTML al inicio de resultsBox
            resultsBox.insertAdjacentHTML('afterbegin', nuevoHTML);
            // Verifica si hay más de 6 elementos y elimina el más antiguo
            var resultados = resultsBox.querySelectorAll('.resultado-item');
            if (resultados.length > getMaxResults()) {
                resultsBox.removeChild(resultados[resultados.length - 1]); // Elimina el último
            }
        }
    };
    var getMaxResults = function () {
        return Math.round(window.innerWidth / 104);
    };
});
