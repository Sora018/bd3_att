class PWAController{

    #deferredPrompt;
    
    //if you will work with pwa
    //you should instance this controller
    //The PwaWidget will be controoled by GuiCOntroller
    constructor(){
        //we do not want browser show the installation widget
        //so we want to prevent it and triggers bu PwaWidget
        window.addEventListener('beforeinstallprompt', (event) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            event.preventDefault();
            // Stash the event so it can be triggered later.
            this.#deferredPrompt = event;
        });
    }

    registerServiceWorker(swFilePath){
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(swFilePath);
        }
    }
    
    // Call this function to show the install prompt
    showInstallPrompt() {
        if (this.#deferredPrompt) {
            this.#deferredPrompt.prompt();
            this.#deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                this.#deferredPrompt = null;
            });
        }
    }
}

export { PWAController }