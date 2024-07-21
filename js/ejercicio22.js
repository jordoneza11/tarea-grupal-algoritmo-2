function esPerfecto(numero) {
    let suma=0
    for (let i=1; i<numero; i++) {
        if (numero%i===0) {
            suma+=i
        }
    }
    return suma === numero
}

function arregloPerfectos() {
    const input=document.getElementById('n').value;
    let imagen=document.getElementById("imagen")
    const numeros=input.split(',').map(Number)
    const perfectos=[]

    for (let i=0; i<numeros.length; i++) {
        if (esPerfecto(numeros[i])) {
            perfectos.push(numeros[i])
        }
    }

    document.getElementById('resultado').innerHTML='Números perfectos: '+perfectos.join(', ')+". A continuacion les mostrares el codigo en js de como resolverlo. En este codigo creamos dos function: En el primero Verifica si un número es perfecto sumando sus divisores propios y comparando la suma con el número original. Si son iguales, el número es perfecto. En el segundo Obtiene una cadena de números desde un campo de entrada, la convierte en una cadena de numero y usa la primera function para verificar cuáles de esos números son perfectos"
    imagen.src='../img/arregloperfecto.png'
    imagen.style.display='inline'
}