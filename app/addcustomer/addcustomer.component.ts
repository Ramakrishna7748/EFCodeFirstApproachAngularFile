import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  addcustomer: any;
  data: any;
  message: any;
  result: any;

  constructor(private myservice:MyserviceService,  private router:Router) { }

  ngOnInit(): void {
    this.addcustomer= new FormGroup(
      {
        FirstName:new FormControl(),
       LastName:new FormControl(),
        Country:new FormControl(),
        CreateDate:new FormControl()
       
      }
    );
  }
  get FirstName()
  {
    return this.addcustomer.get('FirstName');
  }
  get LastName()
  {
    return this.addcustomer.get('LastName');
  }
  
  get Country()
  {
    return this.addcustomer.get('Country');
  }
  get CreateDate()
  {
    return this.addcustomer.get('CreateDate');
  }


  onSubmit()
  {
    
    this.data=this.addcustomer.value;
  
      this.myservice.Addcustomer(this.data).subscribe(res=>{if(res)
        {
          this.message="data inserted one";
  
        }
        else
        {
          this.message="error in data";
        }
        this.router.navigate(['/homepage']);
      }
  )};
  
  }
  

