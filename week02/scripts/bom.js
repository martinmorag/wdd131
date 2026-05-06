const input = document.getElementById("favchap")
const button = document.querySelector("button")
const list = document.getElementById("list")


button.addEventListener('click', function () {
    if (input.value.trim() === "") {
        button.focus()
    } else {
        const li = document.createElement('li')
        const del_button = document.createElement('button')
        li.textContent = input.value;
        del_button.textContent = '❌';
        del_button.ariaLabel = 'Close';
        li.append(del_button)
        list.append(li)
        del_button.addEventListener('click', function () {
            list.removeChild(li)
            input.focus()
        })
        input.value = ""
        input.focus()
    }
})