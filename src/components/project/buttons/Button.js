import React from 'react';
import {EachButton} from './styledComponent.js';
class Button extends React.Component{
    
    render(){
        // console.log(this.props.themeObject.selectedBackgrounds);
        let {themeObject} = this.props;
        let here=[];
        this.props.valueId.forEach((item)=>{
            here.push(this.props.countries.map((itemId)=>{
                if(item===itemId.alpha3Code){
                    return <EachButton key={item} 
                        themeObject={themeObject}
                        onClick={this.props.countryChangeMethod}
                        id={itemId.alpha3Code}>{itemId.name}</EachButton>;        
                    }
                    return null;
                }
                )
            );
            }
        );
        
        return here;
    }
}
export {Button};
// import React from 'react';
// import {EachButton} from '.eachButton.js';
// class Button extends React.Component{
    
//     render(){
//         let here=[];
//         this.props.valueId.forEach((item)=>{
//             here.push(this.props.countries.map((itemId)=>{
//                 if(item===itemId.alpha3Code){
//                     return <button className= {`card-button ${this.props.name}`} key={item}
//                         onClick={this.props.countryChangeMethod}
//                         id={itemId.alpha3Code}>{itemId.name}</button>;        
//                     }
//                     return null;
//                 }
//                 )
//             );
//             }
//         );
        
//         return here;
//     }
// }
// export {Button};