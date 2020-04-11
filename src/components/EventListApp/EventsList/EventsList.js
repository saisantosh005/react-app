import React from 'react';
import {Event} from '../Event/Event.js';
import{EventListDivStyling,NoOfEventsStyling} from './eventListStyle.js';
import {observer} from 'mobx-react';

import {eventStore} from  '../../../stores/EventStore/EventStore.js';
@observer
class EventsList extends React.Component{
    render(){
        let eventList =eventStore.EventList;
        const listOFEvents = eventList.map((item)=><Event key={item} eventModel ={item}/>);
        return(eventList.length>0&&
            <EventListDivStyling>
                <NoOfEventsStyling>Number of Events: {eventList.length}</NoOfEventsStyling>
                {listOFEvents}        
            </EventListDivStyling>);
    }
}
export {EventsList};