import {Proyecto} from './proyectos/proyecto.js';
//TODO: ARREGLAR PARA QUE SOLO CARGUE EL CONTENIDO AL HACER CLICK (EVITAR CARGAS INNECESARIAS)
export async function getProyectosContent() {

    const proyectos = [];

    const main = document.createElement("div");
    main.id = proyectos-main;

    const title = document.createElement("h2");
    title.innerHTML = "Proyectos";

    const exp = document.createTextNode("Estos son algunos de los proyectos que he desarrollado a lo largo del tiempo:");

    main.appendChild(title);
    main.appendChild(exp);

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
            listaProyectos.appendChild(proyectos[i].getProyectoItem()); 
        }
    }

    //TODO
    function prepararProyectos(){
    }

    await getProyectosJSON();

    main.appendChild(listaProyectos);

    const articuloProyecto = document.createElement("div");
    articuloProyecto.id = "proyecto-articulo";

    const divNav = document.createElement("div");

    const backBtn = document.createElement("button");
    backBtn.id ="volver-proyectos";
    backBtn.innerHTML = "Volver"

    divNav.appendChild(backBtn);

    articuloProyecto.appendChild(divNav);

    main.appendChild(articuloProyecto);

    return main;
}