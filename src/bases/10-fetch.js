
const apiKey = 'VcRKvQVL3r1ygA3kwO3vmWa0TX1Zmx8o';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
	.then( resp => resp.json())
	.then( ({data}) => {
		const imagen = data.images.original.url;
		const imgTag = document.createElement('img');

		imgTag.src = imagen; //a su atributo src le agrego la url

		document.body.append(imgTag);
	})
	/* .then(data => {
		//const {images} = data;
		const gif = data.data.images.original.url;
		console.log(gif);
	}) */

.catch(console.warn);