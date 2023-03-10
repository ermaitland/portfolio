import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
import '../styles/main.scss';

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
              <Link
                to='aboutMe'
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  About Me
                </Button>
              </Link>
              <Link
                to='skills'
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  Skills
                </Button>
              </Link>{' '}
              <Link
                to='projects'
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  Projects
                </Button>
              </Link>
              <Link
                to='contact'
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  Contact
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </section>
      </AppBar>
    </section>
  );
}
export default Navbar;
