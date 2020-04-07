import "./waterApp.css";
import React from 'react';


class WaterCountApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filled:5,
            remained:7,
            remainedPartClassName:"remained-part",
            remainedPartClassNameTwo:"remained-part-color",
            filledPartClassName:"filled-part",
        }
    }
    
    
    changeGlassColor=(event)=>{
        // alert(Number(event.target.id));
        
        
    };
    
    render(){
        return(
            <div className="water-app">
                <div className="over-all-app">
                    <span>Goal: 2 liters</span>
                    <div className="main-jar">
                        <div className={this.state.remainedPartClassName}>{this.state.remained}<br/> 
                        Remained</div>
                        <div className={this.state.filledPartClassName}>{this.state.filled} filled</div>
                    </div>
                    <ul className="glasses-part"> 
                        <li className="glass1 glass" id="1" onClick={this.changeGlassColor}>250 ml</li>
                        <li className="glass2 glass" id="2" onClick={this.changeGlassColor}>250 ml</li>
                        <li className="glass3 glass" id="3" onClick={this.changeGlassColor}>250 ml</li>
                        <li className="glass4 glass" id="4" onClick={this.changeGlassColor}>250 ml</li>
                        
                        <li className="glass5 glass" id="5" onClick={this.changeGlassColor}>250 ml</li>
                        <li className="glass6 glass" id="6" onClick={this.changeGlassColor}>250 ml</li>
                        <li className="glass7 glass" id="7" onClick={this.changeGlassColor}>250 ml</li>
                        <li className="glass8 glass" id="8" onClick={this.changeGlassColor}>250 ml</li>
                    </ul>
                
                </div>
            
            </div>
            )
    }
}

export {WaterCountApp};