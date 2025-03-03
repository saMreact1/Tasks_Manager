import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  showCreateTask: boolean = false;
  isExpanded: boolean = true;

  tasks: Task[] = [
    {
      title: 'Prepare a weekly progress report',
      description: 'Prepare a weekly progress report for the team',
      status: 'Done',
      priority: 'Urgent'
    }
  ]

  constructor() {}

  ngOnInit() {
    this.loadTasks(); // Load tasks from localStorage on startup
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    // const savedTasks = localStorage.getItem('tasks');
    // if (savedTasks) {
    //   this.tasks = JSON.parse(savedTasks);
    // }
    if (typeof window !== "undefined" && localStorage) {
      const storedTasks = localStorage.getItem("tasks");
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  addTask(task: Task) {
    this.tasks.push(task); // Add the new task to the tasks array
    this.showCreateTask = false; // Hide the create task form
    this.saveTasks()
  }

  onStatusChange(event: Event, task: Task) {
    const selectElement = event.target as HTMLSelectElement;
    task.status = selectElement.value;
    this.saveTasks(); // Save changes to localStorage
  }

  toggleTasks() {
    this.isExpanded = !this.isExpanded;
  }
}
