import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor() {    
}
title = 'Helloworld';
editT: boolean = false;
selectedStudent: any = null; 

students = [
  { id:1,name: "anil", age: "31"},
  { id:2,name: "giri", age: "33" },
  { id:3,name: "praba", age: "23" },
  { id:4,name: "akash", age: "21"}
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
