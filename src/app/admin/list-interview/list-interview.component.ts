import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreFrameworkService } from '../services/core-framework.service';
import { ParticipantListModel } from '../domain/participant-list.model';
import { InterviewListModel } from '../domain/interview-list.model';
import { Router } from '@angular/router';
import { InterviewModel } from '../domain/interview.model';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'list',
  templateUrl: './list-interview.component.html',
  styleUrls: ['./list-interview.component.css'],
  providers: [ ]
})
export class ListInterviewComponent implements OnInit {

  constructor(private httpCLient: HttpClient, private router: Router, private formBuilder: FormBuilder,
    private frameworkService: CoreFrameworkService, private service: BaseService) {
 
  }
  
  interviewList = new InterviewListModel();
 
  ngOnInit() {
    // let data = [{"p_id":1, "name": "Vishal", "email": "vishal@gmail.com"}];
    // this.participantList.setJson(data);  
    this.httpCLient.get("http://bd71aa6b.ngrok.io/interviews").subscribe((data) => {
        this.interviewList.setJson(data);  

      }, (erorr) => {
        console.log("error");
      });
  }
  editInterview(interview: InterviewModel) {
    console.log("In edit");
    console.log(interview);
    this.service.setInterviewDetails(interview);
    this.router.navigate(['/interview'], { queryParams: { i_id: interview.i_id } })
  }
  createInterview() {
    this.router.navigate(['/interview']);
  }
}
