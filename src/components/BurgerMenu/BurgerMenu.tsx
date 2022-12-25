import React, { useState } from 'react'
import {
  MenuOutlined,
  LoginOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Drawer, Menu } from 'antd'
import './BurgerMenu.scss'

function BurgerMenu() {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const items: MenuProps['items'] = [
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
    <div className="burger-wrapper">
      <MenuOutlined onClick={showDrawer}></MenuOutlined>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        width="260px"
      >
        <Menu
          mode="vertical"
          items={items}
          className="burger-items"
        />
      </Drawer>
    </div>
  )
}

export default BurgerMenu
