import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  items:any=[]
 

  constructor(private resto:RestoService) { }

  ngOnInit(): void {

      this.resto.getItems().subscribe((data)=>{
        // console.log(data);
       
        this.items=data
        
      })
  }
  deleteResto(id){

    this.items.splice(id-1,1)
    this.resto.delResto(id).subscribe((data)=>{
      console.log(data)
    })
  }

}
