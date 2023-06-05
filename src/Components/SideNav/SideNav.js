import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function SideNav() {
    return (
        <Sidebar collapsed	>
            <Menu>
                <SubMenu label="TESTE">
                    <MenuItem>teste1</MenuItem>
                    <MenuItem> teste2 </MenuItem>
                </SubMenu>
                <MenuItem> teste3 </MenuItem>
                <MenuItem> teste4 </MenuItem>
            </Menu>
        </Sidebar>
    )
}
