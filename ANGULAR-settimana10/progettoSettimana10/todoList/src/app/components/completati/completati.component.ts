import { Component, OnInit } from '@angular/core';
import { TodosInterface } from 'src/app/models/todos-interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  tasks: TodosInterface[] = [];
  recuperoTasks: boolean = true;

  constructor(private tasksSrv: TodosService) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.tasks = this.tasksSrv.recuperaTodo();
    this.recuperoTasks = false;
    }, 2000);
  }

}
