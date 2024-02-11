let quoteList=[
    {
        quote:"I mean, one thing I know about change is we are not going to close the achievement gap without educators.",
        author:"Margaret Spellings"

    },
    {
        quote:"Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.",
        author:"Cesar Chavez"

    },
    {
        quote:" The only way to solve a problem is to take it apart and study the pieces",
        author:" Denise Van Outen"
    },
    {
        quote:"Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art. ",
        author:" Frederic Chopin"
    },
    {
        quote:"The most common way people give up their power is by thinking they don’t have any.",
        author:"Alice Walker"
    }
    ,
    {
        quote:"Winning isn’t everything, but wanting to win is.",
        author:"Vince Lombardi"
    },
    {
        quote:"Either you run the day, or the day runs you.",
        author:"Jim Rohn"
    },
    {
        quote:"Whether you think you can or you think you can’t, you’re right.",author:"Henry Ford"
    },
    {
        quote:"Dreaming, after all, is a form of planning.",
        author:"Gloria Steinem" 
    },
    {
        quote:"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
        author:"Mae Jemison"},
 {
        quote:"You may be disappointed if you fail, but you are doomed if you don’t try.",
        author:"Beverly Sills"},
 {
        quote:"Remember no one can make you feel inferior without your consent.",
        author:"Eleanor Roosevelt"
    },
 {
        quote:"Life is what we make it, always has been, always will be.",author:"Grandma Moses"},

 {
        quote:"The question isn’t who is going to let me; it’s who is going to stop me.",author:"Ayn Rand"},
 {
        quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",author:"Henry Ford"},
 {
        quote:"It’s not the years in your life that count. It’s the life in your years.",author:"Abraham Lincoln"},
 {
    quote:"Change your thoughts and you change your world.",author:"Norman Vincent Peale"},
 {
        quote:"Either write something worth reading or do something worth writing.",author:"Benjamin Franklin"},
 {
        quote:"Nothing is impossible, the word itself says, “I’m possible!”",author:"–Audrey Hepburn"},
 {
        quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"},
 {
        quote:"If you can dream it, you can achieve it.",author:"Zig Ziglar"}

]
let  quoteElement=document.getElementById("quote");
let authorid= document.getElementById("Author");

async function GeneratorAPI(){
    let response= await fetch ("https://api.quotable.io/random");
    console.log(response);
    let quoting= await response.json();
    quoteElement.innerText= quoting.content;
    authorid.innerText=" ~~ "+" "+quoting.author;
}

document.getElementById("Generator").onclick= GeneratorAPI;
