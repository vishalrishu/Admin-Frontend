import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListInterviewComponent } from './list-interview/list-interview.component';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
export const routes: Routes = [
    { path: 'home', component: ListInterviewComponent },
    { path: 'interview', component: CreateInterviewComponent},
    { path : '' , redirectTo : 'home' , pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
