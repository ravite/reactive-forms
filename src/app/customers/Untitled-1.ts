

Reactive forms 

normal html form and control will be done by ts file


1.generate customer component
2.add heading
3. Reactive forms import things


app.module.ts

import { ReactiveFormsModule } from '@angular/forms';
imports: [
    ReactiveFormsModule
  ],

customer component

import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';



4.create model or form object

create customer component

export class Customer {

  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public sendCatalog = false,
    public addressType = 'home',
    public street1?: string,
    public street2?: string,
    public city?: string,
    public state = '',
    public zip?: string) { }
}



5. Add form input fields


6.import model class in Customer component
import { Customer } from './customer';


create one variable

customer = new Customer();

