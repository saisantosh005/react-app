import {observable,action} from 'mobx';
import EventStoreModel,{EventModelType} from '../models/EventStoreModel';
// import {EventStoreModel} from '../models/EventStoreModel'

// type Hello={
//     id:number,
//     eventLocation:string,
//     eventName:string
// }

class EventStore{
    @observable EventList=[];
    @observable count=0;
    constructor(){
        this.EventList
        this.count
    }
    @action.bound 
    onDeleteEvent(input){
        this.EventList=this.EventList.filter((item)=>item.id!=input);
    }
    @action.bound
    onAddEvent(eventName,eventLocation){
        if(eventName!==""&&eventLocation!==""){
            const eventModel = new EventStoreModel({
                id:this.count++,
                eventName:eventName,
                eventLocation:eventLocation,
            });
            
            this.EventList.push(eventModel);
        }
    }
}
const eventStore = new EventStore();
export {eventStore};
