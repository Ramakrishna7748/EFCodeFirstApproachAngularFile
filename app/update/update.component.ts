import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  addcustomer: any;
  message: any;
  data: any;
  CustomerId!: string | null;
  responseData:  resultData | undefined;
  result: any;

  constructor(private myservice:MyserviceService,  private router:Router,private aR:ActivatedRoute) { }

  ngOnInit(): void {
    this.addcustomer= new FormGroup(
      {
        FirstName:new FormControl(),
       LastName:new FormControl(),
        Country:new FormControl(),
        CreateDate:new FormControl()
      }
    );

    this.CustomerId=this.aR.snapshot.paramMap.get("CustomerId");
    this.myservice.getrecordonID(this.CustomerId).subscribe((r:any)=>{
      this.responseData = r;
      this.addcustomer.controls['FirstName'].setValue(this.responseData?.firstName);
        this.addcustomer.controls['LastName'].setValue(this.responseData?.lastName);
        this.addcustomer.controls['Country'].setValue(this.responseData?.country);
    
    });
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
    this.data.CustomerId=this.CustomerId;
      this.myservice.updatecustomer(this.data).subscribe(res=>{this.result=res;});
        
        this.router.navigate(['/homepage']);
   
      }
    }
  
  interface resultData{
    firstName:string;
    lastName:string;
    country:string;

    CustomerId: number;
  }