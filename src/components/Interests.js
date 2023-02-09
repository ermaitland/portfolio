import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import charityWalk from '../assets/charity-walk.png';
import gallery from '../assets/gallery.png';
import sundayRoast from '../assets/sunday-roast.png';
import poleFitness from '../assets/pole-fitness.png';
import skiing from '../assets/skiing.png';
import newHair from '../assets/new-hair.png';
import reading from '../assets/reading.jpeg';
import baking from '../assets/baking.png';
import '../styles/main.scss';

export default function Intrests() {
  return (
    <section className='interests' id='interests'>
      <ImageList sx={{ width: 800, height: 750 }}>
        <ImageListItem key='Subheader' cols={2}>
          <ListSubheader component='div' className='title'>
            Some past time I enjoy...
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

const itemData = [
  {
    img: sundayRoast,
    title: 'Sunday Roast',
    author: 'Friends are very important to me, as are roasts',
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: gallery,
    title: 'Visiting Galleries',
    author: 'I am a member of the V&A and love to explore new exhibitions'
  },
  {
    img: charityWalk,
    title: 'Charity walk for Bipolar',
    author: 'I organised this walk and raised almost £2,500'
  },
  {
    img: poleFitness,
    title: 'Pole Fitness',
    author: 'This was a few years back but I am working towards this again',
    cols: 2
  },
  {
    img: skiing,
    title: 'Skiing',
    author: 'I love to ski, my favorite place is Whistler or Tignes',
    cols: 2
  },
  {
    img: newHair,
    title: 'Trying new hairstlyes',
    author: 'My favorite one... I plan to have this again',
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: reading,
    title: 'Reading',
    author: 'I enjoy to read in the evenings to unwind',
    cols: 2
  },
  {
    img: baking,
    title: 'Baking',
    author: 'I love cakes, so baking them is very rewarding!',
    rows: 2,
    cols: 2,
    featured: true
  }
];
