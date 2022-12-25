import React from 'react'
import './Topbar.scss'
import { LoginOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import BurgerMenu from 'components/BurgerMenu/BurgerMenu'

function Topbar() {
  const items: MenuProps['items'] = [
    // {
    //   label: 'Navigation test',
    //   key: 'app',
    //   icon: <AppstoreOutlined />,
    // },
    {
      label: (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </a>
      ),
      key: 'alipay1',
    },
    {
      label: (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch stuff
        </a>
      ),
      key: 'alipay2',
    },
    {
      label: (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In
        </a>
      ),
      icon: <LoginOutlined />,
      key: 'alipay3',
    },
  ]

  return (
    <div className="topbar-wrapper">
      <div className="title">Chirp ™</div>
      <Menu
        mode="horizontal"
        items={items}
        className={'topbar__navigation-wrapper'}
      />
      <BurgerMenu />
    </div>
  )
}

export default Topbar
