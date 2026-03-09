const input  = document.querySelector("input");
const button = document.querySelector("button");

const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

const userStats = document.getElementById("userStats");

const repoList = document.getElementById("repoList");

button.addEventListener("click",async function(){
    const username = input.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoResponse.json();
    // console.log(repoData);
    repoList.innerHTML = "";

   repoData.forEach(function(repo){
    const repoItem = document.createElement("a");
    repoItem.textContent = repo.name;
    repoItem.href = repo.html_url;
    repoItem.target = "_blank";
    repoItem.classList.add("block");

    repoList.appendChild(repoItem);
});

    followers.textContent = data.followers;
    following.textContent = data.following;
    repos.textContent = data.public_repos;

    userStats.classList.remove("hidden");
    repoList.classList.remove("hidden");

})

