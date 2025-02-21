export function getProyectosContent() {

    function proyectoItem(nombre, fecha, key){
        return `
        <div class = "proyecto-item" id = "${key}">
            <div class = "nombre-proyecto">${nombre}</div>
            <div class = "fecha-proyecto"> Fecha: ${fecha}</div>
        </div>
        `;
    }

    function listaProyectosItem(){
        let list = "";
        itemsProyectos.forEach(item =>{
            list += item;
        });
        return list;
    }

    let itemsProyectos = [
        proyectoItem("Página web para tienda de móviles", "2021", "tiendaMoviles"),
        proyectoItem("Periodico digital", "2024", "periodicoDigital"),
        proyectoItem("Aplicación iOS tipo red social", "2022", "appCientifica"),
        proyectoItem("Aplicación web para el control de comidas", "2023", "foodtrack"),
        proyectoItem("Aplicación multiplataforma para la gestión de negocios", "2024", "apiary"),
        proyectoItem("Este portfolio", "2025", "portfolio"),
    ];



    return `
        <h2>Proyectos</h2>
        <p>Estos son algunos de los proyectos que he desarrollado a lo largo del tiempo:</p>
        <br>
        <div class = "proyectos-list">
            ${listaProyectosItem()}
        </div>
        <div class ="proyecto-details"></div>
    `;
}