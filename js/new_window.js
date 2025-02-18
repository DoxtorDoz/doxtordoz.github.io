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

    const windowContent = document.createElement('div');
    windowContent.setAttribute('id',`window-content-${vista}`);
    windowContent.setAttribute('class','window-content');
    windowContent.innerHTML = contenido;

    /**
     * MONTAJE FINAL
     */
    window.appendChild(windowBar);
    window.appendChild(windowContent);

    /**
     * FUNCIONES VENTANA
     */

    //BOTONES

    var full_size = false; 

    resizeButton.addEventListener("click", ()=> {
        if (!full_size){
            window.style = "height:100%; width:100%"
            console.log("agrandar")
        }else{
            window.style = "height:50%; width:50%"
            console.log("resize")
        }
        full_size = !full_size
    });

    closeButton.addEventListener("click", ()=> {
        window.remove();
        document.getElementById(menuButton).setAttribute("active","false");
    });

    //DRAGABLE
    let offsetX = 0, offsetY = 0, isDragging = false;

    windowTitle.addEventListener("mousedown", (e) => {
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

    document.getElementById('window-container').appendChild(window);
}