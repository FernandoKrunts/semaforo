let img = document.querySelector('#image');
const automatico = setInterval(auto,6000);

function yellow (){
    img.setAttribute("src" ,'img/amarelo.png' );
}

function red(){
    img.setAttribute("src" ,'img/vermelho.png' );
}
function green(){
    img.setAttribute("src" ,'img/verde.png' );
}
function off(){
    clearInterval(automatico);
    img.setAttribute("src" ,'img/desligado.png' );
}





function auto(){
    setTimeout(yellow , 1000);
    setTimeout(green ,2000);
    setTimeout(red, 3000);
    
    console.log(automatico)
}









