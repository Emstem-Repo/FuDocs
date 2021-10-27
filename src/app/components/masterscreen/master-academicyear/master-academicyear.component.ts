import { Component, OnInit } from '@angular/core';
import { Masterscreen } from 'src/app/model/masterscreen.model';


@Component({
  selector: 'app-master-academicyear',
  templateUrl: './master-academicyear.component.html',
  styleUrls: ['./master-academicyear.component.css']
})
export class MasterAcademicyearComponent implements OnInit {


  masterscreens= new Masterscreen();
 
  constructor( ) { }

  ngOnInit(): void {
  }

}
