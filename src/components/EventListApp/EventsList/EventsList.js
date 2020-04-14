import React from 'react';
import {observer} from 'mobx-react';
import {eventStore} from  '../../../stores/EventStore/EventStore';
import {Event} from '../Event/Event';
import{EventListDivStyling,NoOfEventsStyling} from './eventListStyle';


// type Props = {
    
// }
@observer
class EventsList extends React.Component{
    render(){
        let eventList =eventStore.EventList;
        const listOFEvents = eventList.map((item)=><Event key={item} eventModel={item}/>);
        return(eventList.length>0&&
            <EventListDivStyling>
                <NoOfEventsStyling>Number of Events: {eventList.length}</NoOfEventsStyling>
                {listOFEvents}        
            </EventListDivStyling>);
    }
}
export {EventsList};