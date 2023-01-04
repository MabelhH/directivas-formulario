import { Component ,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  public formlogin!:FormGroup;
  correo!:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit():void{
    this.formlogin = this.formBuilder.group({
      nombre:['',
        [
          Validators.required,
          Validators.minLength(10) 
        ]
      ],
      correo:['', 
        [
          Validators.required,
          Validators.email
        ]
      ]
  })
  this.loadAPI()
}
loadAPI():any{
  const response = {
    nombre:'mabel huanaco ',
    correo: 'clahuanaco23@gmail.com', 
  };

  this.formlogin.patchValue(response);
}

send(): any{
  console.log(this.formlogin.value)
}
  
}
