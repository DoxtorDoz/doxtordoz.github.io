export class Proyecto{
    constructor(id, nombre, descripcion, fecha, articulo){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.articulo = articulo;
    }


    async getProyectoItem(){
        const item = document.createElement("div");
        item.classList = "proyecto-item";
        item.id = `${this.id}-item`;

        item.innerHTML = `<div class ="nombre-proyecto">${this.nombre}</div>
            <div class = "fecha-proyecto">${this.fecha}</div>`

        item.addEventListener("click", async ()=>{
            //console.log(`Clickado en ${this.nombre}`);

            document.getElementById("proyectos-header").style.display ="none";
            document.getElementById("proyectos-list").style.display = "none";

            const articulo = document.getElementById("proyecto-articulo");

            let content = await this.getProyectoArticulo();
            articulo.insertAdjacentHTML("beforeend",content);
            
            
            articulo.style.display = "block";

        }); 
        return item;
    }

    async getProyectoArticulo(){
        const divNav  = document.getElementById("navegacion");

        const titulo = document.createElement("b");
            titulo.innerText = `POS://proyectos/${this.id}`;

        const backBtn = document.createElement("button");
        backBtn.id ="volver-proyectos";
        backBtn.innerHTML = "Volver"
        backBtn.addEventListener("click", ()=>{
            document.getElementById("proyectos-header").style.display="block";
            document.getElementById("proyectos-list").style.display = "block";
            document.getElementById("proyecto-articulo").style.display ="none";
            document.getElementById(`${this.id}-articulo`).remove();
            backBtn.remove();
            titulo.remove();
        });

        divNav.appendChild(backBtn);
        document.getElementById("navegacion").appendChild(titulo);

        try{
            const articulo = await fetch(`./js/proyectos/html/${this.articulo}`);
            const html = await articulo.text();

            const domp = new DOMParser();
            let doc = domp.parseFromString(html, 'text/html').body.innerHTML;
            let linea =  `<div class="articulo" id="${this.id}-articulo">${doc}</div>`;
            return linea;

        }catch(err){
            console.error("Error en la carga del articulo del proyecto\n: ", err);
            return `<p> Error en la carga :(`
        }
    }
}