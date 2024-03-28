import  mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"
import { DeviceBrowserController } from "../controllers/DeviceBrowserController.js";
import { AppGui_ShowView_EventTarget } from "./../events/AppGui_ShowView_EventTarget.js "

export class Drawer {

    btnToggleDrawerElm;
    drawerElm;
    
    drawerMnuItens = [
        {
            label : "Login",
            elmId : "drawerMnuItem_Login",
            action: "open_view_login"
        },        
        {
            label : "Cadastrar Aluno",
            elmId : "drawerMnuItem_cad_aluno",
            action: "open_view_cadastrar_aluno"
        },
        {
            label : "Cadastrar Carteirinha",
            elmId : "drawerMnuItem_cad_carteirinha",
            action: "open_view_cadastrar_carteirinha"
        },        
        {
            label : "Importar Cadastro de Alunos do Csv",
            elmId : "drawerMnuItem_import_csv_de_alunos",
            action: "open_view_importar_alunos"
        },
        {
            label : "Entregar Carteirinha (Associar Aluno X Carteirinha)",
            elmId : "drawerMnuItem_assoc_alun_carteirinha",
            action: "open_view_associar_alun_cart"
            
        },
        {   
            label : "Relatorios",
            elmId : "drawerMnuItem_relatorios",
            action: "open_view_relatorios"
        },
        {   
            label : "Relatorios",
            elmId : "drawerMnuItem_relatorios",
            action: "open_view_relatorios"
        }       
    ]; 

    constructor(drawerId, btnToggleId) {        
        this.drawerElm = document.getElementById(drawerId);
        this.drawerElm.style.display = "none"; //drawer initial state
        this.btnToggleDrawerElm = document.getElementById(btnToggleId);
        this.btnToggleDrawerElm.addEventListener("click",this.toggleDrawer.bind(this));

        this.AppGui_ShowView_EventTarget = new AppGui_ShowView_EventTarget(); 
        this.AppGui_ShowView_EventTarget.addEventListener('AppGui_ShowView_EventTarget', (event) => {
            console.log("window.app.pupsub.AppGui_ShowView_EventTarget.addEventListener('AppGui_ShowView_EventTarget', (event) => {...");
            console.log(event);
            //window.guiCtrl[event.action](event);
        });
    }


    render(){
        const template = document.getElementById("DrawerMenuTmpl").innerHTML;
        const renderedMenu = mustache.render(template, { mnuItens: this.drawerMnuItens });
        this.drawerElm.innerHTML = renderedMenu;        
    }
    
    #openDrawer() {
        console.log("openDrawer() {...");
        this.drawerElm.style.display = "block";
    }

    #closeDrawer() {
        console.log("closeDrawer() {...");
        this.drawerElm.style.display = "none";
    }

    toggleDrawer() {
        console.log("toggleDrawer() {...");
        if (this.drawerElm.style.display === "none") {
            this.#openDrawer();
        } else {
            this.#closeDrawer();
        }
    }

    execMenuItemAction(mnuItemEvtSrc, action){        
        if (typeof this[action] === 'function') {
            let evtData = {}   
            evtData.action = action;            
            this.AppGui_ShowView_EventTarget.triggerAppEventTarget('AppGui_ShowView_EventTarget', { evtData });
        } else {
            console.error(`Function ${action} is not defined`);
        }
    }

    
    open_view_login(evt) {
        console.log(evt);
    }

    open_view_cadastrar_aluno(evt) {
        console.log(evt);
    }

    open_view_cadastrar_carteirinha(evt) {
        console.log(evt);
    }

    open_view_importar_alunos(evt) {
        console.log(evt);
    }

    open_view_associar_alun_cart(evt) {
        console.log(evt);
    }

    open_view_relatorios(evt) {
        console.log(evt);
    }
    
}
