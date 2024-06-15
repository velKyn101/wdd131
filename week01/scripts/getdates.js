document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Get the last modified date
    const lastModified = document.lastModified;
    
    // Find the elements in the footer
    const currentYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    
    // Set the text content of the elements
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
    
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});
