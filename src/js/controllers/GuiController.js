import  mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"
import { Drawer } from "./../gui/Drawer.js";
import { DeviceBrowserController } from "./DeviceBrowserController.js";
import { PwaInstallWidget } from "../gui/PwaInstallWidget.js";

class GuiController {


    #guiComponents = {}

    constructor(){
        this.#guiComponents.drawer = new Drawer("drawerMenu", "btnToggleDrawer");
        this.#guiComponents.pwaInstallWidget = new PwaInstallWidget("installPwaWebAPPWidgetTmpl","installPwaWebAPP");
        this.#renderGuiComponents();
    }

    #renderGuiComponents(){
        this.#guiComponents.drawer.render();
        this.#guiComponents.pwaInstallWidget.render();
    }

    showPwaInstallationPrompt(srcElmt, action){
        this.#guiComponents.pwaInstallWidget.showPwaInstallationPrompt(srcElmt, action);
    }

    execDrawerMenuItemAction(mnuItemEvtSrc, action){
       this.#guiComponents.drawer.execMenuItemAction(mnuItemEvtSrc, action);
    }
    
    // //render mustache template id as innerHTML of htmlElmId
    // renderTemplate(tmplId, htmlElmId, data){
    
    //     var template = document.getElementById('userIdentificationWidgetTmpl').innerHTML;
    //     console.log("var template = document.getElementById('userTemplateuserIdentificationWidgetTmpl').innerHTML;");
    //     console.log(template);
        
    //     // Define your data
    //     var data = {
    //         userName: 'User Name' // replace this with the actual user name
    //     };

    //     // Render the template with your data
    //     var rendered = Mustache.render(template, data);

    //     // Insert the resulting HTML into your page
    //     document.getElementById("user_identification_div").innerHTML += rendered;
    
    // }

}

export { GuiController };