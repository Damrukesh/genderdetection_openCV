import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

const ChannelItem = ({ channel }) => {
  return (
    <ListItemButton>
      <ListItemText primary={channel} />
    </ListItemButton>
  );
};

export default ChannelItem;
