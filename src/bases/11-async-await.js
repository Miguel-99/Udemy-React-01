/* const getImagenPromesa = () => new Promise( resolve => resolve('https://wwww.asd.com'));
getImagenPromesa().then(console.log) */

export const getImagen = async() => {
	try {
		
 		const apiKey = 'LsbydioK5hy3ONtkKCP7djtQeDq8BlJ8';
		const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const {data} = await resp.json();
		const {url} = data.images.original;

		return url;
	} catch (error) {
		console.error(error);
		return 'No existe';
	}
}

