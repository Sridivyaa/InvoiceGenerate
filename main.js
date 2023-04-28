// Function to GeneratePdf
function GeneratePdf() {
    var totalPrice = Number(document.getElementById('price').value) * Number(document.getElementById('quantity').value);
    console.log(totalPrice);
    document.getElementById("totalPrice").innerHTML = totalPrice;
    var element = document.getElementById('form-print');
    html2pdf(element);
}