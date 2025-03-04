export async function mobile_manager(windowContent, contenido){

    if(typeof contenido === "string"){
        windowContent.innerHTML = contenido;
    }else{
        await windowContent.appendChild(contenido);
    }
}