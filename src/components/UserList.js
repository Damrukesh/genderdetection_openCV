import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const UserList = () => {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <Box sx={{ display: 'flex', gap: 2, padding: 2 }}>
      {users.map((user) => (
        <Box key={user} sx={{ textAlign: 'center' }}>
          <Avatar sx={{ margin: '0 auto', backgroundColor: '#3b3b50' }}>{user[0]}</Avatar>
          <Typography variant="caption" sx={{ color: '#fff' }}>
            {user}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default UserList;
