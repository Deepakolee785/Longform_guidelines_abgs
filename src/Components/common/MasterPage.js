import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import LeftSidebar from '../layouts/LeftSidebar'
import { CssBaseline, Hidden } from '@material-ui/core'

const MasterPage = ({ children, menuItems, appTitle }) => {
  const [open, setOpen] = useState(false)

  const handleSidebarOpen = () => {
    setOpen(!open)
  }
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar handleSidebarOpen={handleSidebarOpen} appTitle={appTitle} />
      <Hidden smDown>
        <LeftSidebar isPermanent={true} menuItems={menuItems} />
      </Hidden>
      <Hidden mdUp>
        <LeftSidebar
          isPermanent={false}
          open={open}
          handleSidebarOpen={handleSidebarOpen}
          menuItems={menuItems}
        />
      </Hidden>
      {children}
    </div>
  )
}

export default MasterPage
