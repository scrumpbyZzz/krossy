import React from 'react';
import {PanelHeader, platform, IOS, PanelHeaderContent, HeaderButton} from "@vkontakte/vkui";
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import './Header.css';

import HeaderButtonMore from '../buttons/headerButtonMore/HeaderButtonMore';
import HeaderButtonCancel from '../buttons/headerButtonCancel/HeaderButtonCancel';

import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";



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
                     <HeaderButtonMore/>
                     <HeaderButtonCancel/>
                   </div>
                 ]}
    >
    </PanelHeader>
  )
};

export default Header;

