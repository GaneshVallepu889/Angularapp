import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  names="hari"
  student=[{name:"gourav",age:13},{name:"hani",rollno:23}]

}
