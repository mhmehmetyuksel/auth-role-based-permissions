import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const adminItems: MenuProps['items'] = [
  {
    label: 'Kullanıcılar',
    key: 'users',
    icon: <MailOutlined />,
  },
  {
    label: 'Ürünler',
    key: 'product',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Profil',
    key: 'profile',
    icon: <SettingOutlined />,
  },
];

const userItems: MenuProps['items'] = [
    {
      label: 'Profil',
      key: 'profile',
      icon: <MailOutlined />,
    },
    {
      label: 'Favoriler',
      key: 'favorites',
      icon: <AppstoreOutlined />,
    },
  ];

const App: React.FC = () => {
  const [current, setCurrent] = useState('');
  const store = useAppSelector((state) => state.authenticator)
  const {isAdmin} = store
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(e.key)
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={isAdmin ? adminItems : userItems} />;
};

export default App;