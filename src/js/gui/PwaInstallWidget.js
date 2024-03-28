import  mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"
import { DeviceBrowserController } from "../controllers/DeviceBrowserController.js";

//This PwaInstallWidget is a widget
//Its responsability is just to show something to the user
//The actually any pwa feature/function is performed by
//PwaController class
//This class ask form that class when needs 
export class PwaInstallWidget{
    
    #renderProperties = {
        label : "Instalar Neste Dispositivo",
        action : "pwa_install"
    }    
    
    #template;
    #elm;

    constructor(tmplId,elmId){//installPwaWebAPPWidgetTmpl,installPwaWebAPP
        this.#template = document.getElementById(tmplId).innerHTML;
        this.#elm = document.getElementById(elmId);
    }

    render(){        
        this.#elm.innerHTML = mustache.render(this.#template, this.#renderProperties);
    }
     
    showPwaInstallationPrompt(){
        window.app.pwaCtrl.showInstallPrompt();
    }
}
