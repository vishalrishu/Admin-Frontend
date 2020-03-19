import { InterviewModel } from './interview.model';

export class InterviewListModel {
    constructor() {
    }
    public list: Array<InterviewModel> = [];
    setJson(list: any) {
        if (list) {
            list.forEach( item => {
                const model = new InterviewModel();
                model.setJson(item);
                this.list.push(model);
            });
        }
    }
    getJson() {
        return this;
    }
}