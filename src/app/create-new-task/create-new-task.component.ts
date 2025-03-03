import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrl: './create-new-task.component.css'
})
export class CreateNewTaskComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<{ title: string; description: string; status: string; priority: string }>();

  taskTitle = '';
  taskDescription = '';
  priority = 'Low';

  saveTask() {
    if (!this.taskTitle.trim()) return;

    this.taskCreated.emit({
      title: this.taskTitle,
      description: this.taskDescription,
      status: 'Pending',
      priority: this.priority
    });

    this.taskTitle = '';
    // this.closeForm.emit();
  }
  close() {
    // Close the create task form
    this.closeForm.emit();
  }
}
