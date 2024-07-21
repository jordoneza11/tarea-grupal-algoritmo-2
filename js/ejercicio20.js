function textoMayor(){
    let texto1=document.getElementById("n").value
    let texto2=document.getElementById("n2").value
    let resultado=document.getElementById("resultado")
    let imagen=document.getElementById("imagen")
    let numPalabras1=(texto1.match(/\b\w+\b/g) || []).length
    let numPalabras2=(texto2.match(/\b\w+\b/g) || []).length
    if (numPalabras1>numPalabras2){
        resultado.innerHTML=texto1+" tiene mas palabras que "+texto2+". A continuacion le mostrare como resolvimos el ejercicio. En este codigo creamos dos variables donde definimos cada caracter de los texto ingresados y utilizamos if y else para saber quien tiene mas palabras"
        imagen.src="../img/20.png"
        imagen.style.display='inline'
    }
    else if (numPalabras2>numPalabras1) {
        resultado.innerHTML=texto2+" tienes mas palabras que "+texto1+". A continuacion le mostrare como resolvimos el ejercicio"
        imagen.src="../img/20.png"
        imagen.style.display='inline'
    }
    else {
        resultado.innerHTML="Sus textos son iguales. A continuacion le mostrare como resolvimos el ejercicio"
        imagen.src='../img/20.png';
        imagen.style.display='inline'
    }
}