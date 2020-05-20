import React from 'react';
import withScreenSizeDetectors from '../../hocs/withScreenSizeDetectors.js';
import {MainDivStyle,DataStyle,TitleStyle} from './styledComponent.js';
class DeviceTypeText extends React.Component{
    render(){
        const {isDesktop,isMobile,isTablet} = this.props;
        let deviceName = isMobile()?"Mobile":(isTablet()?"Tablet":(isDesktop()?"Desktop":"null"));

        return(
            <MainDivStyle>
                <TitleStyle>DeviceTypeText</TitleStyle>
                <DataStyle>
                    <p>DeviceType:</p>
                    <p>{deviceName}</p>
                </DataStyle>
            </MainDivStyle>
        );
    }
}

export default withScreenSizeDetectors(DeviceTypeText);