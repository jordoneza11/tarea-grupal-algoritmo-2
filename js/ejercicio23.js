function calcularPromedioModa() {
    const input=document.getElementById('notas').value
    const notas=input.split(',').map(Number)
    let suma=0
    const frecuencia={}
    let moda=[]
    let maxFrecuencia=0
    for (let i=0; i<notas.length; i++) {
        suma+=notas[i]
        if (frecuencia[notas[i]]) {
            frecuencia[notas[i]]++
        } else {
            frecuencia[notas[i]]=1
        }
        if (frecuencia[notas[i]]>maxFrecuencia) {
            maxFrecuencia=frecuencia[notas[i]]
        }
    }
    for (const key in frecuencia) {
        if (frecuencia[key]===maxFrecuencia) {
            moda.push(Number(key))
        }
    }
    const promedio=suma/notas.length

    document.getElementById('resultado').innerHTML='Promedio: '+promedio.toFixed(2)+'<br>Moda: '+moda.join(', ')+". A continuacion les mostrare como resolver este ejercicio en forma de codigo. Este código calcula la moda y el promedio de una cadena que se llama nota. Suma todos los valores y cuenta la frecuencia de cada número. Determina la frecuencia máxima y encuentra los números que ocurren con esa frecuencia, añadiéndolos a la cadena moda. Finalmente, calcula el promedio dividiendo la suma total por la cantidad de elementos en notas"
    let imagen=document.getElementById("imagen")
    imagen.src='../img/arreglomoda.png'
    imagen.style.display='inline'
}