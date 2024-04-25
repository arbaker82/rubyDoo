const quotes = [
    
    "Woof woof!",
    "Life is ruff, but you got this!",
    "Bark less, wag more.",
    "The more you wag, the less you bark.",
    "Paws and reflect.",
    "Every day is a good day with a dog by your side.",
    "I may have short legs, but I've got a big heart.",
    "The best therapist has fur and four legs.",
    "When in doubt, sniff it out!",
    "Be the person your dog thinks you are."
    
];

function generateQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = randomQuote;

}

generateQuote();