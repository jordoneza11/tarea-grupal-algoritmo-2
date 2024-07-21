function invertirCadena() {
    let cadena=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let cadenaInvertida=""
    for (let i=cadena.length-1; i>=0; i--){
        cadenaInvertida+=cadena[i]
    }
    resultado.innerHTML=cadenaInvertida+". A continuacion le mostrare el codigo de como resolverlo. En este codigo creamo una cadena para mostrarla en el resultado y utilizamos el bucle for para recorrer desde la cadena original desde la ultima letra hasta la primera para invetir la cadena y mostrarla en la cadena que creamos antes"
    let imagen=document.getElementById("imagen")
    imagen.src="../img/cadena.png"
    imagen.style.display='inline'
} 