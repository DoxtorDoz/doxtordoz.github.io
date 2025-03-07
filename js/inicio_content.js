import { loadHTML } from "./loadHTML.js";

export function getInicioContent() {
    return loadHTML("/html/inicio.html", "inicio",null);
}