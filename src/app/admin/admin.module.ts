import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListInterviewComponent } from './list-interview/list-interview.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreFrameworkService } from './services/core-framework.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { BaseService } from './services/base.service';

@NgModule({
  imports: [CommonModule,
      RouterModule, AdminRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  exports: [ ],
  declarations: [ListInterviewComponent, CreateInterviewComponent],
  providers: [CoreFrameworkService, BaseService],
  entryComponents: [ ]
})
export class AdminModule {  }
