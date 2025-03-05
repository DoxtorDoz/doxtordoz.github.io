import { loadHTML } from "./loadHTML.js";
export function getConocimientosContent() {

    return loadHTML("/html/conocimientos.html", "Tecnologías", null);
}