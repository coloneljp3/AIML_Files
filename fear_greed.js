const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi');
xhr.setRequestHeader('x-rapidapi-key', 'c9e1ba1068msh8b06cdfb8aea4abp1b9e39jsnde2ed664bedd');
xhr.setRequestHeader('x-rapidapi-host', 'fear-and-greed-index.p.rapidapi.com');

xhr.send(data);