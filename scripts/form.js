const today = new Date()
document.getElementById("currentYear").innerHTML = today.getFullYear()

document.getElementById("lastModified").innerHTML = document.lastModified;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const select = document.getElementById('products')

products.forEach(prod => {
    let op = document.createElement('option');
    op.value = prod.id;
    op.textContent = prod.name;

    select.append(op)
})


let counter = localStorage.getItem('counter');
const completed = document.querySelector('.completed')
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function () {
    counter = Number(counter) + 1
    localStorage.setItem('counter', counter)
    updateCounter()
})
function updateCounter() {
    if (counter === null) {
        completed.textContent = `The form has been submitted 0 time(s)`
    } else {
        completed.textContent = `The form has been submitted ${counter} time(s)`
    }
}
updateCounter()