import React from 'react';
import { IoIosMoon  }  from 'react-icons/io';
import {TopSection,Span} from './topSection.js';
class Header extends React.Component{
    
    render(){
        return(
            <TopSection themeObject={this.props.themeObject}>
                <h2>where in the world?</h2>
                <Span onClick={this.props.onChangeTheme}> {<IoIosMoon />} {this.props.name}</Span>
            </TopSection>
        );
    }
}
export {Header};
