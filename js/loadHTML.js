export async function loadHTML(archivo, id, elemento){
    try{
        const contenido = await fetch(archivo);
        const html = await contenido.text();
        const domp = new DOMParser();
        let doc = domp.parseFromString(html, 'text/html').body.innerHTML;
        let linea =  `<div class="${elemento}" id="${id}-${elemento}">${doc}</div>`;
        return linea;
    }catch(err){
        console.error("Error en la carga del articulo del proyecto\n: ", err);
        return `<p> Error en la carga :(`
    }
}