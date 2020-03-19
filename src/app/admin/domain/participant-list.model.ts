import { ParticipantModel } from './participant.model';

export class ParticipantListModel {
    constructor() {
    }
    public list: Array<ParticipantModel> = [];
    setJson(list: any) {
        if (list) {
            list.forEach( item => {
                const model = new ParticipantModel();
                model.setJson(item);
                this.list.push(model);
            });
        }
    }
    getJson() {
        return this;
    }
}