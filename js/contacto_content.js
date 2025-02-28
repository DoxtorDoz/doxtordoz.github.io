import { loadHTML } from "./loadHTML.js";

export function getContactoContent() {

    return loadHTML("/html/contacto.html", "contacto",null);
}