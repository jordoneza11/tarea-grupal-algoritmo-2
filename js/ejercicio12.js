function Fibonacci(){
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    let fibo=[]
    if (numero>=1) fibo.push(0)
    if (numero>=2) fibo.push(1)

    for (let i=2; i<numero; i++) {
        fibo.push(fibo[i-1]+fibo[i-2])
    }

    resultado.innerHTML="Secuencia de Fibonacci: "+fibo.join(", ")+" A continuacion le presento como calcular la secuencia de Fibonacci. En este codigo creamos una cadena que se llama fibo. Si el número es al menos 1, añade 0 a la cadena, y si es al menos 2, añade 1. Luego, usa un bucle for para añadir los siguientes numeros de Fibonacci en la cadena"
    let imagen=document.getElementById("imagen")
    imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk2iBRogvXXmqk7vCKNckvZG8SlTk1cEuPA&s"
    imagen.style.display='inline'
}