import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,StudentsService], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Management';
  newStudent = { id: '', name: '', age: '' };
  students: any[] = []; 
  edit = false;
  selectedStudent: any = null;

  constructor(private studentService: StudentsService) {
    this.students = this.studentService.students; 
  }

  removeStudent(id: string) {
    this.studentService.deleteStudent(id);
    this.students = [...this.studentService.students]; 
  }

  insertStudent() {
    if (this.newStudent.name && this.newStudent.age && this.newStudent.age) {
      this.studentService.addStudent(
        this.newStudent.id,
        this.newStudent.name,
        this.newStudent.age
      );
      this.students = [...this.studentService.students]; 
      this.newStudent = { id: '', name: '', age: '' };
    }
  }

  selectStudent(student: any) {
    this.selectedStudent = { ...student };
    this.edit = true;
  }

  updateStudent() {
    if (this.selectedStudent) {
      this.studentService.updateStudents();
      this.students = [...this.studentService.students]; 
      this.edit = false;
    }
  }
}
