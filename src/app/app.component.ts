import { Component } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Helloworld';
  editT: boolean = false;
  selectedStudent: any = null; 
  
  students = [
    { id:1,name: "asad", age: "31"},
    { id:2,name: "ganesh", age: "33" },
    { id:3,name: "kiran", age: "23" },
    { id:4,name: "anjith", age: "21"}
  ];

  toggle: boolean = true;

  ToggleTheButton() {
    this.toggle = !this.toggle;
  }


  editButton(student: any) {
    this.editT = !this.editT;
    this.selectedStudent = { ...student }; 
  }


  deleteStudent(name: string) {
    this.students = this.students.filter(student => student.name !== name);
  }


  addStudent(id: any, name: any,age: any) {
    if (id.value != null && name.value != null && age.value != null) {
      this.students.push({ id: id.value, name: name.value, age: age.value });
    }
  }

  updateStudent() {
    if (this.selectedStudent) {
     
      const index = this.students.findIndex(student => student.name === this.selectedStudent.name);
      if (index !== -1) {
        this.students[index] =this.selectedStudent;
      }
    }
    this.editT = !this.editT;
  }
}
