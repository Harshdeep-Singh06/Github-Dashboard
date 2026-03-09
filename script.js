const input  = document.querySelector("input");
const button = document.querySelector("button");

const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

const userStats = document.getElementById("userStats");

button.addEventListener("click",function(){
    const username = input.value;
    fetch(`https://api.github.com/users/${username}`);
})