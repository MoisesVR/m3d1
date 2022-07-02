document.getElementById("buttonTotal").onclick = function(){
    let totalquantify = document.getElementById("quantity").value;
    let color = document.getElementById("color");
    let selection = color.selectedIndex;
    let prices = document.getElementById("price");
    let select = prices.selectedIndex;
    document.querySelector('#text-total').innerHTML = "Total: " + totalquantify * price.options[select].value;
    document.querySelector('#text-quantity').innerHTML = "Cantidad: " + totalquantify;
    let colorf = color.options[selection].value;
    document.querySelector('#circle').style.backgroundColor = colorf;
    event.preventDefault();
    document.querySelector("form").reset();
} 