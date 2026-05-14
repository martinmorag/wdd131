const today = new Date()
document.getElementById("currentYear").innerHTML = today.getFullYear()

document.getElementById("lastModified").innerHTML = document.lastModified;

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const newarr = names.reduce((acc, curr) => acc / names.length)
console.log(newarr)