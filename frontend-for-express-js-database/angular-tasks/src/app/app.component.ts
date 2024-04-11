import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-tasks';
  tasks: any = [];
  createTaskForm: FormGroup = this.formBuilder.group({
    name: "",
    description: "",
    due_date: ""
  });

  constructor(private formBuilder: FormBuilder) {}
  
  async ngOnInit(): Promise<void> {

    try {
      const request = await fetch("http://localhost:3000/tasks", { method: 'GET' });
      if (request.ok && request.status === 200) {
        const response = await request.json();
        this.tasks = response.data;
      }
    } catch (error) {

      console.log("Error: ", error);
    }
  }

  async createTask (): Promise<void> {

    try {

      const data = this.createTaskForm.value;
      const request = await fetch("http://localhost:3000/tasks/create", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      });

      if (request.ok == true && request.status == 201) {
        const response = await request.json();
        this.tasks.push(response.data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
