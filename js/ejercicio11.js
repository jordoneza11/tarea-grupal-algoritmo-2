function tablaMultiplicar() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    resultado.innerHTML=""
    resultado.innerHTML="Tabla de multiplicar del " + numero + ":<br>"
    for (let i=1; i<=10; i++) {
        let resultadoo=numero*i
        resultado.innerHTML+=numero+" x "+i+" = "+resultadoo+"<br>"
        let imagen=document.getElementById("imagen")
        imagen.src="https://s1.significados.com/foto/tablas-del-11-al-20-9a.jpg?class=article"
        imagen.style.display='inline'
    }
}

function tablaSumar() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let resultad0=document.getElementById("resultado")
    numero=parseInt(numero)
    resultado.innerHTML=""
    resultado.innerHTML="Tabla de sumar del "+numero+":<br>"
    for (let i=1; i<=10; i++) {
        let resultadoo=numero+i
        resultado.innerHTML+=numero+" + "+i+" = "+resultadoo+"<br>"
        let imagen=document.getElementById("imagen")
        imagen.src="https://i.pinimg.com/originals/4d/fd/c5/4dfdc512f7560b282d58c0e5e899ab3a.jpg"
        imagen.style.display='inline'
    }
}
