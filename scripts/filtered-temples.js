const today = new Date()
document.getElementById("currentYear").innerHTML = today.getFullYear()

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/320x200/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/320x200/manti-temple-768192-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/208x117/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        smallImageUrl: "images/yigo_guam_temple.webp",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/320x200/washington_dc_temple-exterior-4.jpeg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/320x200/lima-peru-temple-evening-1075606-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/320x200/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/320x200/adelaide-australia-temple-lds-856093-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Hokkaido, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/320x200/sapporo-japan-exterior-day-1744806.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-day-1744806.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles California, United States",
        dedicated: "1956, March, 14",
        area: 190614,
        smallImageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/320x200/los-angeles-temple-766339-wallpaper.jpg",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-temple-766339-wallpaper.jpg"
    },
    // Add more temple objects here...
];

filterTemples(temples)

const homeButton = document.querySelector('.home');
const oldButton = document.querySelector('.old');
const newButton = document.querySelector('.new');
const largeButton = document.querySelector('.large');
const smallButton = document.querySelector('.small');

homeButton.addEventListener('click', () => {
    filterTemples(temples);
})
oldButton.addEventListener('click', () => {
    filterTemples(temples.filter(temp => parseInt(temp.dedicated.toString().slice(0, 4)) < 1900));
})
newButton.addEventListener('click', () => {
    filterTemples(temples.filter(temp => parseInt(temp.dedicated.toString().slice(0, 4)) > 2000));
})
largeButton.addEventListener('click', () => {
    filterTemples(temples.filter(temp => temp.area > 90000));
})
smallButton.addEventListener('click', () => {
    filterTemples(temples.filter(temp => temp.area < 10000));
})


function filterTemples(filtered_temples) {
    const cards = document.getElementById("cards")
    let card = '';

    filtered_temples.forEach((temp) => {
        card += `
    <div class="card">
        <h2>${temp.templeName}</h2>
        <p>Location: ${temp.location}</p>
        <p>Dedicated: ${temp.dedicated}</p>
        <p>Size: ${temp.area} sq ft</p>
        <picture>
            <source srcset="${temp.imageUrl}" alt="Image of ${temp.templeName}" media="(min-width: 37.5em)">
            <img src="${temp.smallImageUrl}" alt="Mobile image of ${temp.templeName}" loading="lazy" width="400" height="250">
        </picture>
    </div>
    `
    })
    cards.innerHTML = card;
}