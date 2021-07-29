import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {
  set(key: string, value: any) {
    if(typeof value !== "string") {
      localStorage.setItem(key, JSON.stringify(value));
    }
    else localStorage.setItem(key, value);
  }

  get(key: string): string {
    let obj = localStorage.getItem(key);
    if(obj == null) {
      return '';
    }
    else return obj;
  }


  delete(key: string): void {
    localStorage.removeItem(key);
  }
}
