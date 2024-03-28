class AppGui_ShowView_CustomEvent extends CustomEvent{
   
    AppGui_ShowView_CustomEvent_TriggeredAt;
    
    constructor(strEventName, evtData){
       super(strEventName, evtData)
       console.log(" === constructor(strEventName, eventOptions = {}){...")
       console.log(evtData)
       //if(!eventOptions.viewName) throw new Error("AppGui_ShowView_CustomEvent Should have viewName property to works properly.");
       this.AppGui_ShowView_CustomEvent_TriggeredAt = new Date(); 
       this.AppGui_ShowView_CustomEvent_Action = evtData.evtData.action;
    } 
 }
 
 export { AppGui_ShowView_CustomEvent }