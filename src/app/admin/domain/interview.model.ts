import { ParticipantModel } from './participant.model';

export class InterviewModel{
    constructor() {
    }
    public i_id: number;
    public participants: Array<ParticipantModel> = [];
    public description: string;
    public startts: Date;
    public endts: Date;
    setJson(list: any) {
        this.i_id = list['i_id'];
        this.description = list['description'];
        this.startts = list['startts'];
        console.log(list['startts']);
        this.endts = list['endts'];
        if(list['participants']) {
            list['participants'].forEach( item => {
                const model = new ParticipantModel();
                model.setJson(item);
                this.participants.push(model);
            });
        }
    }
}