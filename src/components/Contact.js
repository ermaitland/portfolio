import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import LinkedIn from '../assets/LinkedIn.png';
import GitHub from '../assets/github.png';
import '../styles/main.scss';

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <Container maxWidth='lg' sx={{ pt: 20 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'row'
          }}
          className='contacts-grid'
        >
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} className='card'>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  LinkedIn
                </Typography>
                <a
                  href='https://www.linkedin.com/in/eleanor-maitland'
                  target='blank'
                >
                  <img src={LinkedIn} alt='logo of linked in' className='img' />
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275, pb: 0.05 }} className='card'>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  GitHub
                </Typography>
                <a href='https://github.com/ermaitland' target='blank'>
                  <img src={GitHub} alt='logo of linked in' className='img' />
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4} className='contacts-grid'>
          <Card sx={{ maxWidth: 760, mt: 2 }} className='card'>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography>Email: maitland.eleanor@gmail.com</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Please feel free to drop me an email!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </section>
  );
}
