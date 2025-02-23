export class Proyecto{
    constructor(id, nombre, descripcion, fecha, articulo){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.articulo = articulo;
    }


    getProyectoItem(){
        const item = document.createElement("div");
        item.classList = "proyecto-item";
        item.id = `${this.id}-item`;

        item.innerHTML = `<div class ="nombre-proyecto">${this.nombre}</div>
            <div class = "fecha-proyecto">${this.fecha}</div>`

        item.addEventListener("click", ()=>{
            console.log(`Clickado en ${this.nombre}`);
        }); 
        return item;
    }

    async getProyectoArticulo(){
        try{
            const articulo = await import(`./projects/${this.articulo}`);
            return `<div class="proyecto-articulo" id="${this.id}-articulo">${articulo()}</div>`;
        }catch(err){
            console.error("Error en la carga del articulo del proyecto\n: ", err);
            return `<p> Error en la carga :(`
        }
    }
}