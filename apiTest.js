const axios = require("axios");

const url = `https://api.github.com/users/jrchapprogrammer/repos?type=owner`;
let repo = [];
let repoData = {};

function getRepo() {
  axios
    .get(url)
    .catch(error => console.log("BAD", error))
    .then(response => console.log("GOOD", response));
}

/* repo = getRepo(url);
// console.log(repo);

repoData = repo.data;
console.log(repoData); */
getRepo();
