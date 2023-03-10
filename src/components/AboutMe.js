import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import earlyYears from '../assets/1999.png';
import school from '../assets/2000.png';
import brain from '../assets/2021.png';
import chill from '../assets/2022.png';
import '../styles/main.scss';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function AboutMe() {
  return (
    <section className='aboutMe' id='aboutMe'>
      <Typography className='title' sx={{ mb: 10, textAlign: 'center' }}>
        All about Eleanor Maitland...
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          // className='vertical-timeline-element--work'
          contentStyle={{
            background: '#cfd8dc',
            color: '#fff'
          }}
          contentArrowStyle={{ borderRight: '7px solid  #cfd8dc' }}
          date='1995 - 2000'
          iconStyle={{ background: '#57a0c5', color: '#cfd8dc' }}
          animate={true}
        >
          <Card sx={{ display: 'flex', mt: 5, mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={15}>
                  I was born and grew up in a small village near Oxford. I'm the
                  youngest of three which gave me a lot of character building...
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#cfd8dc', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #cfd8dc' }}
          date='2000 - 2016'
          iconStyle={{ background: '#57a0c5', color: '#cfd8dc' }}
        >
          <Card sx={{ display: 'flex', mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={15}>
                  I went to school in the centre of Oxford where I made some of
                  my oldest and closest friends. At this point in my life, I was
                  quite sporty, unfortunately this sporting ability has
                  diminished over the years. I managed to bring it back slightly
                  during my time at Birmingham University, I did triathlon
                  training as well as pole fitness! During the summer of my
                  first year at Uni studying Chemistry, I did a research project
                  at Oxford university in the Biochemistry department. That was
                  a new experience and it taught me how much I love to push
                  myself and expand my knowledge.
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#cfd8dc', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #cfd8dc' }}
          date='2016 - 2022'
          iconStyle={{ background: '#57a0c5', color: '#cfd8dc' }}
        >
          <Card sx={{ display: 'flex', mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={15}>
                  Then it was my twenties. Usually this is a time of fun and
                  stupid mistakes but for me it was slightly different. At 21 I
                  was diagnosed with Bipolar, this was during my final research
                  project for my masters. I did manage to finish it but I
                  thought that would be the hardest thing I had to do... but
                  then, when I was 27, I self-diagnosed from a medical tutorial
                  I was facilitating, with Cushing???s disease. This is a rare
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
              sx={{ width: 180, height: 270 }}
              image={brain}
              alt='brain scan'
            />
          </Card>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#cfd8dc', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #cfd8dc' }}
          date='2022 - 2023'
          iconStyle={{ background: '#57a0c5', color: '#cfd8dc' }}
        >
          <Card sx={{ display: 'flex', mb: 3 }} className='card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='subtitle1' component='div' fontSize={15}>
                  But.... just 8 months after brain surgery I started General
                  Assembly. I immediately fell in love with coding, it doesn't
                  feel like a chore it genuinely feels fun. My recovery has gone
                  better than I could have hoped and even though it???s been tough
                  it has taught me so much about who I am as a person. I find
                  the constant evolution of the tech world so exciting and I
                  can???t wait to continue to learn and push myself in the future!
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
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
