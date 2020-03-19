import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreFrameworkService } from '../services/core-framework.service';
import { ParticipantListModel } from '../domain/participant-list.model';
import { InterviewModel } from '../domain/interview.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css'],
  providers: [ ]
})
export class CreateInterviewComponent implements OnInit {
error: string;
success: string;
  constructor(private httpCLient: HttpClient,private route: ActivatedRoute, private formBuilder: FormBuilder,
    private frameworkService: CoreFrameworkService, private service: BaseService) {
    }
  
  participantList = new ParticipantListModel();
  interview = new InterviewModel();
  id;
  edit: boolean= false;
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params.i_id);
      if(params.i_id) {
          this.edit = true;
      this.httpCLient.get("http://bd71aa6b.ngrok.io/participants/"+params.i_id).subscribe((data) => {
          console.log(data);
          this.participantList.setJson(data);
          this.service.getInterviewDetails().subscribe(data => {
                this.interview.setJson(data);
                console.log(this.interview);
              })
        },(error)=>{});
    }
    });
    this.httpCLient.get("http://bd71aa6b.ngrok.io/participants").subscribe((data) => {
        this.participantList.setJson(data);  

      }, (error) => {
        console.log("error");
      });
  }
  createInterview() {
    if(this.interview.endts && this.interview.startts) {
      this.httpCLient.post("http://bd71aa6b.ngrok.io/interview", {
            participants: this.interview.participants,
            i_id: "",
            description: this.interview.description,
            startTS: this.interview.startts,
            endTS: this.interview.endts
        }).subscribe((data)=> {
            console.log(data);
            // this.interview = new InterviewModel();
            this.success = "Successfully Created";
            console.log("success");
      }, (error)=>{
            this.error = error;
      });
  } else {
      this.error = "Please fill all the fields"
  }
}
}
