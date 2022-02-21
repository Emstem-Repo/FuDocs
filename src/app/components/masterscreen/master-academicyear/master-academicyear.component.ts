import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcademicYear } from 'src/app/interfaces/academicYear';
import { Masterscreen } from 'src/app/model/masterscreen.model';
import { MasterServiceService } from 'src/app/service/master-service.service';


@Component({
  selector: 'app-master-academicyear',
  templateUrl: './master-academicyear.component.html',
  styleUrls: ['./master-academicyear.component.css']
})



export class MasterAcademicyearComponent implements OnInit {

  public edit:boolean=false;


  masterscreens= new Masterscreen();
 
  constructor( private masterservice: MasterServiceService) { }

  public academicYear!:AcademicYear[];
  public acyear!:AcademicYear;

  



  ngOnInit(): void {
    this.getAcademicYear();
  }

  public getAcademicYear(){
      this.masterservice.getAcademicYear().subscribe(
        (response:AcademicYear[])=>{
          this.academicYear=response
        }
      )
     
  }

  public addAcademicYear(){
    const acyearsend = {} as AcademicYear;
    acyearsend.dataEntries=this.masterscreens.dataEntries;
    acyearsend.year=this.masterscreens.year;
    this.masterservice.addAcademicYear(acyearsend).subscribe(
      (response:AcademicYear)=>{
        this.acyear=response;
        this.getAcademicYear();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public editAcademicYear(year:AcademicYear){
    this.masterscreens.year=year.year;
    this.masterscreens.dataEntries=year.dataEntries;
    this.masterscreens.id=year.id;
    this.edit=true;
  }

  public updateAcademicYear(){
    const acyearsend = {} as AcademicYear;
    acyearsend.id=this.masterscreens.id;
    acyearsend.dataEntries=this.masterscreens.dataEntries;
    acyearsend.year=this.masterscreens.year;
    this.masterservice.updateAcademicYear(acyearsend).subscribe(
      (response:AcademicYear)=>{
        this.acyear=response;
        this.getAcademicYear();
        this.edit=false;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public deleteAcademicYear(id:number){
    this.masterservice.deleteAcademicYear(id).subscribe(
      data=>{
        console.log(data);
        this.getAcademicYear();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
