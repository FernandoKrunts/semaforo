let automatico = null; 

function changeImage(imageName) { 
    const img = document.querySelector("#image"); 
    img.setAttribute("src", "img/" + imageName + ".png"); 
} 

function off() { 
    if (automatico) { 
        clearInterval(automatico); 
    } 

    changeImage("desligado"); 
} 

function red() { 
    changeImage("vermelho"); 
} 

function green() { 
    changeImage("verde"); 
} 

function yellow() { 
    changeImage("amarelo"); 
} 

function auto() { 
    automatico = setInterval(() => { 
        setTimeout(yellow, 1000); 
        setTimeout(green, 2000); 
        setTimeout(red, 3000); 
    }, 4000); 
} 











