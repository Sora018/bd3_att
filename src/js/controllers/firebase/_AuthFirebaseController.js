import { fbAuth } from "./_FirebaseAppInitializer.js";

export class _AuthFirebaseController{
    
    _fbAuthInstance;

    constructor(fbAuthInstance){
        this._fbAuth = fbAuth;
    }

    static getInstance(){
        if (this.instance) {
            return this.instance;
        }else{
            this.instance = new _AuthFirebaseController(fbAuth);
            return this.instance;
        }
    }
}

const _authFbController = _AuthFirebaseController.getInstance;

export { _authFbController }