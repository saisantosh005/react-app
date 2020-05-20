import React from 'react';
import {observer} from 'mobx-react';
import themeStore from '../../stores/ThemeStore';

const  WithCoutries  = CountriesInputComponent=>{
    @observer
    class NewComponent extends React.Component{
        getCurrentTheme=()=>{
            return themeStore.selectedTheme;
        }
        changeSelectedTheme=()=>{
            themeStore.setCurrentTheme();
        }
    
        themeObject= {
            light:{
                themeName:"Dark Mode",
                background:"whitesmoke",
                selectedBackgrounds:"white",
                color:"black",
                border:"lightgrey",
            },
            dark:{
                themeName:"Light Mode",
                selectedBackgrounds:"#223c54",
                background:"#2a3c4d",
                color:"white",
                border:"black",
        }
    };
    
        render(){
            return(
                <CountriesInputComponent themeObject={this.themeObject}
                   getCurrentTheme={this.getCurrentTheme} 
                   changeSelectedTheme={this.changeSelectedTheme}
                   {...this.props}
                />);
        }
    }
    return NewComponent;
};

export default WithCoutries;