import { AppGui_ShowView_CustomEvent } from "./AppGui_ShowView_CustomEvent.js";

class AppGui_ShowView_EventTarget extends EventTarget {
  
  constructor(strEventName, eventOptions = {}){      
    super(strEventName, eventOptions)  
 } 

  triggerAppEventTarget(evtName, evtData) {
    //if(!evtData.viewName) throw new Error("AppGui_ShowView_CustomEvent needs define viewName property")    
    const event = new AppGui_ShowView_CustomEvent(evtName, evtData );
    this.dispatchEvent(event);
  }

}

export { AppGui_ShowView_EventTarget }