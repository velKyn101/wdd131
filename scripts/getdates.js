window.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});

// Handle bfcache events
window.addEventListener('pageshow', (event) => {
    const perfEntries = performance.getEntriesByType("navigation");
    if (perfEntries[0].type === 'back_forward') {
        console.log('This page was loaded from bfcache.');
    }
});

window.addEventListener('pagehide', (event) => {
    if (event.persisted) {
        console.log('This page is being put into bfcache.');
    }
});