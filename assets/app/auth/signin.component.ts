import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({

    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent {

    myForm: FormGroup;

    onSubmit() {
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({

            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, Validators.required),

        });
    }


}