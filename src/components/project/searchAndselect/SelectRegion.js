import React from 'react';

class SelectRegion extends React.Component{
    onChangeSelectedRegion=(event)=>{
        this.props.onChangeSelectedRegion(event.target.value);
    }
    
    render(){
        return (
            <div className="select-div">
                <select className="select-bar" value = {this.props.selectedRegion} onChange={this.onChangeSelectedRegion}>
                    <option>All</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
        );
    }
}
export {SelectRegion};
