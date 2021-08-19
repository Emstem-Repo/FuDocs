import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";
export function  requiredFileType(): ValidatorFn{
    const fil=['pdf','mkv']
   return (control:AbstractControl):{[key:string]: any}|null =>{
    
        
        if ( control.value ) {
            const fileExt = control.value.split('.').pop().toLowerCase();
            const filetype = !fil.includes(fileExt);
            return filetype ? {'formatName':{value:fileExt}} :null;
        }
        return null;
        
    };
}
export function  requiredFileSize(): ValidatorFn{
    const fil=/pdf/
   return (control:AbstractControl):{[key:string]: any}|null =>{
        console.log('inside size validator');
        if ( control.value ) {
            const fileExt = control.value.split('.').pop().toLowerCase();
            const filetype = fil.test(control.value);
            return filetype ? {'sizing':{value:fileExt}} :null;
        }
        return null;
        
    };
}

// export function  requiredfieldLength(): ValidatorFn{
//     return (control:AbstractControl):{[key:string]: any}|null =>{
//          console.log('inside custom validator');
//          if ( control.value ) {
//             const fileExt = control.value.length;
//              const filetype = fileExt>/3/;
//              console.log(fileExt);
//              return filetype ? {'requiredLength':{value:fileExt}} :null;
//          }
//          return null;
         
//      };
//  }
