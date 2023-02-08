import '../styles/main.scss';
import { Typography, Container, Grid } from '@mui/material';
import htmlcss from '../assets/html_css.jpeg';
import sass from '../assets/sass.png';
import bulma from '../assets/Bulma.png';
import mui from '../assets/mui.png';
import javascript from '../assets/JavaScript.png';
import react from '../assets/React.png';
import cloudinary from '../assets/Cloudinary.png';

import mongoDB from '../assets/mongoDB.png';
import mongoose from '../assets/mongoose.png';
import node from '../assets/node.jpeg';
import express from '../assets/express.png';
import django from '../assets/django.png';
import python from '../assets/python.png';
import npm from '../assets/npm.png';
import pip from '../assets/pip.png';
import postgresql from '../assets/Postgresql.png';
import postman from '../assets/postman.png';
import JSON from '../assets/JSON.png';
import tableplus from '../assets/tablePlus.png';

import git from '../assets/git.png';
import github from '../assets/github.png';

import trello from '../assets/Trello.png';
import slack from '../assets/Slack.png';
import netlify from '../assets/netlify.png';
import heroku from '../assets/heroku.png';

export default function Skills() {
  const frontendSkills = [
    {
      name: 'HTML and CSS',
      image: htmlcss
    },
    {
      name: 'SCSS',
      image: sass
    },
    {
      name: 'Bulma',
      image: bulma
    },
    {
      name: 'MUI',
      image: mui
    },
    {
      name: 'JavaScript',
      image: javascript
    },
    {
      name: 'React.js',
      image: react
    },
    {
      name: 'Cloudinary',
      image: cloudinary
    }
  ];

  const backendSkills = [
    {
      name: 'MongoDB',
      image: mongoDB
    },
    {
      name: 'Mongoose',
      image: mongoose
    },
    {
      name: 'Node.js',
      image: node
    },
    {
      name: 'Express',
      image: express
    },
    {
      name: 'Django.py',
      image: django
    },
    {
      name: 'Python',
      image: python
    },
    {
      name: 'npm',
      image: npm
    },
    {
      name: 'pip',
      image: pip
    },
    {
      name: 'PostgreSQL',
      image: postgresql
    },
    {
      name: 'Postman',
      image: postman
    },
    {
      name: 'JSON',
      image: JSON
    },
    {
      name: 'Table Plus',
      image: tableplus
    }
  ];

  const versionControl = [
    {
      name: 'git',
      image: git
    },
    {
      name: 'GitHub',
      image: github
    }
  ];

  const otherTechnologies = [
    {
      name: 'Trello',
      image: trello
    },
    {
      name: 'Slack',
      image: slack
    },
    {
      name: 'Netlify',
      image: netlify
    },
    {
      name: 'Heroku',
      image: heroku
    }
  ];

  return (
    <section className='skills' id='skills'>
      <Container maxWidth='lg' sx={{ pt: 20 }} className='skill-container'>
        <Typography
          sx={{ fontSize: 24, textAlign: 'center', fontFamily: 'monospace' }}
          color='text.secondary'
          gutterBottom
        >
          Front-end:
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {frontendSkills.map((skill) => (
            <Grid item sx={{ pr: 5, pl: 5, pb: 3 }}>
              <img src={skill.image} alt={skill.name} className='img' />
              <Typography sx={{ textAlign: 'center' }}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: 'center',
            mt: 5,
            fontFamily: 'monospace'
          }}
          color='text.secondary'
          gutterBottom
        >
          Back-end:
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {backendSkills.map((skill) => (
            <Grid item sx={{ pr: 5, pl: 5, pb: 3 }}>
              <img src={skill.image} alt={skill.name} className='img' />
              <Typography sx={{ textAlign: 'center' }}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: 'center',
            mt: 5,
            fontFamily: 'monospace'
          }}
          color='text.secondary'
          gutterBottom
        >
          Other technologies:
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {otherTechnologies.map((skill) => (
            <Grid item sx={{ pr: 5, pl: 5, pb: 3 }}>
              <img src={skill.image} alt={skill.name} className='img' />
              <Typography sx={{ textAlign: 'center' }}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: 'center',
            mt: 5,
            fontFamily: 'monospace'
          }}
          color='text.secondary'
          gutterBottom
        >
          Version Control:
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {versionControl.map((skill) => (
            <Grid item sx={{ pr: 5, pl: 5, pb: 3 }}>
              <img src={skill.image} alt={skill.name} className='img' />
              <Typography sx={{ textAlign: 'center' }}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
