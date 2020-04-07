import React from 'react';

import {CheckboxWithLabel} from"../../common/components/check.js";

class VisitedCities extends React.Component{
    
    state={
            visitedCities:"",
            selectedCities:[],
            cityOptions:"",
    };
        
    
    handleCheckboxClick=(event)=>{
        if(event.target.checked===true){
            let zoom = this.state.selectedCities.slice(0);
            zoom.push(event.target.value);
            this.setState({
                selectedCities:zoom,
            });
        }
        else{
            this.state.selectedCities.splice(this.state.selectedCities.indexOf(event.target),1);
            this.setState({
                selectedCities:this.state.selectedCities,
            });
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }
  
    displayVisitedCitiesMessage=()=>{
        this.setState({
            visitedCities:this.state.selectedCities.join(','),
        });
    }
    renderCityOptions=()=>{
        return this.props.cityList.map((item)=>
            <CheckboxWithLabel key={item} value ={item} label={item} updateCheckedStatus={this.handleCheckboxClick}/>
        );
    }
    
    render(){
        return(
        <div className="visitedCities">
        <form onSubmit={this.handleSubmit} className="visitedCities">
            <div>which of the following cities you have visited</div>
            <ul>
                {this.renderCityOptions()}
            </ul>
            <input type="button" value="Make your choice" onClick={this.displayVisitedCitiesMessage}></input>
            
        </form>
        {this.state.visitedCities!==""?<div>I have visited these cities {this.state.visitedCities}</div>:<div></div>}
        </div>);    
    }
}   
export {VisitedCities};