function textoContar(){
    let texto=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let numCaracteres=texto.length
    let numVocales=(texto.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g) || []).length
    let numSignos=(texto.match(/[.,:;!?¿¡()\-'"“”‘’]/g) || []).length
    let numEspacios=(texto.match(/\s/g) || []).length
    let numPalabras=(texto.match(/\b\w+\b/g) || []).length
    let numDigitos=(texto.match(/\d/g) || []).length
    resultado.innerHTML=`
        <p>Caracteres: ${numCaracteres}</p>
        <p>Vocales: ${numVocales}</p>
        <p>Signos: ${numSignos}</p>
        <p>Espacios: ${numEspacios}</p>
        <p>Palabras: ${numPalabras}</p>
        <p>Dígitos: ${numDigitos}</p>
    Para este codigo definimos variables y le dimos valores que nos pedia el ejercicio como las comas, vocales, signos, etc. Para eso definimos en cada variable un inicio y un final para que encuentre lo pedido en el ejercicio y luego usar la variable resultado para mostrarlo en la pantalla `;
}