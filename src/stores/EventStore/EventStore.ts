import {observable,action} from 'mobx';
import EventStoreModel,{EventModelType} from '../models/EventStoreModel';
// import {EventStoreModel} from '../models/EventStoreModel'

// type Hello={
//     id:number,
//     eventLocation:string,
//     eventName:string
// }

class EventStore{
    @observable EventList:Array<EventStoreModel>=[];
    @observable count:number=0;
    constructor(){
        this.EventList
        this.count
    }
    @action.bound 
    onDeleteEvent(input:number){
        this.EventList=this.EventList.filter((item)=>item.id!=input);
    }
    @action.bound
    onAddEvent(eventName:string,eventLocation:string){
        if(eventName!==""&&eventLocation!==""){
            const eventModel:EventModelType = new EventStoreModel({
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
