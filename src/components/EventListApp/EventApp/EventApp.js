import React from 'react';
import{observer} from 'mobx-react';

import {AddEvent} from '../AddEvent/AddEvent';
import {EventsList} from '../EventsList/EventsList';
import {EventAppMainDiv} from './eventAppStyle';

@observer
class EventListApp extends React.Component{
    // onAddEvent=(eventName,eventLocation)=>{
    //     console.log(eventName,eventLocation);
    //     eventStore.onAddEvent(eventName,eventLocation);
    // }
    render(){
        return (
            <EventAppMainDiv>
                <AddEvent />
                <EventsList />
            </EventAppMainDiv>
        );
    }
}
export {EventListApp};
// <AddEvent onAddEvent={this.onAddEvent}/>