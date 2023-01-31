import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import earlyYears from '../assets/1999.png';
import school from '../assets/2000.png';
import brain from '../assets/2021.png';
import chill from '../assets/2022.png';
import '../styles/AboutMe.scss';

export default function AboutMe() {
  return (
    <section className='aboutMe'>
      <Typography className='title'>All about Eleanor Maitland...</Typography>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Card sx={{ display: 'flex', mt: 5, mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={20}>
                  I was born and grew up in a small village near Oxford. I'm the
                  yougest of three which gave me a lot of character building...
                  I'd like to add we are now great friends!
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component='img'
              sx={{ width: 180 }}
              image={earlyYears}
              alt='baby photo'
            />
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={20}>
                  I went to school in the center of Oxford where I made some of
                  my oldest and closest friends. At this point in my life I was
                  quite sporty, unfortunately this sporting ability has
                  deminished over the years. I managed to bring it back slightly
                  during my time at Birmingham University, I did triathalon
                  training as well as pole fitness! During the summer of my
                  first year at Uni studying Chemistry, I did a research project
                  at Oxford university in the BioChemistry department. That was
                  new experiance and it taught me how much I love to push myself
                  and expand my knowledge.
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component='img'
              sx={{ width: 180 }}
              image={school}
              alt='school years'
            />
          </Card>
          <Card sx={{ display: 'flex', mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={20}>
                  Then it was my twenties. Usually this is a time of fun and
                  stupid mistakes but for me it was slightly different. At 21 I
                  was diagnosed with Bipolar, this was during my final reasearch
                  project for my masters. I did manage to finish it but I
                  thought that would be the hardest thing I had to do... but
                  then, when I was 27, I self diagnosed from a medical tutorial
                  I was facilitating, with Cushings disease. This is a rare
                  endocrine disease caused by a pituitary tumour, which is
                  located at the base of the brain. For me this tumour was also
                  touching my optic nerve so it was straight into brain surgery
                  and as it was covid, this meant no one in the hospital with
                  me.
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component='img'
              sx={{ width: 180 }}
              image={brain}
              alt='brain scan'
            />
          </Card>
          <Card sx={{ display: 'flex', mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={20}>
                  But.... just 8 months after brain surgery I started General
                  Assembly. I immediately fell in love with coding, it doesn't
                  feel like a chore it genuinely feels fun. My recovery has gone
                  better than I could have hoped and even though its been tough
                  it has taught me so much about who I am as a person.
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component='img'
              sx={{ width: 180, height: 170 }}
              image={chill}
              alt='holiday photo'
            />
          </Card>
        </Grid>
      </Container>
    </section>
  );
}
