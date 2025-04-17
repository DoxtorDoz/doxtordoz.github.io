import {getInicioContent} from "./inicio_content.js";
import { getProyectosContent } from "./proyectos_content.js";
import { getConocimientosContent } from "./conocimientos_content.js";
import { getExperienciaContent } from "./experiencia_content.js";
import { getContactoContent } from "./contacto_content.js";
import { newWindow } from "./new_window.js";
import { mobile_manager } from "./mobile_manager.js";

export class UIManager{

    constructor(){
        this.ventanaActiva = "";
    }

    init(){
        this.cargarBotonesNavegacionEscritorio();
        this.cargarBotonesNavegacionMobile();
        setInterval(this.actualizarReloj.bind(this), 1000);
        this.actualizarReloj();
        this.init_inicioMobile();
    }

    /**
     * UIManager de la versión de escritorio
     */
    
    /*Esto deberia cambiarse también? No puedo depender de tener los botones y las funciones en
    importadas de forma estatica... json con botones? o es demasiado rebuscado.
    */
    async cargarBotonesNavegacionEscritorio(){
        this.cargar_contenidoEscritorio("init_btn", () => getInicioContent(), "inicio")
        this.cargar_contenidoEscritorio("proyectos_btn", () => getProyectosContent(), "proyectos")
        this.cargar_contenidoEscritorio("conocimientos_btn", () => getConocimientosContent(), "tecnologias")
        this.cargar_contenidoEscritorio("experiencia_btn", () => getExperienciaContent(), "experiencia")
        this.cargar_contenidoEscritorio("contacto_btn", () => getContactoContent(), "contacto")
    }


    cargar_contenidoEscritorio(nombre_boton, funcionContenido, activa){
        const btn =  document.getElementById(nombre_boton);
        btn.addEventListener("click", async () => {
            if( btn.getAttribute("active") != "true"){
                console.log(activa);
                this.ventanaActiva = activa;
                btn.setAttribute("active","true");
                newWindow(activa,  await funcionContenido() ,activa, nombre_boton);
            }
        })
    }

    actualizarReloj() {
        const reloj = document.getElementById("clock");
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        const segundos = ahora.getSeconds().toString().padStart(2, "0");
    
        reloj.textContent = `${horas}:${minutos}:${segundos}`;
    }
    

    /**
     * UIManager de la versión movil
     */

    async cargarBotonesNavegacionMobile(){
        this.cargarContenidoMobile("mb-bt-inicio", () => getInicioContent());
        this.cargarContenidoMobile("mb-bt-proyectos", () => getProyectosContent());
        this.cargarContenidoMobile("mb-bt-conocimientos", () => getConocimientosContent());
        this.cargarContenidoMobile("mb-bt-experiencia", () => getExperienciaContent());
        this.cargarContenidoMobile("mb-bt-contacto", () => getContactoContent());
    }
    
    cargarContenidoMobile(nombre_boton, funcionContenido){
        const nav = document.getElementById(nombre_boton);
        const windowContent = document.getElementById("contenido-movil");
        const navPro = document.getElementById("navegacion-proyectos")
        nav.addEventListener("click", async () => {
            if(navPro){
                if(document.getElementById('mb-bt-proyectos').getAttribute("active").toString() == "false"){
                    navPro.innerHTML="";
                }
                
            }
            const botones = document.getElementsByClassName("mobile-bar-btn")
            for(let but of botones){
                if(but.id !== nombre_boton){
                    but.setAttribute("active","false")
                }
            }

            if(nombre_boton == 'mb-bt-proyectos'){
                navPro.style="display: block;"
            }else{
                navPro.style = "display: none"
            }

            if( nav.getAttribute("active") != "true"){
                navPro.innerHTML="";
                nav.setAttribute("active","true");
                windowContent.innerHTML="";
                mobile_manager(windowContent, await funcionContenido());
            }

        });
    }

    async init_inicioMobile(){
        const windowContent = document.getElementById("contenido-movil");
        mobile_manager(windowContent, await getInicioContent());   
    }
}