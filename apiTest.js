// const axios = require("axios");

const url = `https://api.github.com/users/jrchapprogrammer/repos?type=owner`;
let repos = [];
let apiDiv = document.getElementById("api-container");
apiDiv.innerHTML = "";

function generateSuccessHTMLOutput(response) {
  return (
    "<h4>Result</h4>" +
    "<h5>Status:</h5> " +
    "<pre>" +
    response.status +
    " " +
    response.statusText +
    "</pre>" +
    "<h5>Headers:</h5>" +
    "<pre>" +
    JSON.stringify(response.headers, null, "\t") +
    "</pre>" +
    "<h5>Data:</h5>" +
    "<pre>" +
    JSON.stringify(response.data, null, "\t") +
    "</pre>"
  );
}
function getRepos() {
  axios
    .get(url, {
      params: {
        name: ""
      }
    })
    .then(response => (apiDiv.innerHTML = generateSuccessHTMLOutput(response)));
}

getRepos();
console.log(getRepos);
