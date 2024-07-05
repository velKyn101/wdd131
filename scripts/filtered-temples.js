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
            mainHeading.textContent = 'Home | All Temples';
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
            mainHeading.textContent = 'Home | All Temples'; 
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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "images/aba-temple.webp"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/manti-temple.webp"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "images/payson-temple.webp"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "images/yigo-temple.webp"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "images/dc-temple.webp"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "images/lima-temple.webp"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "images/mxcity-temple.webp"
    },
    // Add more temple objects here...
    {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Brazil",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl: "images/curitiba-temple.webp"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl: "images/rj-temple.webp"
    },
    {
        templeName: "Sao Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "images/sp-temple.webp"
    }
  ];

createTempleCard(temples);

const home = document.getElementById("home");
home.addEventListener("click", () => {
    createTempleCard(temples);
});

const old = document.getElementById("old");
old.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
});

const neww = document.getElementById("new");
neww.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
});

const large = document.getElementById("large");
large.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
})

const small = document.getElementById("small");
small.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
})



function createTempleCard(temples) {
    document.querySelector(".res-grid").innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
    
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="bold">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="bold">Dedicated:<span> ${temple.dedicated}`;
        area.innerHTML = `<span class="bold">Area:<span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("Loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
})}