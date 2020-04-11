import {observable} from 'mobx';

class EventStoreModel{
    @observable id;
    @observable eventName;
    @observable eventLocation;
    constructor(props){
        this.id=props.id,
        this.eventName=props.eventName;
        this.eventLocation=props.eventLocation;
    }
    
}

export {EventStoreModel};


