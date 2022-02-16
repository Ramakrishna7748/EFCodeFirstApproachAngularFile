import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] 
})
export class HomepageComponent implements OnInit {
  result: any;
  newId: any;
  modalService: any;

  addcustomer: any;
  data: any;
  message: any;


  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit(): void {
    this.myservice.displaycustomer()
    .subscribe(r=>
      {
        this.result=r;
      });

      this.addcustomer= new FormGroup(
        {
          FirstName:new FormControl(),
         LastName:new FormControl(),
          Country:new FormControl(),
          CreatedDate:new FormControl()
         
        }
      ); 
  }
deletecus(CustomerId :any)
{
  this.myservice.deletecustomer(CustomerId)
  .subscribe((r:any)=>
    {
      this.result=r;
      alert("are you sure you want to delete this entry");
      window.location.reload();
      alert("Deleted Successfully");
    });
}

updatecus(CustomerId :any)
{
  this.newId=CustomerId;
  this.router.navigate(['/update',CustomerId]);
}

viewcus(CustomerId :any)
{
  this.newId=CustomerId;
  this.router.navigate(['/View',CustomerId]);
}

backtoView()
    { 
      this.router.navigate(['homepage']);
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
      this.myservice.Addcustomer(this.data).subscribe(res=>{this.result=res;
      this.router.navigate(['/homepage']);  
      window.location.reload();
    });

      
  }

}
