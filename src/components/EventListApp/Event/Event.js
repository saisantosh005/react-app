import React from 'react';
import {observable,action} from 'mobx';
import { EachEventStyling,
         EachEventInputDivStyle,InputNameStyle,
         InputLocationStyle,
         EditButtonStyling,DeleteButtonStyling,
         EachEventButtonStyling,EditInputNameStyle,
         EditInputLocationStyle } from './eventstyle.js';
import {eventStore} from  '../../../stores/EventStore/EventStore.js';
import {observer} from 'mobx-react';
@observer
class Event extends React.Component{
    @observable eventName=this.props.eventModel.eventName;
    @observable eventLocation=this.props.eventModel.eventLocation;
    @observable isEditEvent=false;
    
    onDeleteEvent=(event)=>{
        eventStore.onDeleteEvent(event.target.id);
    }
    onUpdateEventLocation=()=>{
        this.eventLocation=event.target.value;
    }
    onUpdateEventName=()=>{
        this.eventName=event.target.value;
    }
    
    onUpdateEventDetails=()=>{
        let {eventModel}=this.props;
        this.isEditEvent=!this.isEditEvent;
        if(this.isEditEvent===false){
            if(this.eventName!==""&&this.eventName!==""){
                eventModel.eventName=this.eventName;
                eventModel.eventLocation=this.eventLocation;
            }
            else{
                this.isEditEvent=!this.isEditEvent;
                alert("something is empty");   
            }
        }
    }
    
    render(){
        let {eventModel} =this.props;
        console.log(eventModel);
        return(
            <EachEventStyling>
                {this.isEditEvent===false?
                    <EachEventInputDivStyle>
                        <InputNameStyle >Event Name: {eventModel.eventName} </InputNameStyle>
                        <InputLocationStyle>Event Location: {eventModel.eventLocation}</InputLocationStyle>
                    </EachEventInputDivStyle>
                    :
                    <EachEventInputDivStyle>
                        <EditInputNameStyle onChange={this.onUpdateEventName} value={this.eventName} placeholder={"Event Name"}/>
                        <EditInputLocationStyle onChange={this.onUpdateEventLocation} value={this.eventLocation} placeholder={"Event Location"}/>
                    </EachEventInputDivStyle>
                 }
                    {this.isEditEvent===false?<EachEventButtonStyling>
                        <EditButtonStyling onClick={this.onUpdateEventDetails}>
                            Edit 
                        </EditButtonStyling>
                        <DeleteButtonStyling id={eventModel.id} onClick={this.onDeleteEvent}>
                            Delete 
                        </DeleteButtonStyling>
                    </EachEventButtonStyling>:
                    <EditButtonStyling onClick={this.onUpdateEventDetails}>
                            Update 
                    </EditButtonStyling>
                        }
                    
            </EachEventStyling>)
    }
}
export {Event};