import React from 'react';
import {Route } from "react-router-dom";

import ViewEditToggle from '../components/ViewEditToggle';
import CollapseExpand from '../components/CollapseExpand';
import MouseCoordinates from '../components/MouseCoordinates';
import {DisplayMouseCoordinates} from '../components/DisplayMouseCoordinates';
import DeviceTypeText from '../components/DeviceTypeText';
import {MainHeadingStyle} from './styledComponent.js';
class MainComponent extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                    <MainHeadingStyle>HOC'S Usage</MainHeadingStyle>
                    <ViewEditToggle />
                    <CollapseExpand list={["eggs","bread","cake"]}/>
                    <DeviceTypeText />
                    <MainHeadingStyle>Render Prop's Usage</MainHeadingStyle>
                <MouseCoordinates render={(xPosition,yPosition)=>(
                    <DisplayMouseCoordinates xPosition={xPosition} yPosition={yPosition} />
                    )
                }/>
            </React.Fragment>
        );
    }
}
const PracticeAdvancedConcepts =[
    <Route key={Math.random()} exact path="/practice-advanced-concepts" component={MainComponent}/>];
export {PracticeAdvancedConcepts};