import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {View, ConfigProvider, Root, TabbarItem, Tabbar, Epic, platform, IOS} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';


import HomeView from "../../view/homeView/HomeView";
import SearchView from "../../view/searhView/SearchView";
import TinderView from "../../view/tinderView/TinderView";
import FavoritesView from "../../view/favoritesView/FavoritesView";
import SettingsView from "../../view/settingsView/SettingsView";
import StartView from "../../view/startView/StartView";
import IconHome from "../icon/IconHome";
import IconSearch from "../icon/IconSearch";
import IconKross from '../icon/IconKross';
import IconHeart from '../icon/IconHeart';
import IconSetting from '../icon/IconSetting';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStory: 'homeView',
      fetchedUser: null,
    };
  }

  componentDidMount() {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({fetchedUser: e.detail.data});
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
  }

  goView = (e) => {
    this.setState({activeStory: 'homeView'})
  };

  onStoryChange = (e) => {
    this.setState({activeStory: e.currentTarget.dataset.story})
  };

  render() {
    return (
      <ConfigProvider isWebView={true}>
        <Epic activeStory={this.state.activeStory}
              tabbar={
                <Tabbar className={this.state.activeStory === 'welcome' ? 'main-tabbar-hidden' : 'main-tabbar-show'}>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'homeView'}
                              data-story='homeView'>
                    <IconHome active={this.state.activeStory === 'homeView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'searchView'}
                              data-story='searchView'>
                    <IconSearch active={this.state.activeStory === 'searchView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'tinderView'}
                              data-story='tinderView'>
                    <IconKross active={this.state.activeStory === 'tinderView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'favoritesView'}
                              data-story='favoritesView'>
                    <IconHeart active={this.state.activeStory === 'favoritesView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'settingsView'}
                              data-story='settingsView'>
                    <IconSetting active={this.state.activeStory === 'settingsView'}/>
                  </TabbarItem>
                </Tabbar>}>
          <StartView id='welcome' goView={this.goView}/>
          <HomeView id='homeView'/>
          <SearchView id='searchView'/>
          <TinderView id='tinderView'/>
          <FavoritesView id='favoritesView'/>
          <SettingsView id='settingsView'/>
        </Epic>
      </ConfigProvider>
    );
  }
}

export default App;


