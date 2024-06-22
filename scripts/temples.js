function myFunction(x) {
    x.classList.toggle("change");
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('show');
}

function handleNavLinkClick(event) {
    event.preventDefault(); // Prevent default link behavior (page scroll)

    const section = this.dataset.section; // Get the section identifier from data-section attribute
    const mainHeading = document.querySelector('main h2'); // Select the main heading

    // Update the main heading text based on the section
    switch (section) {
        case 'home':
            mainHeading.textContent = 'Home';
            break;
        case 'old':
            mainHeading.textContent = 'Old Temples';
            break;
        case 'new':
            mainHeading.textContent = 'New Temples';
            break;
        case 'large':
            mainHeading.textContent = 'Large Temples';
            break;
        case 'small':
            mainHeading.textContent = 'Small Temples';
            break;
        default:
            mainHeading.textContent = 'Home'; // Default fallback
            break;
    }

    // Close the menu after selecting a section (optional)
    const navigation = document.getElementById('navigation');
    navigation.classList.remove('show');
    const container = document.querySelector('.container');
    container.classList.remove('change');
}

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#navigation a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavLinkClick);
    });
});

// Set the current year and last modified date in the footer
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const container = document.querySelector('.container');
    const h1 = document.querySelector('h1');
    const nav = document.getElementById('navigation');

    // Esconder h1 e mostrar container em telas menores
    if (window.innerWidth < 768) {
        h1.style.display = 'none';
        container.style.display = 'inline-block';
    } else {
        h1.style.display = 'block';
        container.style.display = 'none';
    }

    // Listener para ajustar visibilidade ao redimensionar a tela
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            h1.style.display = 'none';
            container.style.display = 'inline-block';
        } else {
            h1.style.display = 'block';
            container.style.display = 'none';
        }
    });
});