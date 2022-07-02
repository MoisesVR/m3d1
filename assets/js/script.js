document.getElementById("buttonTotal").onclick = function(){
    /* guarda los datos de la cantidad ingresada */
    let totalquantify = document.getElementById("quantity").value;
    /* guarda el valor del color seleccionado */
    let color = document.getElementById("color");
    /* guarda el valor del id del color seleccionado */
    let selection = color.selectedIndex;
    /* guarda el valor del precio seleccionado */
    let prices = document.getElementById("price");
    /* guarda el valor del id del precio seleccionado */
    let select = prices.selectedIndex;
    /* agrega al parrafo text-total los datos obtenidos de la cantidad y del precio seleccionado */
    document.querySelector('#text-total').innerHTML = "Total: " + totalquantify * price.options[select].value;
    /* agrega al parrafo text-quantity los datos obtenidos de la cantidad */
    document.querySelector('#text-quantity').innerHTML = "Cantidad: " + totalquantify;
    /* guarda el valor del color seleccionado */
    let colorf = color.options[selection].value;
    /* cambia el color de fondo del circulo */
    document.querySelector('#circle').style.backgroundColor = colorf;
    /* evita el reinicio automatico de los datos */
    event.preventDefault();
    /* restea los datos seleccionados del formulario */
    document.querySelector("form").reset();
} 