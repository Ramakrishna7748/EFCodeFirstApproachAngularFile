import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  CustomerId:any;
  result:any;
  constructor(private myservice:MyserviceService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.CustomerId=this.ar.snapshot.params['CustomerId'];
      this.myservice.viewcustomerServicebyId(this.CustomerId).subscribe(r=>{this.result=r;});
    }
  
    backtoView()
    {
      this.router.navigate(['/homepage']);
    }

}

