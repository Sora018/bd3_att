import { PWAController } from "./PwaController.js";
import { EventsController_PubSub } from "./../events/EventsController_PubSub.js"
import { AppStart_CustomEvent }    from "./../events/AppStart_CustomEvent.js"
import { AppStart_EventTarget }   from "../events/AppStart_EventTarget.js"

export class AppController{
    #userLoggedIn;
    #state;       

    constructor(isPwaWebApp = true){
        if(isPwaWebApp) {
            this.pwaCtrl = new PWAController();
            this.pwaSetup
        }

        this.pupsub = new EventsController_PubSub();
        
        //its a browser api
        //The customEvent receive in its constructor a string: AppStart_CustomEvent
        //this string works as click event load event and so on
        //this.pupsub.AppStart_CustomEvent = new AppStart_CustomEvent('AppStart_CustomEvent', {
        //    AppStart_CustomEvent_Detail: 'AppStart_CustomEvent.detail : AppStarting',
        //    AppStart_CustomEvent_InitTIme: new Date(),
        //});
        
        this.pupsub.AppStart_EventTarget = new AppStart_EventTarget();           
        this.pupsub.AppStart_EventTarget.addEventListener('AppStart_CustomTarget', (event) => {            
            console.dir(event);            
        });        
        this.pupsub.AppStart_EventTarget.triggerAppEventTarget('AppStart_CustomTarget', {});
    }
    
    login(userInstance){
        console.log("login(userInstance){...");
    }

    setGuiController(guiCtrlInstance){
        this.guiCtrl = guiCtrlInstance;
    }

    pwaSetup(){
        this.pwaCtrl.registerServiceWorker("/sw.js");
    }
}
