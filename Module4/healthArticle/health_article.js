var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

articles.forEach(function){
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = articles.title;

    var description = document.createElement('p');
    description.textContent = articles.description;

    var 
}