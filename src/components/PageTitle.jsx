import React from 'react';
import { Typography } from '@mui/material';

const PageTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontFamily: 'Ubuntu',
        fontWeight: 400,
        fontSize: '30px',
        lineHeight: '45px',
        letterSpacing: '0.25px',
        marginBottom: '24px',
      }}
    >
      {title}
    </Typography>
  );
};

export default PageTitle;
