/* const getImagenPromesa = () => new Promise( resolve => resolve('https://wwww.asd.com'));
getImagenPromesa().then(console.log) */

const getImagen = async() => {
	try {
		
 		const apiKey = 'VcRKvQVL3r1ygA3kwO3vmWa0TX1Zmx8o';
		const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const {data} = await resp.json();
		const url = data.images.original.url;
		const imgTag = document.createElement('img');
		imgTag.src = url;
		document.body.append(imgTag);
		console.log(url);
	} catch (error) {
		console.error(error);
	}
}

getImagen();

