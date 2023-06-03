import { Component, OnInit } from '@angular/core'
import { TodosInterface } from 'src/app/models/todos-interface';
import { TodosService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks: TodosInterface[] = [];
  title: string = '';


  constructor(private tasksSrv: TodosService) { }

  ngOnInit(): void {
    this.tasks = this.tasksSrv.recuperaTodo();
    console.log(this.tasks)
   }

  nuovaTask(title: string) {
    if (title === '') {
      alert("INSERIRE UNA TASK!!!!");
    } else {
    this.tasksSrv.aggiornaTodo(title);
    }
  }

  deleteTask(task: TodosInterface): void {
    this.tasksSrv.deleteTask(task);
    }

  completati(i: TodosInterface) {
  i.completed = true;
}

}

