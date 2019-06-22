import React from 'react';
import {PanelHeader, platform, IOS, PanelHeaderContent, HeaderButton} from "@vkontakte/vkui";

import './Header.css';
import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";
import IconMoreHorizontal from '../icon/IconMoreHorizontal';
import IconClose from '../icon/IconClose';



const osname = platform();

const Header = ({func, goTo}) => {
  console.log(func, goTo)
  return (
    <PanelHeader noShadow='false'
                 theme='alternate'
                 left={<HeaderButton
                   className='main-header'
                   onClick={func}
                   data-to={goTo}>
                   {osname === IOS ? <IconChevronIOSBack /> : <IconArrowAndroidBack />}
                 </HeaderButton>}
                 right={[
                   <div className='header-right-button-block'>
                     <IconMoreHorizontal/>
                     <IconClose />
                   </div>
                 ]}
    >
    </PanelHeader>
  )
};

export default Header;

