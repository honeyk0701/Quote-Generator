const quotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Doubt kills more dreams than failure ever will.",
  "Stay hungry. Stay foolish.",
];

const emojis = ["💡", "🔥", "✨", "🚀", "🌟", "🎯", "🎲", "💥", "😎", "🌈"];

function generateQuote() {
  const quoteEl = document.getElementById("quote");
  const emojiEl = document.getElementById("emoji");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomEmoji = Math.floor(Math.random() * emojis.length);

  quoteEl.textContent = quotes[randomIndex];
  emojiEl.textContent = emojis[randomEmoji];
}
