function ClearImput()
{
    console.group("Practicando");  
    let field = document.getElementById("textbox");
    console.log(`valor limpiado: ${field.value}`);
    field.value = "";
    console.groupEnd();   
}

function CalcularPrecioDescuento()
{
    let  precio = document.getElementById("precio").value;
    let  descuento = document.getElementById("descuento").value;
    let PrecioDescuento = document.getElementById("preciodescuento");
    PrecioDescuento.innerHTML = precio * (100 -descuento)/100;
    return PrecioDescuento;
}