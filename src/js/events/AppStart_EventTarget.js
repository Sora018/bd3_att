import { AppStart_CustomEvent } from "./AppStart_CustomEvent.js";

class AppStart_EventTarget extends EventTarget {
  
  triggerAppEventTarget(evtName, evtData) {
    //const event = new AppStart_CustomEvent(eventName, { detail: eventData });
    const event = new AppStart_CustomEvent(evtName, {       
      AppStart_CustomEvent_InitTIme: new Date()
    });
    this.dispatchEvent(event);
  }

}

export { AppStart_EventTarget }