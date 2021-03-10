const texts = ["Bonjour!", "Je m\'appelle Olivier"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let secondanim = 0;


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
    }

    if (count === 1 && secondanim === 0){
        secondanim = 1;
        setTimeout(type,750);

    } else{
        setTimeout(type,100);
    }


}()); 