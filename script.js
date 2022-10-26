const words = [
    {
        word: "addition",
        hint: "The process of adding numbers",
    },
    {
        word: "meeting",

        hint: "Event in which people come together",
    },

    {
        word: "number",

        hint: "Math symbol used for counting",
    },

    {
        word: "exchange",

        hint: "The act of trading",
    },

    {
        word: "canvas",

        hint: "Piece of fabric for oil painting",
    },

    {
        word: "garden",

        hint: "Space for planting flower and plant",
    },

    {
        word: "pocket",

        hint: "A bag for carrying small items",
    },

    {
        word: "needle",

        hint: "A thin and sharp metal pin",
    },

    {
        word: "expert",

        hint: "A person with extensive knowledge",
    },

    {
        word: "statement",

        hint: "A declaration of something",
    },

    {
        word: "second",

        hint: "one-sixtieth of a minute",
    },

    {
        word: "library",

        hint: "Place containing collection of books",
    },

    {
        word: "friend",

        hint: "Person other than a family member",
    },

    {
        word: "field",

        hint: "Area of land for farming activities",
    },

    {
        word: "store",

        hint: "Large shop where goods are traded",
    },

    {
        word: "taste",

        hint: "Ability of a tongue to detect flavour",
    },

    {
        word: "group",

        hint: "A number of objects or persons",
    },

    {
        word: "country",

        hint: "A politically identified region",
    },

    {
        word: "expansion",

        hint: "The process of increase or grow",
    },

    {
        word: "tongue",

        hint: "The muscular organ of mouth",
    },

    {
        word: "comfort",

        hint: "A pleasant feeling of relaxation",
    },

    {
        word: "feather",

        hint: "Hair like outer covering of bird",
    },
    {
        word: "position",

        hint: "Location of someone or something",
    },
];

const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    inputField = document.querySelector("input"),
    timeText = document.querySelector(".time b"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return (timeText.innerText = maxTime);
        }

        clearInterval(timer);
        alert(
            `Time out! ${correctWord.toLocaleUpperCase()} was the correct word`
        );
        initGame();
    }, 1000);
};

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(randomObj);
};
initGame();
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (!userWord) return alert("please enter a word check");
    if (userWord !== correctWord)
        return alert(`Oops! ${userWord} is not a correct word`);
    alert(`congrats! ${userWord.toLocaleUpperCase()} is a correct word`);
    initGame();
};

document.onkeydown = function (x) {
    console.log(x.keyCode);
    if (x.keyCode == 13) {
        checkWord();
    }
};
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
