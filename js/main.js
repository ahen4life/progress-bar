window.onload = function () {

  var requestURL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xbf0776118b8c7e41b2409295307d557ca16fa989&address=0x334592C96de5c21009F4A7424d64Eec117AfB315&tag=latest&apikey=ZDKXHZTTJDJFHMZQC7WJRV5H7BCPBBYIFK';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();

  request.onload = function() {
    var scoreText = request.response
    var score = JSON.parse(scoreText);
    displayData(score);
  }

  function displayData(e) {
    document.getElementById('score').textContent = e.result;
    document.getElementById('progress-bar').style.width = e.result + '%';
  }

}
