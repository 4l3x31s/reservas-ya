import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario } from '../models/mdlUsuario';

const ITEMS_KEY = 'usr-reservas';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private storage: Storage) { }
  addItem(item: Usuario): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Usuario[]) =>{
      if (items) {
        items.push(item)
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
  getItems(): Promise<Usuario[]> {
    return this.storage.get(ITEMS_KEY)
  }
  updateItem(item: Usuario): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Usuario[]) => {
      if(!items || items.length === 0) {
        return null;
      }
      let newItems: Usuario[] = [];
      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }
  deleteItem(id: number) {
    return this.storage.get(ITEMS_KEY).then((items: Usuario[]) => {
      if (!items || items.length === 0) {
        return null;
      }
      let toKeep: Usuario[] = [];
      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
