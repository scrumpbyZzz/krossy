import React from 'react';

import {
  PanelHeader, platform, IOS,
  PanelHeaderContent, HeaderContext, List, Cell
} from "@vkontakte/vkui";
import IconMoreHorizontal from '../icon/IconMoreHorizontal';
import IconClose from '../icon/IconClose';
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";
import Icon24Done from '@vkontakte/icons/dist/24/done';

const osname = platform();

const HeaderHome = ({toggleContext, select, contextOpened, mode}) => {

  let markUp;
  switch (mode) {
    case 'trend':
      markUp = 'В тренде';
      break;
    case 'discount':
      markUp = 'Скидки';
      break;
    case 'limited':
      markUp = 'Limited edition';
      break
    default:
      markUp = 'Все кроссовки';
  }

  return (
    <React.Fragment>
      <PanelHeader theme='alternate'
                   className='main-header'
                   right={[
                     <div className='header-right-button-block'>
                       <IconMoreHorizontal/>
                       <IconClose/>
                     </div>
                   ]}>
        <PanelHeaderContent onClick={toggleContext}
                            className='header header-home-panel'
                            aside={osname === IOS ?
                              <IconDropDownIOS currentColor='#AEBFCF'/> :
                              <IconDropDownAndroid currentColor='#404040'/>}>
          <div className='header-title'>
            {markUp}
          </div>
        </PanelHeaderContent>
      </PanelHeader>
      <HeaderContext opened={contextOpened}
                     onClose={toggleContext}>
        <List>
          <Cell
            asideContent={mode === 'all' ? <Icon24Done fill="var(--accent)"/> : null}
            onClick={select}
            data-mode="all"
          >
            Все кроссовки
          </Cell>
          <Cell
            asideContent={mode === 'trend' ? <Icon24Done fill="var(--accent)"/> : null}
            onClick={select}
            data-mode="trend"
          >
            В тренде
          </Cell>
          <Cell
            asideContent={mode === 'discount' ? <Icon24Done fill="var(--accent)"/> : null}
            onClick={select}
            data-mode="discount"
          >
            Скидки
          </Cell>
          <Cell
            asideContent={mode === 'limited' ? <Icon24Done fill="var(--accent)"/> : null}
            onClick={select}
            data-mode="limited"
          >
            Limited edition
          </Cell>
        </List>
      </HeaderContext>
    </React.Fragment>
  )
};

export default HeaderHome;

