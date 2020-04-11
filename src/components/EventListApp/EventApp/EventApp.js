import React from 'react';
import {EventAppMainDiv} from './eventAppStyle.js';
import {AddEvent} from '../AddEvent/AddEvent.js';
import {EventsList} from '../EventsList/EventsList.js';
import{observer} from 'mobx-react';

@observer
class EventListApp extends React.Component{
    // onAddEvent=(eventName,eventLocation)=>{
    //     console.log(eventName,eventLocation);
    //     eventStore.onAddEvent(eventName,eventLocation);
    // }
    render(){
        return (
            <EventAppMainDiv>
                <AddEvent onAddEvent={this.onAddEvent}/>
                <EventsList />
            </EventAppMainDiv>
            
            );
    }
}
export {EventListApp};