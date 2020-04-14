import {observable} from 'mobx';

// export type EventModelType={
//     id:number
//     eventName:string
//     eventLocation:string
// }
class EventStoreModel{
    @observable id;
    @observable eventName;
    @observable eventLocation;
    constructor(objectIt){
        this.id=objectIt.id,
        this.eventName=objectIt.eventName;
        this.eventLocation=objectIt.eventLocation;
    }
    
}

export default EventStoreModel;


