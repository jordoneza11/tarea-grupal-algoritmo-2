function numerosPerfectos(){
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let imagen=document.getElementById("imagen")
    numero=parseInt(numero)
    let suma=0
    for (let i=2; i<numero; i++) {
        if (numero%i===0) {
            break
        }
    }
    if (suma===numero) {
        resultado.innerHTML=numero+" es un número perfecto. A continuacion le dejo como saber si un numero es perfecto. En este codigo creamos la variable suma y utilizamos el bucle for que recorra desde 2 hasta uno menos el numero dado y utilizamos if para verificar si algun numero es perfecto y romper el bucle con break. Luego, utilizamos if para verificar si la variable suma es igual al numero dado para lanzar el mensaje de que es numero perfecto o si no else si no lo es"
        let imagen=document.getElementById("imagen")
        imagen.src="https://tiopetrus.blogia.com/upload/Form_perf.jpg"
        imagen.style.display='inline'
    } 
    else {
        resultado.innerHTML=numero+" no es un número perfecto. A continuacion le dejo como saber si un numero es perfecto o no. En este codigo creamos la variable suma y utilizamos el bucle for que recorra desde 2 hasta uno menos el numero dado y utilizamos if para verificar si algun numero es perfecto y romper el bucle con break. Luego, utilizamos if para verificar si la variable suma es igual al numero dado para lanzar el mensaje de que es numero perfecto o si no else si no lo es"
        let imagen=document.getElementById("imagen")
        imagen.src="https://tiopetrus.blogia.com/upload/Form_perf.jpg"
        imagen.style.display='inline'
   }
}