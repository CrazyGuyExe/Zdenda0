const play = document.getElementsByClassName("menub");
const cont = document.getElementsByClassName("cont");
const quest1 = document.getElementById("quest1");
const quiz1 = document.getElementById("panel")  ;
const lore = document.getElementById("lore");
const question = document.getElementById("question");
const next = document.getElementById('next');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
const creds = document.getElementById("creds");
const quest2 = document.getElementById("quest2");
const quest3 = document.getElementById("quest3");
const quest4 = document.getElementById("quest4");
const quest5 = document.getElementById("quest5");
const quest6 = document.getElementById("quest6");
const quest7 = document.getElementById("quest7")
const quest8 = document.getElementById("quest8")
const quest9 = document.getElementById("quest9")
let id = 0
let counter = 1

play[0].onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/vil.png)";
    quest1.style.display = "flex"
    play[0].style.display = "none"
    play[1].style.display = "none"
    play[2].style.display = "none"
    play[3].style.display = "none"
    
}
play[1].onclick = () => {
 lore.style.display = "flex"
 play[0].style.display = "none"
 play[1].style.display = "none"
 play[2].style.display = "none"
 play[3].style.display = "none"
}


play[2].onclick = () => {
    creds.style.display = "block"
    play[0].style.display = "none"
    play[1].style.display = "none"
    play[2].style.display = "none"
    play[3].style.display = "none"
   }

   play[3].onclick = () => {
    location.reload()
    play[0].style.display = "none"
    play[1].style.display = "none"
    play[2].style.display = "none"
    play[3].style.display = "none"
   }

const Questions = [{
    id: 0,
    q: "Kdy se sklízí jablka",
    a: [{ text: "Na Zimu", isCorrect: false },
        { text: "Na Jaře", isCorrect: false },
        { text: "Na Podzim", isCorrect: true },
        { text: "Na Léto", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Z jaké strany se rozdělává dopis",
    a: [{ text: "Zdola", isCorrect: false },
        { text: "Zprava", isCorrect: false },
        { text: "Zleva", isCorrect: false },
        { text: "Zhora", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Kdo je ten nejlepší ředitel ve středočeském kraji",
    a: [{ text: "Zahrada", isCorrect: false },
        { text: "Tyll", isCorrect: false },
        { text: "Bohata", isCorrect: true },
        { text: "Novák", isCorrect: false }
    ]
}
]

cont[0].onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/apple.png)";
    quest1.style.display = "none"
    quiz1.style.display = "flex"
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[1].onclick = () => {
    quest2.style.display = "none"
    document.body.style.backgroundImage = "url(./res/img/chat.png)";
    quest3.style.display= "flex"
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[2].onclick = () => {
    quest3.style.display = "none"
    document.body.style.backgroundImage = "url(./res/img/chatawd.png)";
    quest4.style.display = "flex"
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[3].onclick = () => {
    quest4.style.display = "none"
    quiz1.style.display = "flex";
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[4].onclick = () => {
    quest5.style.display = "none"
    quest6.style.display = "flex"
    document.body.style.backgroundImage = "url(./res/img/skola.png)";
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[5].onclick = () => {
    quest6.style.display = "none"
    document.body.style.backgroundImage = "url(./res/img/skolaB.png)";
    quest7.style.display = "flex"
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[6].onclick = () => {
    quest7.style.display = "none"
    quest8.style.display = "flex"
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

cont[7].onclick = () => {
    quest8.style.display = "none"
    quiz1.style.display = "flex"
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}

var start = true;
var result = document.getElementById("result");
var selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

next.addEventListener("click", () => {
start = false;

 if(selected == "true"){
    id++
    counter++
    question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

if(counter == 2){
    quiz1.style.display ="none"
    quest2.style.display ="flex"
    
    }
    if(counter == 3){
        quiz1.style.display = "none"
        quest5.style.display = "flex"

    }
    if(counter == 4){
        quiz1.style.display = "none"
        quest9.style.display = "flex"
        
    }
}

else if(selected == "false"){
    location.reload()


}})