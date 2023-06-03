import { Injectable } from '@angular/core';
import { TodosInterface } from '../models/todos-interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

tasks: TodosInterface[] = [];

  constructor() { }

  recuperaTodo() {
    return this.tasks;
  }

  aggiornaTodo(title: string) {
    this.tasks.push({id: this.tasks.length + 1,title,completed:false})
  }

  deleteTask(task: TodosInterface):void {
    const cancella = this.tasks.findIndex((i)=> i.id == task.id)
    this.tasks.splice(cancella, 1)
}
}
