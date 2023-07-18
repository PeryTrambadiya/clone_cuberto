import React from 'react'
import Headerpage from '../components/Header/Headerpage'
import { Outlet } from 'react-router-dom'
import Footerpage from '../components/Footer/Footerpage'

const Layout = () => {
  return (
    <div>

<Headerpage />
        <div className="mainpage">
            <Outlet />
        </div>
        <Footerpage />

    </div>
  )
}

export default Layout