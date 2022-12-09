let nota = prompt('Ingresa una nota numerica');

if(Number(nota)==nota){
    console.log('this is a number');
    if(nota > 0 && nota <= 10){
        if(nota <= 3){
            alert('Muy deficiente');
        }
        else if(nota <= 5){
            alert('Insuficiente')
        }
        else if(nota <= 6){
            alert('suficiente')
        }
        else if(nota <= 7){
            alert('bien')
        }
        else if(nota <= 9){
            alert('Notable')
        }
        else if(nota >= 9){
            alert('sobresaliente')
        }
    }
}else{
    alert('this is not a number');
}