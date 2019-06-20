import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {View, ConfigProvider, Root, TabbarItem, Tabbar, Epic, platform, IOS} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import StartPage from "../../panels/startPage/StartPage";
import HomeView from "../../view/homeView/HomeView";
import SearchView from "../../view/searhView/SearchView";
import TinderView from "../../view/tinderView/TinderView";
import FavoritesView from "../../view/favoritesView/FavoritesView";
import SettingsView from "../../view/settingsView/SettingsView";
import HomeTabbarButtonIcon from "../buttons/tabbarButtons/HomeTabbarButtonIcon";
import SearchTabbarButtonIcon from "../buttons/tabbarButtons/SearchTabbarButtonIcon";
import TinderTabbarButtonIcon from "../buttons/tabbarButtons/TinderTabbarButtonIcon";
import FavoritesTabbarButtonIcon from "../buttons/tabbarButtons/FavotitesTabbarButtonIcon";
import SettingsTabbarButtonIcon from "../buttons/tabbarButtons/SettingsTabbarButtonIcon";
import StartView from "../../view/startView/StartView";


const osname = platform();

let fontStyleGlobal = {
  fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStory: 'tinderView',
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
                    <HomeTabbarButtonIcon active={this.state.activeStory === 'homeView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'searchView'}
                              data-story='searchView'>
                    <SearchTabbarButtonIcon active={this.state.activeStory === 'searchView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'tinderView'}
                              data-story='tinderView'>
                    <TinderTabbarButtonIcon active={this.state.activeStory === 'tinderView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'favoritesView'}
                              data-story='favoritesView'>
                    <FavoritesTabbarButtonIcon active={this.state.activeStory === 'favoritesView'}/>
                  </TabbarItem>
                  <TabbarItem onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'settingsView'}
                              data-story='settingsView'>
                    <SettingsTabbarButtonIcon active={this.state.activeStory === 'settingsView'}/>
                  </TabbarItem>
                </Tabbar>}>
          <HomeView id='homeView'/>
          <SearchView id='searchView'/>
          <TinderView id='tinderView'/>
          <FavoritesView id='favoritesView'/>
          <SettingsView id='settingsView'/>
          <StartView id='welcome' goView={this.goView}/>
        </Epic>
      </ConfigProvider>
    );
  }
}

export default App;


