class Proyecto{
    constructor(id, nombre, descripcion, fecha, articulo){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.articulo = articulo;
    }

    getProyectoItem(){
        return `
        <div class = "proyecto-item" id = "${this.id}">
            <div class = "nombre-proyecto">${this.nombre}</div>
            <div class = "fecha-proyecto"> Fecha: ${this.fecha}</div>
        </div>
        `;
    }

    getProyectoArticulo(){
        return `<div class="proyecto-articulo"></div>`;
    }
}