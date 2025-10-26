// --- DOM Elements ---
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-btn');

// --- Quotes Data ---
const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" }
];

// --- Functions ---
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// *** Helper to get initials ***
function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('');
}

// *** Display Quote Function ***
function displayQuote() {
    // Step 1: Get a random quote object from the array
    const quote = getRandomQuote();

    // Step 2: Set the text content of the quote paragraph
    quoteTextElement.textContent = `"${quote.text}"`; // Add quotes around the text

    // Step 3: Display initials along with the author's name
    const initials = getInitials(quote.author);
    quoteAuthorElement.textContent = `- ${quote.author} (${initials})`; 
}

// --- Event Listeners ---
// Display a random quote when the button is clicked
if (newQuoteButton) { // Check if button exists before adding listener
    console.log("Button found, adding listener."); // Debug log
    newQuoteButton.addEventListener('click', displayQuote);
} else {
    console.error("Button with ID 'new-quote-btn' not found.");
}

// --- Initial Load ---
// If you want a random quote on page load, uncomment this line:
// document.addEventListener('DOMContentLoaded', displayQuote);
