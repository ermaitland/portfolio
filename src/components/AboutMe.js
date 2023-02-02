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
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2013'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2012'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Agile Development Scrum Master
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </section>
  );
}
