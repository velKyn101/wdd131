function myFunction(x) {
    x.classList.toggle("change");
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('show');
}

function handleNavLinkClick(event) {
    event.preventDefault(); 
    const section = this.dataset.section; 
    const mainHeading = document.querySelector('main h2'); 


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
            mainHeading.textContent = 'Home'; 
            break;
    }

    const navigation = document.getElementById('navigation');
    navigation.classList.remove('show');
    const container = document.querySelector('.container');
    container.classList.remove('change');
}


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#navigation a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavLinkClick);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const container = document.querySelector('.container');
    const h1 = document.querySelector('h1');
    const nav = document.getElementById('navigation');


    if (window.innerWidth < 768) {
        h1.style.display = 'none';
        container.style.display = 'inline-block';
    } else {
        h1.style.display = 'block';
        container.style.display = 'none';
    }


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