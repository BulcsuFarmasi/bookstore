
export class StorageService {

    get (key:string):any {
        console.log(localStorage.getItem(key));
        return JSON.parse(localStorage.getItem(key));
    }

    set(key:string, item:any) {
        localStorage.setItem(key, JSON.stringify(item));
    }

}
