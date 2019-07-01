import React from 'react';
import {
  PanelHeader, platform, IOS,
  PanelHeaderContent, HeaderButton, HeaderContext, List, Cell
} from "@vkontakte/vkui";

import './Header.css';
import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";
import IconMoreHorizontal from '../icon/IconMoreHorizontal';
import IconClose from '../icon/IconClose';
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import LikeCounterWithIcon from "../likeCounterWithIcon/LikeCounterWithIcon";
import IconQuestionMark from "../icon/IconQuestionMark";

const osname = platform();

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contextOpened: false,
      mode: '1'
    };

    this.toggleContext = this.toggleContext.bind(this);
    this.select = this.select.bind(this);
  }

  toggleContext() {
    this.setState({contextOpened: !this.state.contextOpened});
  }

  select(e) {
    const currentMode = e.currentTarget.dataset.mode;
    this.setState({mode: currentMode});
    requestAnimationFrame(this.toggleContext);
  }

  render() {
    const {func, goTo, title, asideShow, iconIOS, iconAndroid, dropDown, page} = this.props;
    return (
      <React.Fragment>
        <PanelHeader theme='alternate'
                     className='main-header'
                     left={<HeaderButton
                       onClick={func}
                       data-to={goTo}>
                       {page === 'tinder' && osname === IOS ? <LikeCounterWithIcon/> : osname === IOS ?
                         iconIOS ? <IconChevronIOSBack/> : null :
                         iconAndroid ? <IconArrowAndroidBack/> : null}

                     </HeaderButton>}
                     right={[
                       <div className='header-right-button-block'>
                         <IconMoreHorizontal/>
                         <IconClose/>
                       </div>
                     ]}>
          <PanelHeaderContent onClick={this.toggleContext}
                              className='header header-home-panel'
                              aside={asideShow ? osname === IOS ?
                                <IconDropDownIOS currentColor='#AEBFCF'/> :
                                <IconDropDownAndroid currentColor='#404040'/> : null}>
            <div>{title}</div>
            {page === 'tinder' && osname !== IOS ? <LikeCounterWithIcon/> : null}
            {page === 'tinder' && osname !== IOS ?
              <div className='header-question-icon'><IconQuestionMark/></div> : null}
          </PanelHeaderContent>
        </PanelHeader>
        {dropDown ?
          <HeaderContext opened={this.state.contextOpened}
                         onClose={this.toggleContext}>
            <List>
              <Cell
                asideContent={this.state.mode === '1' ? <Icon24Done fill="var(--accent)"/> : null}
                onClick={this.select}
                data-mode="1"
              >
                {title === 'Все кроссовки' ? 'В тренде' : 'Избранное'}
              </Cell>
              <Cell
                asideContent={this.state.mode === '2' ? <Icon24Done fill="var(--accent)"/> : null}
                onClick={this.select}
                data-mode="2"
              >
                {title === 'Все кроссовки' ? 'Скидки' : osname === IOS ? 'Нравиться' : 'Мне нравиться'}
              </Cell>
              {title === 'Все кроссовки' ? <Cell
                asideContent={this.state.mode === '3' ? <Icon24Done fill="var(--accent)"/> : null}
                onClick={this.select}
                data-mode="3"
              >
                Limited edition
              </Cell> : null}

            </List>
          </HeaderContext> : null}
      </React.Fragment>
    )
  }
}

export default Header;

