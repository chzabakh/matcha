import * as React from 'react';
import Box from '@mui/material/Box';
import { Slider, withStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ff0000',
      contrastText: '#700303',
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 2;

export default function MinimumDistanceSlider({ minAge, maxAge }) {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const marks = [
    {
      value: 0,
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
    },
    {
      value: 70,
    },
    {
      value: 80,
    },
    {
      value: 90,
    },
    {
      value: 100,
    },
  ];
  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks}
        min={minAge}
        max={maxAge}
        // color="#F0A339"
        // theme={theme}
        color='error'
      />
    </Box>
  );
}