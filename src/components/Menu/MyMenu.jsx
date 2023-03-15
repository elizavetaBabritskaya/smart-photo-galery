import React from "react";
import {Menu} from 'antd';
import icon from './images/icon.png'

const Icon =() => (
  <img style={{padding: '0 5px' }} src={icon}/>
)



const MyMenu = () => {
  return (
    <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: ' Мои фото',
              icon:<Icon />, 
            },
            {
              key: '2',
              label: 'Мои альбомы',
              icon: <Icon />
            },
            {
              key: '3',
              label: 'Автоматические альбомы',
              icon: <Icon />
            },
            {
              key: '4',
              label: 'Доступные мне',
              icon: <Icon />
            },
            {
              key: '5',
              label: 'Корзина',
              icon: <Icon />
            },
          ]}
        />
  );
};
export default MyMenu;