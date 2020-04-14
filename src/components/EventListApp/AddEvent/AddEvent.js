import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import {eventStore} from  '../../../stores/EventStore/EventStore';
import {AddEventStyling,
        AddEventInputTagsDivStyling,
        InputNameStyle,InputLocationStyle,
        AddEventButtonStyling} from './addEventStyle';



@observer
class AddEvent extends React.Component{
    @observable eventName;
    @observable eventLocation;
    
    // onChangeEventName=(event:{target:{value:string}})=>{
    onChangeEventName=(event)=>{
        this.eventName=event.target.value;
    }
    
    // onChangeEventLocation=(event:{target:{value:string}})=>{
    onChangeEventLocation=(event)=>{
        this.eventLocation=event.target.value;
    }
    
    onAddEvent=()=>{
        if(this.eventName!==""&&this.eventLocation!==""){
            eventStore.onAddEvent(this.eventName,this.eventLocation); 
            this.eventName="";
            this.eventLocation="";
        }
    }
    render(){
        return (
            <AddEventStyling>
                <AddEventInputTagsDivStyling>
                    <InputNameStyle placeholder={"Event Name"}
                    onChange={this.onChangeEventName}
                    value={this.eventName} />
                    <InputLocationStyle placeholder={"Event Location"} 
                    onChange={this.onChangeEventLocation}
                    value={this.eventLocation} />
                </AddEventInputTagsDivStyling>
                <AddEventButtonStyling onClick={this.onAddEvent}>
                    Add Event
                </AddEventButtonStyling>
            </AddEventStyling>);
    }
}
export{AddEvent};