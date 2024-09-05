var quote=document.getElementById("quote");
var author=document.getElementById("author");
var previousNumber=-1;

var quotesContainer=[
    {
        quote:"“ Be yourself everyone else is already taken. ”",
        author:"Oscar Wilde"
       },
    {
        quote:"“ So many books, so little time. ”",
        author:"Frank Zappa"
    },
    {
        quote:"“ Two things are infinite: the universe and human stupidity and I'm not sure about the universe. ”",
        author:"Albert Einstein"
    }
    ,{
        quote:"“ A room without books is like a body without a soul.”",
        author:"Marcus Tullius Cicero"
    }
    ,{
        quote:"“ You know you're in love when you can't fall asleep because reality is finally better than your dreams. ”",
        author:"Dr. Seuss"
    },
    {
        quote:"“ Be the change that you wish to see in the world. ”",
        author:"Mahatma Gandhi"
    },
    {
        quote:"“ Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend. ”",
        author:"Albert Camus"
    },
    {
        quote:"“ I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ”",
        author:"Maya Angelou"
    },
    {
        quote:"“ Always forgive your enemies nothing annoys them so much. ”",
        author:"Oscar Wilde"
    },
    {
        quote:"“ Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. ”",
        author:"Martin Luther King Jr."
    }
]


// click function
function clickQuote(){
    var randomNumber;
    do{
        randomNumber= Math.floor(Math.random()*(quotesContainer.length))
    }while(previousNumber===randomNumber)
  previousNumber=randomNumber 
  author.innerHTML=quotesContainer[randomNumber].author;
  quote.innerHTML=quotesContainer[randomNumber].quote;
  author.style.display="flex";
  quote.style.display="block";
}