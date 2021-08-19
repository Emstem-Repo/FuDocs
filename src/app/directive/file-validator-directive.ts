import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { requiredFileType } from "../shared/customValidator";


@Directive({
    selector:"[fieldLengthValidator],[requiredFileType]",
    providers: [{provide: NG_VALIDATORS,
                 useExisting: fileValidatorDirective,
                multi:true}]
})
export class fileValidatorDirective implements Validator{
    
    validate(control: AbstractControl):ValidationErrors | null {
        return requiredFileType()(control);
    }

}