import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default function TopNav(){
    const handler = (val) => {
        window.scroll(0,val*1000)
    }

    return (
        <div className="topNav">
            <AppBar>
                <Tabs centered>
                    <Tab label="About" onClick={(e) => handler(0)}/>
                    <Tab label="Products" onClick={(e) => handler(1)}/>
                    <Tab label="News" onClick={(e) => handler(2)}/>
                    <Tab label="Contacts" onClick={(e) => handler(3)}/>
                    <Tab label="Admin" href="./cmpe272/admin"/>
                    <Tab label="User" href="./cmpe272/user"/>
                </Tabs>
            </AppBar>
        </div>
    )
}