import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { requiredFileSize } from "../shared/customValidator";


@Directive({
    selector:"[requiredFileSize]",
    providers: [{provide: NG_VALIDATORS,
                 useExisting: fileValidatorDirectiveSize,
                multi:true}]
})
export class fileValidatorDirectiveSize implements Validator{
    
    validate(control: AbstractControl):ValidationErrors | null {
        return requiredFileSize()(control);
    }

}