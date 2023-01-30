import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Home.scss';

function Navbar() {
  return (
    <section>
      <AppBar position='static'>
        <section className='navbar'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Eleanor Maitland
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                About Me
              </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Projects
              </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Working on
              </Button>
            </Box>
          </Toolbar>
        </section>
      </AppBar>
    </section>
  );
}
export default Navbar;
