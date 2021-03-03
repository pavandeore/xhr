var data = new FormData();
data.append('email', 'person@gmail.com');

var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.host20.uk/frontend-waitinglist/', true);
xhr.onload = function () {
    console.log(this.responseText);
};
xhr.send(data);