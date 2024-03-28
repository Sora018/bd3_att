class AppLogin_CustomEvent extends CustomEvent{
   
    AppLogin_CustomEvent_TriggeredAt;
    
    constructor(strEventName, eventOptions = {}){        
       super(strEventName, eventOptions)    
       if(!eventOptions.username || !eventOptions.userpass) throw new Error("The Login Event Should have user data");
       this.AppLogin_CustomEvent_TriggeredAt = new Date(); 
       this.AppLogin_CustomEvent_Username = eventOptions.username;
       this.AppLogin_CustomEvent_Username = eventOptions.userpass;
    } 
 }
 
 export { AppLogin_CustomEvent }