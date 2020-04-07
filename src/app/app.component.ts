import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myForm: FormGroup;
  arr: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()]),
      arr2: this.fb.array([
        this.fb.group({lname:['asfd', Validators.required]}),
        this.fb.group({lname:['bbb', Validators.required]}),
        this.fb.group({lname:['',Validators.required]}),
        this.fb.group({lname:['',Validators.required]})

      ]
      )
    })
  }

  createItem() {
    return this.fb.group({
      name: [''],
      pay: ['']
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
