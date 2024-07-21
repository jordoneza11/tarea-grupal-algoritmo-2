function manejarConversiones() {
    let binario = document.getElementById("n").value
    let hexadecimal = document.getElementById("n2").value
    let resultado = document.getElementById("resultado")
    resultado.innerHTML=""
    if (binario) {
        let hex=parseInt(binario, 2).toString(16).toUpperCase()
        resultado.innerHTML+=`Binario a Hexadecimal: ${hex}<br>`
    }
    if (hexadecimal) {
        let bin=parseInt(hexadecimal, 16).toString(2)
        resultado.innerHTML+=`Hexadecimal a Binario: ${bin}. A continuacion le dejo ejemplos de conversiones. En este codigo utilizamos if y else para el numero binario y hexadecimal. En el if convertimos un numero hexadecimal a binario y el else de hexadecimal a binario`
        let imagen=document.getElementById("imagen")
        imagen.src="https://saberpunto.com/wp-content/uploads/valores-hexadecimales-desentranando-el-sistema-hexadecimal.webp"
        imagen.style.display='inline'
    }
}
