import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

const withScreenSizeDetectors = Devicetext=>{
    
    
    @observer
    class NewDeviceText extends React.Component{
        
        isMobile=(input)=>{
           return window.innerWidth<576?true:false;
        }
        isTablet=(input)=>{
             return window.innerWidth>576&&window.innerWidth<992?true:false;
        }
        isDesktop=(input)=>{
             return window.innerWidth>=992?true:false;
        }
        render(){
            return (
                <Devicetext isMobile={this.isMobile} isTablet={this.isTablet} isDesktop={this.isDesktop}/>
            );
        }
    }
    return NewDeviceText;
};

export default withScreenSizeDetectors;