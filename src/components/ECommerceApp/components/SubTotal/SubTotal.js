import React from 'react';
import {inject,observer} from 'mobx-react';
import {SubTotalStyle,
    SubTotalName,
    AmountStyle,
} from '../../styledComponents/SubTotal';


@observer
class SubTotal extends React.Component{

    render(){
        let {total,currencyFormat} =this.props;
        return(
            <SubTotalStyle>
                <SubTotalName>
                    SubTotal
                </SubTotalName>
                <AmountStyle>
                  {total}
                </AmountStyle>
            </SubTotalStyle>);
    }
}

export default SubTotal;