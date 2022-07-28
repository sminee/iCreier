// Grab things we need bro
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// link txt
playerLivesCount.textContent = playerLives;

// Generate data for cards
const getData = () => [
    {imgSrc: "./images/c1.jpeg", name: "cardul 1" },
    {imgSrc: "./images/c2.jpeg", name: "cardul 2" },
    {imgSrc: "./images/c3.jpeg", name: "cardul 3" },
    {imgSrc: "./images/c4.jpeg", name: "cardul 4" },
    {imgSrc: "./images/c5.jpeg", name: "cardul 5" },
    {imgSrc: "./images/c6.jpeg", name: "cardul 6" },
    {imgSrc: "./images/c7.jpeg", name: "cardul 7" },
    {imgSrc: "./images/c8.jpeg", name: "cardul 8" },
    {imgSrc: "./images/c1.jpeg", name: "cardul 1" },
    {imgSrc: "./images/c2.jpeg", name: "cardul 2" },
    {imgSrc: "./images/c3.jpeg", name: "cardul 3" },
    {imgSrc: "./images/c4.jpeg", name: "cardul 4" },
    {imgSrc: "./images/c5.jpeg", name: "cardul 5" },
    {imgSrc: "./images/c6.jpeg", name: "cardul 6" },
    {imgSrc: "./images/c7.jpeg", name: "cardul 7" },
    {imgSrc: "./images/c8.jpeg", name: "cardul 8" },
    
];
 const data = getData();
//randomizu
 
const randomize = () => {
    const cardData = getData();
    
    cardData.sort(() => Math.random()- 0.5);
    return cardData;

}

// Card Generator Function

const cardGeneratoru = () => {
    const cardData = randomize();
// Generate HTML boah
cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach info to cardss
    face.src = item.imgSrc;
card.setAttribute('name', item.name);
    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
    })
 });

};
//Check Cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".togglecard");
    console.log(flippedCards);
    // Logica
    if (flippedCards.length === 2) {
        if (
        flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
        ) {
        console.log("match");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
        })
    } else {
        console.log("wrong");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
            restart("try again bro");
        }
    }
    }
    //Run a check to see if we won the game
    if (toggleCard.length === 16){
        restart("You won bro");
    }
};

// Restart the game if you lose your lives

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");
        // Randomize
        setTimeout(()=> {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
}
cardGeneratoru();

