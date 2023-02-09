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
              // noWrap
              component='a'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                pr: 2
              }}
            >
              Eleanor Maitland
            </Typography>
            <Box sx={{ flexGrow: 1, display: { md: 'flex', xs: 'flex' } }}>
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
                    fontFamily: 'monospace',
                    pr: 2
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
                    fontFamily: 'monospace',
                    pr: 2
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
                    fontFamily: 'monospace',
                    pr: 2
                  }}
                >
                  Projects
                </Button>
              </Link>
              <Link
                to='interests'
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
                  Interests
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
