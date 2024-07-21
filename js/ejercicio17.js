function decimalesBinarios() {
    const binario=document.getElementById("n").value
    const decimal=document.getElementById("n2").value
    const resultado=document.getElementById("resultado")
    resultado.innerHTML=""
    if (binario) {
        const dec=parseInt(binario, 2)
        resultado.innerHTML+=`Binario a Decimal: ${dec}<br>`
    }
    if (decimal) {
        const bin=parseInt(decimal).toString(2);
        resultado.innerHTML+=`Decimal a Binario: ${bin}. A continuacion le mostrare como convertir de binario a decimal. En este codigo utilizamos if y else para binario y decimal. En if convertimos de binario a decimal y en else de decimal a binario`
        let imagen=document.getElementById("imagen")
        imagen.src="https://i.ytimg.com/vi/PtX_nWKMOxw/maxresdefault.jpg"
        imagen.style.display='inline'
    }
}
