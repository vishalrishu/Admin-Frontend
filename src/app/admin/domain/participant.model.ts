export class ParticipantModel{
    constructor() {
    }
    public p_id: number;
    public name: string;
    public email: string;
    setJson(list: any) {
        this.p_id = list['p_id'];
        this.name = list['name'];
        this.email = list['email'];
    }
}