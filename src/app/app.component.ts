import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';
import {User} from './model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  data = [];
  user= new User();
  constructor(private fb:FormBuilder) {
    //this.addForm();
  }
  ngOnInit() {
    this.data.push(this.user);
  }

  // addForm():FormGroup {
  //   return this.addform = this.fb.group({
  //     email: [null, [Validators.required, Validators.email]],
  //     password: [null, [Validators.required]]
  //   });
  // }

  // get f() { return this.addform.controls; }

  addDynamicControls() {
    this.user= new User();
    this.data.push(this.user);
  }
  onSubmit() {
    console.log('data',this.data);
  }
  removeControls(index) {
    this.data.splice(index);
  }
}
