import React from 'react';
import {AddEventStyling,
        AddEventInputTagsDivStyling,
        InputNameStyle,InputLocationStyle,
        AddEventButtonStyling} from './addEventStyle.js';
import {eventStore} from  '../../../stores/EventStore/EventStore.js';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class AddEvent extends React.Component{
    @observable eventName="";
    @observable eventLocation="";
    
    onChangeEventName=(event)=>{
        this.eventName=event.target.value;
    }
    
    onChangeEventLocation=(event)=>{
        this.eventLocation=event.target.value;
    }
    
    onAddEvent=(event)=>{
        if(this.evenName!==""&&this.eventLocation!==""){
            eventStore.onAddEvent(this.eventName,this.eventLocation); 
            this.eventName="";
            this.eventLocation="";
        }
    }
    render(){
        return (
            <AddEventStyling>
                <AddEventInputTagsDivStyling>
                    <InputNameStyle placeholder={"Event Name"} onChange={this.onChangeEventName} value={this.eventName} />
                    <InputLocationStyle placeholder={"Event Location"} onChange={this.onChangeEventLocation} value={this.eventLocation} />
                </AddEventInputTagsDivStyling>
                <AddEventButtonStyling onClick={this.onAddEvent}>
                    Add Event
                </AddEventButtonStyling>
            </AddEventStyling>);
    }
}
export{AddEvent};