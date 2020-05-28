import { AbstractControl } from '@angular/forms';

export function anoValidator(control: AbstractControl) {

    if(!/^(((\d{4})))+$/.test(control.value)) {
        return { ano: true }
    }
    return null;
} 