import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import WithToggle from '../../hocs/withToggle.js';
import {ViewEditToggleMainDivStyle,DataAndButtonStle,TitleStyle,DataLineStyle,InputTagStyle,Button} from './styledComponent.js';
@observer
class ViewEditToggle extends React.Component{
    @observable data="click on the edit button to start editing";
    
    onchangeData = (event)=>{
        this.data = event.target.value;
    }
    render(){
        const {toggleStatus,onToggle} = this.props;
        return(
            <ViewEditToggleMainDivStyle>
                <TitleStyle>ViewEditToggle</TitleStyle>
                <DataAndButtonStle>
                    {toggleStatus?
                    this.data:
                <InputTagStyle type="text"  value={this.data} onChange={this.onchangeData}/>}
                <Button onClick={onToggle}>{toggleStatus?"Edit":"Cancel"}</Button>
                </DataAndButtonStle>
            </ViewEditToggleMainDivStyle>   
        );
    }
}

export default WithToggle(ViewEditToggle);
