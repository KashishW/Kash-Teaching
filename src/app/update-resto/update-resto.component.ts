import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean=false

  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  updateForm = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl() 
  }) 

  collection:any={}

  ngOnInit(): void {

   console.log( this.router.snapshot.params['id'])

   this.resto.getIdDetails(this.router.snapshot.params['id']).subscribe((data)=>{
    // console.log(data)

    this.collection=data;

    console.log(this.collection)

    this.updateForm = new FormGroup({

      name: new FormControl(this.collection.name),
      email: new FormControl(this.collection.email),
      address: new FormControl(this.collection.address) 
    }) 
   })

   


  }
  collectedData(updateForm){

    this.resto.updateDetails(this.router.snapshot.params['id'],updateForm.value).subscribe((data)=>{
      console.log(data)
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false
  }

}
