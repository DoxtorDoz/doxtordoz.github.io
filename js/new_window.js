let zIndexCounter = 1;
let move = 0;

export function newWindow(vista, contenido, nombre, menuButton){
    /**
     * CREACION DE LA VENTANA
     */
    const window = document.createElement('div');
    window.setAttribute('id',`${vista}`);
    window.setAttribute('class','window');

    /**
     * BARRA DE LA VENTANA
     */
    
    const windowBar = document.createElement('div');
    windowBar.setAttribute('class','window-bar');

    const windowTitle = document.createElement('div');
    windowTitle.setAttribute('class','window-title');
    windowTitle.innerHTML = nombre;

    const windowButtons = document.createElement('div');
    windowButtons.setAttribute('class', 'window-bar-buttons');

    const minimizeButton = document.createElement('button');
    minimizeButton.setAttribute('class', 'w-button');
    minimizeButton.setAttribute('id', 'minimize-w-btn');
    minimizeButton.innerHTML = "-";
    windowButtons.appendChild(minimizeButton);

    const resizeButton = document.createElement('button');
    resizeButton.setAttribute('class', 'w-button');
    resizeButton.setAttribute('id', 'resize-w-btn');
    resizeButton.innerHTML = "□";
    windowButtons.appendChild(resizeButton);

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'w-button');
    closeButton.setAttribute('id', 'close-w-btn');
    closeButton.innerHTML = "x";
    windowButtons.appendChild(closeButton);

    windowBar.appendChild(windowTitle);
    windowBar.appendChild(windowButtons);

    /**
     * CONTENIDO DE LA VENTANA
     */

    const divNav =document.createElement('div');
    divNav.id ="navegacion";

    const windowContent = document.createElement('div');
    windowContent.setAttribute('id',`window-content-${vista}`);
    windowContent.setAttribute('class','window-content');

    if(typeof contenido === "string"){
        windowContent.innerHTML = contenido;
    }else{
        windowContent.appendChild(contenido);
    }

    /**
     * MONTAJE FINAL
     */


    window.appendChild(windowBar);
    window.appendChild(divNav);
    window.appendChild(windowContent);
    traerAlFrente();

    move +=25;
    window.style.top = `${move}px`; 
    window.style.left = `${move}px`; 

    /**
     * FUNCIONES VENTANA
     */

    //BOTONES

    var full_size = false; 

    let oldX = 0, oldY = 0;

    resizeButton.addEventListener("click", ()=> {
        traerAlFrente();
        if (!full_size) {
            oldX = window.style.left;
            oldY = window.style.top;
            window.style.top = "0";
            window.style.left = "0";
            window.style.height = "100%";
            window.style.width = "100%";
        } else {
            window.style.height = "50%";
            window.style.width = "50%";
            window.style.top = oldY; 
            window.style.left = oldX; 
        }
        full_size = !full_size;
    });

    closeButton.addEventListener("click", ()=> {
        window.innerHTML = "";
        window.remove();
        document.getElementById(menuButton).setAttribute("active","false");
        move -=25;
    });

    document.getElementById(menuButton).addEventListener("click",() =>{
        traerAlFrente();
    });

    //DRAGABLE
    let offsetX = 0, offsetY = 0, isDragging = false; 

    function traerAlFrente() {
        zIndexCounter++; 
        window.style.zIndex = zIndexCounter; 
    }

    windowTitle.addEventListener("mousedown", (e) => {
        traerAlFrente()
        isDragging = true;
        offsetX = e.clientX - window.offsetLeft;
        offsetY = e.clientY - window.offsetTop;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(e) {
        if (isDragging) {
            window.style.left = `${e.clientX - offsetX}px`;
            window.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousedown", (e) => traerAlFrente());

    document.getElementById('window-container').appendChild(window);
}