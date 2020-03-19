import { OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Injectable()
export class CoreFrameworkService implements OnInit{
    myForm: FormGroup;
    constructor(private fb: FormBuilder) {
    }
    ngOnInit() {
    }
    createFormControls(list){
        const x = {};
        list.forEach( t => {
            const fc = this.createControl(t.type, t.data, t.valid);
            x[t.key] = fc;
         });
         return x;
    }
    createControl(type, data, valid) {
        switch (type) {
            case 'text': {
                return new FormControl(data, [Validators.required, Validators.pattern(valid)]);
            }
        }
    }
    patchValue(form, list) {
        if (form) {
        form.controls.array.forEach(field => {
            const control = form.get(field);
            control.patchValue(list[field]);
        });
        }
    }
}

