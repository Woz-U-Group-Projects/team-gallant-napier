import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { AngularFirestore } from 'angularfire2/AngularFirestore';
import { tap, first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  myForm: FormGroup;

  //Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      busName: '',
      email: '',
      phoneNum: '',
      zipCode: ''
    })

    this.myForm.valueChanges.subscribe()
  }

  async submitHandler(){
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('User-info').add(formValue);
      this.success = true;
    }
    catch(err){
      console.error(err)
    }
    this.loading = false;
  }

}
