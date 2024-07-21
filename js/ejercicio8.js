function suma() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let suma=0
    for (let i=1; i<=numero; i++){
        suma+=i
    }
    resultado.innerHTML="La suma de 1 hasta "+numero+" es "+suma+". A continuacion le mostrare como resolver el ejercicio con un ejemplo. En este codigo tuvimos que utilizar bucles como lo es for para recorrer desde 1 hasta la variable i y definimos una variable suma para que pueda sumar i"
    let imagen=document.getElementById("imagen")
    imagen.src="https://storage.dtelab.com.ar/cdn-uploads/3bbabbfd-2fb3-47ef-85b3-e918e45e7d78.png"
    imagen.style.display='inline'
}