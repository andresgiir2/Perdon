const texts = ["Hola mi amor","Se que hoy he estado algo distante", "No es en mala onda", "Quiero pedirte disculpas de nuevo","Queria hacer algo distinto a lo de siempre", 
    "Hice esto con tu color favorito", "Bueno es rosa led para que se vea bien","Así bonito como tú", "Se que ayer fallé", "Se que no te molesto que me durmiera",
    "Sino que fue el hecho que te dijera que me esperaras", "Y realmente lo hiciste", "Quiero pedirte disculpas por eso","No fue nada lindo eso", 
    "Quiero saber si aceptas mi mas sinceras disculpas", "Te Quiero muchisimos","No quiero que esto te haga pensar que quizás no te quiero tanto como lo suelo decir", 
    "Se que me equivoco mucho con este tipo de cosas", "Se  que estoy lejos y dejarte un mensaje al wpp lo hace cualquiera para disculparse",
    "Quizás sere muy raro, o quizás no", "Pero quise dedicarle tiempo a esto aunque sea muy poco para lo que tu mereces", "Gracias por llegar a mi vida", "Tengo una sorpresa mas para ti",
    "Pero de eso te enteraras pronto", "Por otra parte, dejame un mensaje al Wpp si aceptas mis mas sinceras disculpas", "Este tulipan virtual es para ti 🌷"];
let index = 0;
let charIndex = 0;
let currentText = '';
const textElement = document.getElementById('text');

function type() {
    if (charIndex < texts[index].length) {
        currentText += texts[index].charAt(charIndex);
        textElement.textContent = currentText;
        charIndex++;
        setTimeout(type, 100); // Velocidad de escritura
    } else {
        setTimeout(deleteText, 1000); // Esperar antes de borrar
    }
}

function deleteText() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, charIndex - 1);
        textElement.textContent = currentText;
        charIndex--;
        setTimeout(deleteText, 50); // Velocidad de borrado
    } else {
        index = (index + 1) % texts.length; // Cambiar a la siguiente frase
        charIndex = 0; // Reiniciar el índice de caracteres
        setTimeout(type, 500); // Esperar antes de escribir de nuevo
    }
}

type(); // Iniciar la escritura
