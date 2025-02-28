/**
 * Hay 2 tipos de retornos:
 * Elementos y contenedores
 * Ya los explicare
 * 
 * Normalmente el caso de los contenedores se va a dar super poco, por ejemplo
 * solo en el apartado de contacto, donde no tengo que tener listas ni
 * otros elementos que requieran de inyección como el apartado de proyectos con la
 * lista de proyectos.
 */

export async function loadHTML(archivo, id, elemento){
    try{
        const contenido = await fetch(archivo);
        const html = await contenido.text();
        const domp = new DOMParser();
        let doc = domp.parseFromString(html, 'text/html').body.innerHTML;
        if(elemento == null){
            return `<div id="${id}">${doc}</div>`;
        }
        return `<div class="${elemento}" id="${id}-${elemento}">${doc}</div>`;
    }catch(err){
        console.error("Error en la carga del archivo\n: ", err);
        return `<p> Error en la carga :(`
    }
}