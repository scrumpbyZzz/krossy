import React from 'react';
import {PanelHeader, platform, IOS, PanelHeaderContent, HeaderButton} from "@vkontakte/vkui";

import './Header.css';
import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";
import IconMoreHorizontal from '../icon/IconMoreHorizontal';
import IconClose from '../icon/IconClose';
import IconChevronDownIOS from "../icon/IconChevronDownIOS";
import IconChevronAndroidRight from "../icon/IconChevronAndroidRight";
import IconChevronDownAndroid from "../icon/IconChevronDownAndroid";



const osname = platform();

const Header = ({func, goTo, title, asideShow, iconIOS, iconAndroid}) => {
  console.log(func, goTo)
  return (
    <PanelHeader theme='alternate'
                 className='main-header'
                 left={<HeaderButton
                   onClick={func}
                   data-to={goTo}>
                   {osname === IOS ?
                     iconIOS ? <IconChevronIOSBack /> : null :
                     iconAndroid ? <IconArrowAndroidBack /> : null}
                 </HeaderButton>}
                 right={[
                   <div className='header-right-button-block'>
                     <IconMoreHorizontal/>
                     <IconClose />
                   </div>
                 ]}>
      <PanelHeaderContent className='header header-home-panel'
                          aside={asideShow ? osname === IOS ?
                            <IconChevronDownIOS currentColor='#AEBFCF'/> :
                            <IconChevronDownAndroid currentColor='#404040'/> : null}>
        {title}
      </PanelHeaderContent>
    </PanelHeader>
  )
};

export default Header;

