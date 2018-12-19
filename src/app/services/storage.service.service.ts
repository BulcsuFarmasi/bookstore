
export class StorageService {

    get (key:string) {
        return localStorage.getItem(key);
    }

    set(key:string, item:any) {
        localStorage.setItem(key, JSON.stringify(item));
    }

}
