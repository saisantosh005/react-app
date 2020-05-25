import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import {ButtonStyle} from './styledComponent.js';

@observer
class Button extends React.Component{
    @observable isClicked=false;
    
    @action.bound
    changeValue(event){
        const {onSelectSizeIt} = this.props;
        this.isClicked=!this.isClicked;
        onSelectSizeIt(event.target.value);
    }
    
    render(){
        const {valueIt} = this.props;
        
        return(
            <ButtonStyle data-testid="Button-id" onClick={this.changeValue} value={valueIt} isClicked={this.isClicked}>
                {valueIt}
            </ButtonStyle>);
    }
}

export {Button};
