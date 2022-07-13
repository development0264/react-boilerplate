import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import DashBoardIcon from '@mui/icons-material/HomeRounded';
import { MenuItemWrapper, MenuWrapper } from './styled';
import { NavLink } from 'react-router-dom';
interface ISidePanelProps {
  handleClick?: Function;
}

const SidePanelComponent = ({ handleClick }: ISidePanelProps) => {
  /*----------------Initializations-----------------------*/

  // menus array

  const menus = [
    {
      path: '/',
      name: 'dashboard',
      icon: <DashBoardIcon />,
    },
  ];

  /*----------------Initializations-----------------------*/

  return (
    <MenuWrapper>
      <Box>
        <Toolbar />
        {menus.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => handleClick && handleClick()}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <MenuItemWrapper>
              <Box>{item.icon}</Box>
              <Typography fontWeight={700}>{item.name}</Typography>
            </MenuItemWrapper>
          </NavLink>
        ))}
      </Box>
    </MenuWrapper>
  );
};

export default SidePanelComponent;
