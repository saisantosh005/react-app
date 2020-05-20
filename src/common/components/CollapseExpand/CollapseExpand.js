import React from 'react';
import WithToggle from '../../hocs/withToggle.js';
import {MainDivStyle,TitleStyle,DataAndButtonStyle,Button} from './styledComponent.js';


class CollapseExpand extends React.Component{
    renderList=()=>{
        const {list} =this.props;
        // console.log(list);
        return list.map(item=><li key={item}>{item}</li>);
    }
    
    
    render(){
        const {onToggle,toggleStatus} = this.props;
        return(
            <MainDivStyle>
                <TitleStyle>CollapseExpand</TitleStyle>
                <DataAndButtonStyle>
                    Shopping List:
                    <Button onClick={onToggle}>{toggleStatus?"Expand":"Collapse"}</Button>
                </DataAndButtonStyle>
                {toggleStatus?null:<ul>
                            {this.renderList()}
                    </ul>}
                
            </MainDivStyle>);
    }
}

export default WithToggle(CollapseExpand);