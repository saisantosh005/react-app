import {observable,action} from 'mobx';
import {EventStoreModel} from '../models/EventStoreModel.js';

class EventStore{
    @observable EventList;
    @observable count;
    constructor(){
        this.EventList=[];
        this.count=1;
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