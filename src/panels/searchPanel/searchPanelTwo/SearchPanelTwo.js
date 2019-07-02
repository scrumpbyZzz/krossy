import React from 'react';
import './SearchPanelTwo.css';
import {Panel, Cell, Group, List} from "@vkontakte/vkui";
import Header from "../../../components/header/Header";
import Icon16Done from '@vkontakte/icons/dist/16/done';

class SearchPanelTwo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      brands: [
        {
          id: 1,
          brand: 'Nike',
          status: false
        },
        {
          id: 2,
          brand: 'Air Jordan',
          status: false
        },
        {
          id: 3,
          brand: 'Adidas',
          status: false
        },
        {
          id: 4,
          brand: 'Off-White',
          status: false
        },
        {
          id: 5,
          brand: 'Asics',
          status: false
        },
        {
          id: 6,
          brand: 'Converse',
          status: false
        },
        {
          id: 7,
          brand: 'Puma',
          status: false
        },
        {
          id: 8,
          brand: 'Reebok',
          status: false
        },
        {
          id: 9,
          brand: 'FILA',
          status: false
        }
      ]
    }
  }

  handleToggleStatus = (e) => {
    let target = e.target.textContent;
    let temp = this.state.brands;
    temp = temp.map( item => (item.brand === target) ?
        {...item,
        id: item.id,
        brand: item.brand,
        status: !item.status} : item
    );
    this.setState({brands: temp})
  };

  render() {
    const {brands} = this.state;
    const markUp = brands.map(item => {
      return <Cell key={item.id}>
        {item.brand}
        {item.status ? <Icon16Done fill="var(--accent)"/> : null}
      </Cell>})

    return (
      <Panel id={this.props.id} >
        <Header title='Бренды'
                iconIOS={true}
                iconAndroid={true}
                func={this.props.goPanel}
                goTo='search-1'/>
        <div className='search-panel-two_wrap'>
          <Group>
            <List onClick={this.handleToggleStatus}>
              {markUp}
            </List>
          </Group>
        </div>
      </Panel>
    )
  }
}

export default SearchPanelTwo;
