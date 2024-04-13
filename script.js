document.getElementById("printButton").addEventListener("click", function() {
    // Fetch data from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Open a new window for printing
    var printWindow = window.open('', '_blank');
    
    // Write HTML content to the new window
    printWindow.document.write("<!DOCTYPE html>");
    printWindow.document.write("<html lang='en'>");
    printWindow.document.write("<head><meta charset='UTF-8'><title>Printed Data</title></head>");
    printWindow.document.write("<body>");
    printWindow.document.write("<h2>Printed Data</h2>");
    printWindow.document.write("<p>Name: " + name + "</p>");
    printWindow.document.write("<p>Email: " + email + "</p>");
    printWindow.document.write("</body></html>");

    // Close the document stream
    printWindow.document.close();

    // Print the new window
    printWindow.print();
});
