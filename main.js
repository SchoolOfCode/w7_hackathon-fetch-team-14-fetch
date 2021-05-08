// MAIN PLAN FOR STEP 1

// STEP 1 
// request data and see what we get back
// async function starWars(){
//     let response = await fetch ("https://swapi.dev/api/planets/3/")
//     let data = await response.json();
//     console.log(data)
// }
// starWars()


// plan for the dad joke 
// generate random dad joke 
// make a button that gets the joke 
// disolay the joke 

const dadJoke = document.querySelector ("#jokeButton");
const joke =document .querySelector ("#joke")


async function dadJokes(){
    let response = await fetch (" https://icanhazdadjoke.com/",
    {headers: { accept: "application/json" },
      });
    let data = await response.json();
    joke.innerHTML =  data.joke
}
dadJokes()

//  step create a random g buttonenerating 
dadJoke.addEventListener("click", dadJokes)