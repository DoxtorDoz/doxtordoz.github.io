import {getInicioContent} from "./inicio_content.js";
import { getProyectosContent } from "./proyectos_content.js";
import { getConocimientosContent } from "./conocimientos_content.js";
import { getExperienciaContent } from "./experiencia_content.js";
import { getContactoContent } from "./contacto_content.js";
import { newWindow } from "./new_window.js";

export class UIManager{

    constructor(){
        this.ventanaActiva = "";
        this.tipo = "";
    }

    init(){
        this.tipo = "inicio";
        this.cargarBotonesNavegacion();
    }
    
    cargarBotonesNavegacion(){
        this.cargar_contenido("init_btn", getInicioContent(), "inicio")
        this.cargar_contenido("proyectos_btn", getProyectosContent(), "proyectos")
        this.cargar_contenido("conocimientos_btn", getConocimientosContent(), "conocimientos")
        this.cargar_contenido("experiencia_btn", getExperienciaContent(), "experiencia")
        this.cargar_contenido("contacto_btn", getContactoContent(), "contacto")
    }

    obtenerVentanaContenido(){
        return document.getElementById('window-content-i');
    }

    borrarContenidoVentana(){
        const contenido = this.obtenerVentanaContenido();
        contenido.innerHTML = "r"
    }

    cambiarPestana(){
        const barra = document.getElementById('contenedor-barra');
    }


    cargar_contenido(nombre_boton, funcionContenido, activa){
        const btn =  document.getElementById(nombre_boton);
        btn.addEventListener("click", ()=> {
            if( btn.getAttribute("active") != "true"){
                newWindow(activa,funcionContenido,activa, nombre_boton);
                console.log(activa);
                this.ventanaActiva = activa;
                btn.setAttribute("active","true")
            }
        })
    }
}