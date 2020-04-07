import React from 'react';

class CheckboxWithLabel extends React.Component{
    render(){
        return(<div>
            <li>
            <input type="checkBox"  value={this.props.value} onClick={this.props.updateCheckedStatus}/>{this.props.label}</li>
        </div>);
    }
}
export {CheckboxWithLabel};