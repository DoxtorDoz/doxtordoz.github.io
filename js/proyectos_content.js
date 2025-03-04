import {Proyecto} from './proyectos/proyecto.js';
//TODO: ARREGLAR PARA QUE SOLO CARGUE EL CONTENIDO AL HACER CLICK (EVITAR CARGAS INNECESARIAS)
export async function getProyectosContent() {

    //TODO: CORREGIR PARA AÑADIR LOS PROYECTOS EN MOVIL CORRECTAMENTE

    const proyectos = [];

    //este creo que no hará falta :p
    const main = document.createElement("div");
    main.id = "proyectos-main";

    const header = document.createElement("div");
    header.id = "proyectos-header";

    const title = document.createElement("h2");
    title.innerHTML = "Proyectos";

    const exp = document.createTextNode("Estos son algunos de los proyectos que he desarrollado a lo largo del tiempo:");

    header.appendChild(title);
    header.appendChild(exp);
    main.appendChild(header);

    const listaProyectos = document.createElement("div");
    listaProyectos.id = "proyectos-list";


    async function getProyectosJSON(){
        try{
            const data =  await fetch("./js/proyectos/proyectos.json");
            const jsonData = await data.json();
            jsonData.forEach(art =>{
                proyectos.push(Object.assign(new Proyecto(), art));
            });
        }catch(err){
            console.error("Error al extraer los proyectos: ", err);
        }

        for(let i = 0 ; i < proyectos.length ; i++){
            listaProyectos.appendChild(await proyectos[i].getProyectoItem()); 
        }
    }

    await getProyectosJSON();

    main.appendChild(listaProyectos);

    const articuloProyecto = document.createElement("div");
    articuloProyecto.id = "proyecto-articulo";

    main.appendChild(articuloProyecto);

    return main;
}