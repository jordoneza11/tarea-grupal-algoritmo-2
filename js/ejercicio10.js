function paresImpares(){
let numeroInicial=document.getElementById("n").value
let numeroFinal=document.getElementById("n2").value
let resultado=document.getElementById("resultado")
numeroInicial=parseInt(numeroInicial)
numeroFinal=parseInt(numeroFinal)
resultado.innerHTML=""
if (numeroInicial>numeroFinal) {
    [numeroInicial, numeroFinal] = [numeroFinal, numeroInicial];
}
resultado.innerHTML+="Números pares: "
for (let i=numeroInicial; i<=numeroFinal; i++) {
    if (i%2===0) {
        resultado.innerHTML+=`${i} `
    }
}
resultado.innerHTML+="<br>Números impares: "
for (let i=numeroInicial; i<=numeroFinal; i++) {
    if (i%2!==0) {
        resultado.innerHTML+=`${i} `+". En este codigo tuvimos que utilizar dos bucles que es el for para recorrer desde el primer numero hasta el ultimo y utilizar if para solo colocar los numeros pares y los impares en la respuesta"
        let imagen=document.getElementById("imagen")
        imagen.src="https://www.mundoprimaria.com/wp-content/uploads/2021/01/pares-impares-mini.png"
        imagen.style.display='inline'
    }
}
}