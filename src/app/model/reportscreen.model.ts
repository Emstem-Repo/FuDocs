export class Reportscreen {

     public programInfo:{id:number,name:string}[];
    public selectedProgram:string |'';
    public programme:string | '';
    public nameOfprogram:string | '';
    public description:string|'';



    constructor() {
        
     this.programInfo=[{ id: 1, name: 'Criteria 1' }, { id: 2, name: 'Criteria 2' }];
        this.selectedProgram='';
        this.programme='';
        this.nameOfprogram='';
         this.description='';

    }


}
