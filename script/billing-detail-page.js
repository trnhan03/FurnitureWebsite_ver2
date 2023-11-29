// Create Bill PDF document
function generatePDF(){
    if (document.getElementById("first-name-input").value == "") {
        alert("Please enter first name");
      } else {
        var doc = new jsPDF();
    
        // Set font size and style for "Bill Details"
        doc.setFontSize(18);
        doc.setFontStyle("bold");
    
        // Calculate the width of the text
        var textWidth = doc.getStringUnitWidth("Bill Details") * doc.internal.getFontSize();
    
        // Calculate the center position of the page with an offset
        var pageWidth = doc.internal.pageSize.getWidth();
        var offsetX = 32; // Adjust the value to move the text to the right
        var centerX = (pageWidth - textWidth) / 2 + offsetX;
    
        // Center the "Bill Details" text
        doc.text(centerX, 20, "Bill Details");
    
        // Reset font size and style for other text
        doc.setFontSize(11);
        doc.setFontStyle("normal");
    
        var fullName = document.getElementById("last-name-input").value + " " + document.getElementById("first-name-input").value;

    // Display
        doc.text(pageWidth - 60, 40, "Brand: " + "Furnishity Store");
        doc.text(pageWidth - 75, 45, "University of Information and Technology");
        doc.text(pageWidth - 60, 50, "Phone Number: " + "0987654321");
        doc.text(pageWidth - 60, 55, "Website: " + "www.furnishity.com");
        doc.text(10, 60, "Full Name: " + fullName);
        doc.text(10, 65, "Address: " + document.getElementById("address-input").value);
        doc.text(10, 70, "Apartment: "+ document.getElementById("info-apartment-input").value);
        doc.text(10, 75, "Town/City: "+ document.getElementById("info-city-input").value);
        doc.text(10, 80, "Phone Number: "+ document.getElementById("numbers").value);
        doc.text(10, 85, "Email: "+ document.getElementById("email").value);
        doc.text(10, 95, "Product Name");
        doc.text(100, 95, "Quantity")
        doc.text(190, 95, "Price");
        var productName = document.querySelector('.shipment-product-name').textContent;
        var productPrice = document.querySelector('.shipment-product-price').textContent;
        doc.text(10, 105, productName);
        doc.text(105, 105, "1");
        doc.text(190, 105, productPrice);
        // Draw a line below the labels
        var lineY = 97; // Adjust the value to position the line
        var lineWidth = 190; // Adjust the value to set the width of the line
        doc.line(10, lineY, 10 + lineWidth, lineY);
        doc.save("invoice.pdf");
      }
}