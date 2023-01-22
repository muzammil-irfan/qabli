import { Box, ButtonBase } from '@mui/material';
import React from 'react';

export default function CustomBaseButton({
  onClick,
  backgroundColor,
  color,
  label,
  width,
  height,
  py,
  px,
  ...props
}) {
  return (
    <ButtonBase sx={{ width: width === '100%' ? width : null }}>
      <Box
        px={2 || px}
        py={'5px' || py}
        backgroundColor={backgroundColor}
        color={color || 'white'}
        width={width}
        height={height}
        borderRadius="10px"
        onClick={onClick}
        {...props}
        display="flex"
        alignItems="center"
      >
        {label}
      </Box>
    </ButtonBase>
  );
}
