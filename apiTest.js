// const axios = require("axios");

const url = `https://api.github.com/users/jrchapprogrammer/repos?type=owner`;
let repos = [];
let repoData = {};

function getRepos() {
  axios
    .get(url)
    .catch(error => console.log("BAD", error))
    .then(response => console.log("GOOD", response));
}

repos = getRepos(url);
console.log(repos[0]);

const apiDiv = document.querySelector("#api-container");
apiDiv.innerHTML = `<p>${repos}</p>`;
