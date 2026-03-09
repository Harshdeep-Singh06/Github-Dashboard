const input  = document.querySelector("input");
const button = document.querySelector("button");

const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

const userStats = document.getElementById("userStats");

button.addEventListener("click",async function(){
    const username = input.value;
    const response = fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

})