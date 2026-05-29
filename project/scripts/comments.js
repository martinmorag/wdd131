const input = document.getElementById("comment")
const button = document.querySelector("#add")
const list = document.getElementById("list")

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

button.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        displayList(input.value)
        chaptersArray.push(input.value)
        setChapterList()
        input.value = "";
        input.focus()
    }
})


let chaptersArray = getChapterList() || []

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

function displayList(item) {
    const li = document.createElement('li')
    const del_button = document.createElement('button')
    li.textContent = item;
    del_button.textContent = '❌';
    del_button.ariaLabel = 'Close';
    li.append(del_button)
    list.append(li)
    del_button.addEventListener('click', function () {
        list.removeChild(li)
        deleteChapter(li.textContent)
        input.focus()
    })
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray))
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList()
}