function numerosPrimos(){
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let imagen=document.getElementById("imagen")
    numero=parseInt(numero)
    let esPrimo=true
    for (let i=2; i<numero; i++) {
        if (numero%i===0) {
            esPrimo=false
            break
        }
    }
    if (esPrimo) {
        resultado.innerHTML=numero+" es un número primo. Le presento una tabla de numeros primos del 1 al 100. En este codigo definimos una variable como verdadera y utilizamos for para recorrer desde 2 hasta uno menos el numero dado y utilizamos if para encontrar un divisor del numero y establecer la variable que creamos antes como falsa y romper el bucle con break"
        imagen.src="https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/10/n%C3%BAmeros-.jpg"
        imagen.style.display='inline'
    } 
    else {
        resultado.innerHTML=numero+" no es un número primo. A continuacion le presentare una tabla con los numeros primos para que haga memoria. En este codigo definimos una variable como verdadera y utilizamos for para recorrer desde 2 hasta uno menos el numero dado y utilizamos if para encontrar un divisor del numero y establecer la variable que creamos antes como falsa y romper el bucle con break" 
        imagen.src="https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/10/n%C3%BAmeros-.jpg"
        imagen.style.display='inline'
    }

}