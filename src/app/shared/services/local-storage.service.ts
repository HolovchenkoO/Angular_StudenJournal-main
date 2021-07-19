import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  get(key: string): string | null {
    return localStorage.getItem(key);
  }
}
