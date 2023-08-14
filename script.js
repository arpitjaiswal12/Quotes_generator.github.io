let quotes = document.getElementById("quotes");
let text = document.getElementById("text");
let author = document.getElementById("author");
let tweet=document.getElementById("tweetME");

// https://twitter.com/intent/tweet
// https://type.fit/api/quotes

const api = "https://type.fit/api/quotes";

let data = "";
let random_count = 0;
let tweetData="";
const genrateQuotes = async () => {
  try {
    const response = await fetch(api);
    data = await response.json();
  } catch (error) {
    console.log("Data is not found");
  }
  random_count = Math.floor(Math.random() * 17);
  console.log(random_count);
  console.log(data[random_count].text);
  console.log(data[random_count].author);
  tweetData=data[random_count].text;
  text.innerHTML = data[random_count].text;
  author.innerHTML = "-" + data[random_count].author;
};

const tweetNow=()=>{
    let post=`https://twitter.com/intent/tweet?text=${tweetData}`
    window.open(post);
}


let butt = document.getElementById("random_button");
tweet.addEventListener("click",tweetNow)
butt.addEventListener("click", genrateQuotes);
