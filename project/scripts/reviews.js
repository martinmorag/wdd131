const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const reviews = [
    {
        "id": 1,
        "author": "Celeste",
        "content": "The Dark Tower is the pentacle of Stephen King’s magnum opus, and I’ve been terrified to get to it. King isn’t known for nailing his landings, and this one is especially controversial. I was afraid that, after reading 8,781 pages, or 3,951,408 words, on my long road to the Tower, I would be left feeling woefully disappointed, and as if I had wasted my time. I’m here to tell you that, thankfully, that isn’t the case. After reading the final pages of The Dark Tower I can safely say that this is my favorite completed series of all time. I’ve never read anything else like it.",
        "date": "June 15, 2022"
    },
    {
        "id": 2,
        "author": "Chelsea Humphrey",
        "content": "Please don't hate me. I know it seems sacrilegious to give a Stephen King anything less than 4 stars, but this one was SLOOOOWWWW for the first 75%. That's not to say I didn't enjoy it, but I did find this was an easy book to put down and not feel an urgency to jump back into for days at a time.",
        "date": "October 8, 2017"
    },
    {
        "id": 3,
        "author": "Baba",
        "content": "Twelve years in the making, and kicking off the story that would envelop King's career, this was finally released in 1992. When I first read it, I thought it was OK, but had zero interest in the Dark Tower or the following books. It was only on reading it a second time, having now read some of the subsequent books, that I could appreciate this scene setting foundation of this series. On this, my third reading (second reading of this revised version), this book is more like a marker to outline the rest of the then yet-to-be written series. First time readers beware this is a magnificent series, so don't let this, at times meandering, other times engrossing opener put you off; and Constant Reader, this is a book you absolutely cannot skip.",
        "date": "July 16, 2023"
    },
    {
        "id": 4,
        "author": "Mario the lone bookwolf",
        "content": "Nothing beats the real Wild West, except a dark fantasy infested badass Kingian character exposition starting one of the best fantasy horror hybrid series of all times.",
        "date": "May 10, 2020"
    },
    {
        "id": 5,
        "author": "Dan",
        "content": "Roland Deschain, the last of the Gunslingers, is on a quest for the Dark Tower, a mysterious edifice that is the axle of worlds and holds all existence together. In this, the first volume, Roland pursues his nemesis across the Mohaine Desert. He follows the man in black's trail to a little town called Tull, then through more desert, encountering a boy named Jake from our world, and then into the mountains. Will Roland finally catch his arch-nemesis after years of pursuing him? And what means will he go to to achieve his goal?",
        "date": "December 20, 2014"
    },
    {
        "id": 6,
        "author": "Jakob J. &#x1f383;",
        "content": "The Man in Black is an iconic adversary, the likes with which King has demonstrated that only he has been able to indelibly stamp. He is a devious villain, pretentious and obtuse; dropping hints of foreboding and soliloquizing on cosmic insignificance to terrific effect without (yet) relying on gun slinging (like our rather simple-minded protagonist, Roland), roaring, or hell raising. He invites madness with a deliciously smooth subtlety.",
        "date": "December 19, 2024"
    },
]


const section = document.querySelector('section');

function populateReviews() {
    reviews.forEach(rev => {
        const div = document.createElement('div');
        div.classList.add('general')
        div.innerHTML = `
            <div class="info">
                <p>Author: <strong>${rev.author}</strong></p>
                <p class="mid">Date: ${rev.date}</p>
            </div>
            <div class="content">
                <p>${rev.content}</p>
            </div>
        `;
        section.append(div)
    })
}
populateReviews()