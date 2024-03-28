class EventsController_PubSub {
    constructor() {
      this.subscribers = {};
    }
  
    subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
  
      this.subscribers[event].push(callback);
    }
  
    // Publish a message to all subscribers of a specific event
    publish(event, data) {
      if (this.subscribers[event]) {
        this.subscribers[event].forEach((callback) => {
          callback(data);
        });
      }
    }
  }

  export { EventsController_PubSub }
