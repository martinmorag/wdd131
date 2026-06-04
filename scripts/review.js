const today = new Date()
document.getElementById("currentYear").innerHTML = today.getFullYear()

document.getElementById("lastModified").innerHTML = document.lastModified;

let counter = localStorage.getItem('counter');
const completed = document.querySelector('.completed')
function updateCounter() {
    if (counter === null) {
        completed.textContent = `The form has been submitted 0 time(s)`
    } else {
        completed.textContent = `The form has been submitted ${counter} time(s)`
    }
}
updateCounter()