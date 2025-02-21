
import { periodicoDigital } from "./project_periodico_digital.js";
import { tiendaMoviles } from "./project_tiendaMoviles.js";

let projects = {
    "periodicoDigital": periodicoDigital(),
    "tiendaMoviles": tiendaMoviles()
}


export function project_manager(key){
    return projects[key];
}