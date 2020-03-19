import { OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ParticipantModel } from '../domain/participant.model';
import { InterviewModel } from '../domain/interview.model';

@Injectable()
export class BaseService implements OnInit{
    constructor(private fb: FormBuilder) {
    }
    ngOnInit() {
    }
    
    private dataSource = new BehaviorSubject('');
    private detail = new BehaviorSubject(new InterviewModel());
    partData = this.dataSource.asObservable();
    
    setInterviewDetails(model: InterviewModel) {
        this.detail.next(model);
    }
    getInterviewDetails() {
        return this.detail;
    }
}