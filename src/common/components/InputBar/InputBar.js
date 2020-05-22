import React from 'react';


class Inupt extends React.Components{
    render(){
        const {type,style} = this.props
        return(
            <input type={type}/>
            );
    }
}