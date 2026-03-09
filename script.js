const input  = document.querySelector("input");
const button = document.querySelector("button");

const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

const userStats = document.getElementById("userStats");

button.addEventListener("click",async function(){
    const username = input.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    followers.textContent = data.followers;
    following.textContent = data.following;
    repos.textContent = data.public_repos;

    userStats.classList.remove("hidden");

})