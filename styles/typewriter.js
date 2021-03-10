const texts = ["Bonjour!", "Je m\'appelle Olivier"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type(){

    currentText = texts[count];
    console.log(currentText);
    letter = currentText.slice(0, ++index);
 

    if (count ==0){
    document.querySelector('.typing').textContent = letter;
} else if (count == 1) {
    document.querySelector('.typingTwo').textContent = letter;
}

    if (letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(10000);
    }

    setTimeout(type, 100);

}());