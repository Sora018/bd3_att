export class DeviceBrowserController{

    static isMobileDevice(){
        return /Mobile/.test(navigator.userAgent);
    }

}
