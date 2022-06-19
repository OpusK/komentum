const quotes = [
  {
    quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "It's not a bug - it's an undocumented feature.",
    author: "Developer"
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "Martin Golding"
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

console.log(Math.floor(Math.random() * 10) % (quotes.length - 1));
const todaysQuote = quotes[Math.floor(Math.random() * 10) % (quotes.length - 1)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
