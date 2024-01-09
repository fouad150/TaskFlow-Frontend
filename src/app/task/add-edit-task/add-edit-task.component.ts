import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {
  constructor( private taskService: TaskService,private router:Router) { }
  ngOnInit(): void {

  }

  create(): void {
}

}
