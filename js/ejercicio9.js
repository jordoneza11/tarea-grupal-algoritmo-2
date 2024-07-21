function factorial() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let factorial=1
    numero=parseInt(numero)
    for (let i=1; i<=numero; i++){
        factorial*=i
    }
    resultado.innerHTML="El numero factorial de "+numero+" es "+factorial+". A continuacion les voy a mostrar como calcular un numero factorial con ejemplos. En este codigo tuivmos que utilizar un bucle como lo es for para que recorra desde 1 hasta la variable i y crear una variable que se llame factorial para que multiplique con i"
    let imagen=document.getElementById("imagen")
    imagen.src="https://programacionconphp.com/wp-content/uploads/2019/09/factorial.png"
    imagen.style.display='inline'
}