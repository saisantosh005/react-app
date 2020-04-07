
import React from 'react';
import './carsList.css';


class CreateCar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:"STOPPED",
            speed:0,
            text:"STOPPED",
            startColor:"green",
            content:"start",
            className:"start-only",
        };
    }
    onStartOrStop=()=>{
        if(this.state.status==="STARTED"){
            this.setState({
                status:"STOPPED",
                startColor:"red",
                content:"stop",
                className:"stop-only",
            }
            ,
            ()=>{this.displayStatusText() }
          );
        }
        else{
            this.setState({
                status:"STARTED",
                startColor:"green",
                content:"start",
                speed:0,
                className:"start-only",
                },
                ()=>{ this.displayStatusText()}
                );
            }
    }
    displayStatusText=()=>{
        if(this.state.status==="STARTED"){
            this.setState({
                text: "Running",
            });
        }
        else{
            this.setState({
                text: "Stopped",
            });
        }
    }
    onAccelerate=()=>{
        if(this.state.status==="STARTED"){
            let carSpeed = this.state.speed;
            carSpeed+=10;
            this.setState({
                // speed:this.state.speed,
                speed:carSpeed,
        });
        }
    }
    onApplyBrake=()=>{
        if(this.state.status==="STARTED"&&this.state.speed>0){
           let carSpeed = this.state.speed;
            carSpeed-=10;
            this.setState({
                // speed:this.state.speed,
                speed:carSpeed,
        }); 
        }
        if(this.state.speed===0){
            this.setState({
                text: "Running",
            });
        }
    }
    render(){
        return(
            <div className="car">
                <div className="car-no-and-cross">
                    <h5 className="car-no">Car:{this.props.carId}</h5>
                    <span className="cross" id={this.props.carId} onClick={this.props.removeCarFromCarsList}>X</span>
                </div>
                <div className = "car-part">
                <div className={this.state.className}  onClick={this.onStartOrStop} >{this.state.content}</div>    
                    {this.state.status==="STARTED"? this.state.speed>0?<p>Status:{this.state.text} with speed of {this.state.speed} kmph</p>:<p>Status: Running</p>:<p>Status:Stopped</p>}
                <div className="accelerate-decelerate" >
                    <div className="accelerate" onClick={this.onAccelerate}>Accelerate</div>
                    <div className="apply-break" onClick={this.onApplyBrake}>Apply Break</div>
                </div>
                </div>
            </div>
            );
    }
}

class CarsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            carList:[1],
            carNo:1,
        };
    }
    
    addCarToCarsList=()=>{
        let carNo = this.state.carNo;
            carNo+=1;
        this.setState((pre)=>({
            carNo:carNo,
            carList:this.state.carList.concat([this.state.carNo]),
            // carList:[...pre.carList,this.state.carNo],
            })
        );
    }
    
    removeCarFromCarsList=(event)=>{
        const arr =  this.state.carList.indexOf(Number(event.target.id));
        this.state.carList.splice(arr,1);
        this.setState({
            carList:this.state.carList
        });
    }
    
    render(){
            const here = this.state.carList.map((item)=>
            <CreateCar carId={item} key={item} 
            removeCarFromCarsList={this.removeCarFromCarsList}/>);
        return (
            <div className="car-app">
                <div className="add-car-section">
                    <div className="add-car" onClick={this.addCarToCarsList}>Add Car</div>
                </div>
                {here}
            </div>
        );
    }
}

// ReactDOM.render(<CarsList />,root);

export { CarsList,CreateCar }

