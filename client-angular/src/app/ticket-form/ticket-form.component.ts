import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  myForm: FormGroup;

    //Form state
    loading = false;
    success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      busName:'',
      descripOfIssue:'',
      //should only be accessible if user is role 2-3
      status:'',
      //should only be accessible if user is role 3 or 4
      techAssigned:''

    })
    this.myForm.valueChanges.subscribe()
  }

  async submitHandler(){
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('Ticket').add(formValue);
      this.success = true;
    }
    catch(err){
      console.error(err)
    }
    this.loading = false;
  }

}
  


