const input  = document.querySelector("input");
const button = document.querySelector("button");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const userStats = document.getElementById("userStats");
const repoList = document.getElementById("repoList");
const repoHeading = document.getElementById("repoHeading");
const makeRepo = document.getElementById("makeRepo");
const tokenInput = document.getElementById("tokenInput");
const repoNameInput = document.getElementById("repoNameInput");
const createRepoBtn = document.getElementById("createRepoBtn");
const aboutSec = document.getElementById("aboutSec");
 
button.addEventListener("click",async function(){
    const username = input.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoResponse.json();
    // console.log(repoData);
    repoList.innerHTML = "";

    repoData.forEach(function(repo){

        const repoCard = document.createElement("a");

        repoCard.href = repo.html_url;
        repoCard.target = "_blank";

            repoCard.classList.add(
                 "bg-sky-500",
                 "text-white",
                 "px-6",
                 "py-4",
                 "rounded-2xl",
                 "shadow-lg",
                 "cursor-pointer",
                 "text-center",
                 "hover:scale-105",
                 "transition"
            );
        repoCard.textContent = repo.name;
        repoList.appendChild(repoCard)
    });

    followers.textContent = data.followers;
    following.textContent = data.following;
    repos.textContent = data.public_repos;

    userStats.classList.remove("hidden");
    repoList.classList.remove("hidden");
    repoHeading.classList.remove("hidden");
    makeRepo.classList.remove("hidden");
    aboutSec.classList.add("hidden")

})

