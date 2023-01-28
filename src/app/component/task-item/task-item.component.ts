import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
    @Input() task: Task;
    @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
    @Output() onToggleRem: EventEmitter<Task> = new EventEmitter();
    faTimes = faTimes;
    constructor() {
      this.task = {text:"test", day:"test", reminder:true}
    }
    ngOnInit(): void {
      
    }
    onDelete(task: Task){
      this.onDeleteTask.emit(task);
    }
    onToggle(task: Task){
      this.onToggleRem.emit(task);
    }
}
