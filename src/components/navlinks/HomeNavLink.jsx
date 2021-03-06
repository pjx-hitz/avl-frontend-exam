import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Icon from '../../assets/clone.svg';
import InactiveIcon from '../../assets/clone-gray-out.svg';

const HomeNavLink = ({ sx, showLabel = true }) => {
  const path = useLocation().pathname;
  const active = path === '/' || path === '/search';

  return (
    <Link to="/">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...sx,
        }}
      >
        {/* icon */}
        <img
          src={active ? Icon : InactiveIcon}
          alt="home nav icon"
          width={24}
          height={24}
        />

        {/* nav name */}
        {showLabel && (
          <Typography
            sx={{
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.4px',
              color: 'white',
              ml: '1px',
            }}
          >
            {active ? 'Home' : ''}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

export default HomeNavLink;
