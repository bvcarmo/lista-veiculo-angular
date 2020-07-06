import { AbstractControl } from '@angular/forms';

export function renavamValidator(control: AbstractControl) {

    if(!/^(((\d{11})))+$/.test(control.value)) {
        return { renavam: true }
    }
    return null;
} 