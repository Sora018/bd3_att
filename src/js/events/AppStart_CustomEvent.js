class AppStart_CustomEvent extends CustomEvent{
   
   AppStart_CustomEvent_TriggeredAt;
   
   constructor(strEventName, eventOptions = {}){      
      super(strEventName, eventOptions)    
      this.AppStart_CustomEvent_TriggeredAt = new Date(); 
      this.AppStart_CustomEvent_UserLoggedIn = "?"
   } 
}

export { AppStart_CustomEvent }