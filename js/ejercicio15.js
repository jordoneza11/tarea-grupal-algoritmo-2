function suma(){
    let numero1=document.getElementById("n").value
    let numero2=document.getElementById("n2").value
    let resultado=document.getElementById("resultado")
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    suma=numero1+numero2
    resultado.innerHTML="La suma de "+numero1+" y "+numero2+" es "+suma+". A continuacion le presento como sumar numeros con un ejemplo. En este codigo creamos 4 function para la suma, resta, multiplicacion y division y definir una variable para que sume, reste, multiplique o divida los 2 numeros dado por el usuario"
    let imagen=document.getElementById("imagen")
    imagen.src="https://www.videosdematematicas.com/categorias/sites/default/files/styles/large/public/2021-12/2%20mas%202%20-%203%20mas%203.png?itok=8CRxEdae"
    imagen.style.display='inline'
}
function resta(){
    let numero1=document.getElementById("n").value
    let numero2=document.getElementById("n2").value
    let resultado=document.getElementById("resultado")
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    resta=numero1-numero2
    resultado.innerHTML="La suma de "+numero1+" y "+numero2+" es "+resta+". A continuacion le presento como restar numeros con un ejemplo. En este codigo creamos 4 function para la suma, resta, multiplicacion y division y definir una variable para que sume, reste, multiplique o divida los 2 numeros dado por el usuario"
    let imagen=document.getElementById("imagen")
    imagen.src="https://www.wikihow.com/images_en/thumb/2/22/Subtract-Step-8-Version-4.jpg/v4-460px-Subtract-Step-8-Version-4.jpg"
    imagen.style.display='inline'
}
function multiplicar(){
    let numero1=document.getElementById("n").value
    let numero2=document.getElementById("n2").value
    let resultado=document.getElementById("resultado")
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    multiplicacion=numero1*numero2
    resultado.innerHTML="La suma de "+numero1+" y "+numero2+" es "+multiplicacion+". A continuacion le presento como multiplicar numeros con un ejemplo. En este codigo creamos 4 function para la suma, resta, multiplicacion y division y definir una variable para que sume, reste, multiplique o divida los 2 numeros dado por el usuario"
    let imagen=document.getElementById("imagen")
    imagen.src="https://s1.significados.com/foto/multiplicacion-con-decimales-en-ambos-factores-26.jpg?class=article"
    imagen.style.display='inline'
}
function dividir(){
    let numero1=document.getElementById("n").value
    let numero2=document.getElementById("n2").value
    let resultado=document.getElementById("resultado")
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    division=numero1/numero2
    resultado.innerHTML="La suma de "+numero1+" y "+numero2+" es "+division+". A continuacion le presento como dividir con un ejemplo. En este codigo creamos 4 function para la suma, resta, multiplicacion y division y definir una variable para que sume, reste, multiplique o divida los 2 numeros dado por el usuario"
    let imagen=document.getElementById("imagen")
    imagen.src="https://www.mundoprimaria.com/wp-content/uploads/2020/03/divisiones.png"
    imagen.style.display='inline'
}