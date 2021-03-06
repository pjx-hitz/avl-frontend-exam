import React, { useEffect, useState } from 'react';
import ProTypes from 'prop-types';
import { Slider } from '@mui/material';

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 11.8,
    label: '6',
  },
  {
    value: 20.4,
    label: '9',
  },
  {
    value: 29.3,
    label: '12',
  },
  {
    value: 37.9,
    label: '15',
  },
  {
    value: 50,
    label: '50',
  },
];

const StyledSlider = (props) => {
  const [labelActive, setLabelActive] = useState('');
  const updateLabelActiveStatus = (data) => {
    let index = marks.findIndex((m) => m.value >= data);
    if (data === 50) {
      index = marks.length;
    }
    if (index !== -1) {
      setLabelActive(`&[data-index="${index - 1}"]`);
    }
  };
  const handleChange = (e, data) => {
    updateLabelActiveStatus(data);

    if (props.handleValueChanged) {
      props.handleValueChanged(e, data);
    }
  };

  // initial update for active marked label
  useEffect(() => {
    updateLabelActiveStatus(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <Slider
      marks={marks}
      aria-label={props['aria-label']}
      defaultValue={props.defaultValue}
      min={props.min}
      max={props.max}
      sx={{
        color: 'white',
        height: '8px',
        '& .MuiSlider-mark': {
          opacity: '0',
        },
        '& .MuiSlider-markLabel': {
          color: 'white',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          opacity: '0.5',
          marginTop: '2px',
          '&[data-index="0"]': {
            marginLeft: '4px',
          },
          [`&[data-index="${marks.length - 1}"]`]: {
            paddingRight: '19px',
          },
        },
        '& .MuiSlider-markLabelActive': {
          [labelActive]: {
            opacity: '1',
          },
        },
        '& .MuiSlider-track': {
          border: 'none',
          background: 'linear-gradient(to left, #ffd25f , #ff5c01)',
        },
        '& .MuiSlider-thumb': {
          height: 26,
          width: 26,
          backgroundColor: '#1b1b1b',
          border: '6px solid #ffd05d',
          transform: 'translate(-22px, -50%)',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        ...props.sx,
      }}
      onChange={handleChange}
    />
  );
};

StyledSlider.proTypes = {
  handle: ProTypes.func,
};

export default StyledSlider;
