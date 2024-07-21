function arregloPrimos() {
    let arreglo=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let imagen=document.getElementById("imagen")
    let numerosPrimos=[]
    let numeros=arreglo.split(',').map(Number)
    for (let i=0; i<numeros.length; i++) {
        let numero=numeros[i]
        if (numero>1) {
            let esPrimo=true
            for (let j=2; j<=Math.sqrt(numero); j++) {
                if (numero%j===0) {
                    esPrimo=false
                    break
                }
            }
            if (esPrimo) {
                numerosPrimos.push(numero)
            }
        }
    }
    
    resultado.innerHTML="Números primos en el arreglo: "+numerosPrimos.join(', ')+". Recuerde que todos los numeros primos son aquellos que son divisibles por ellos mismos. A continuacion el codigo. Este código convierte una cadena de números separados por comas en una cadena, luego verifica cuáles de esos números son primos y los añade a la cadena los numeros primos. Utiliza un bucle para comprobar la primalidad de cada número, verificando divisores hasta la raíz cuadrada del número"
    imagen.src='../img/arregloprimos.png'
    imagen.style.display='inline'
}
