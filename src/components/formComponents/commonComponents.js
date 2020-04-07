import React from 'react';

class CheckboxWithLabel extends React.Component{
    render(){
        return(<div>
            <li><input type="checkBox"  value={this.props.valued} onClick={this.props.updateCheckedStatus}/><lable>{this.props.valued}</lable></li>
        </div>);
    }
}
export {CheckboxWithLabel};