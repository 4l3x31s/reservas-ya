import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  serializar(objeto: any): any {
    return JSON.parse(JSON.stringify(objeto));
  }
}
