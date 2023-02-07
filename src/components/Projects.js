import '../styles/main.scss';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import project1 from '../assets/proj-1.png';
import project2 from '../assets/proj-2.png';
import project3 from '../assets/proj-3.png';
import project4 from '../assets/proj-4.png';

const steps = [
  {
    label: 'MediChecker - Project-4',
    description: project4,
    about:
      'This was a solo project. I had one week to produce a full-stack application using Django for the back-end and React.js for the front-end. I was responsible for all aspects of the project, and due to the short timeline, this required a very structured plan. The front-end was deployed via Netlify and the back-end via Heroku.',
    link: 'https://medichecker.netlify.app/',
    link_text: 'MediChecker'
  },
  {
    label: 'Vegan Products - Project 3',
    description: project3,
    about:
      'This was a group project of three people. We had one week to build a full-stack application using MongoDB for the back-end with React.js for the front-end. I was in charge of the Users, which included the authentication process and the reviews which was creating, editing and deleting reviews. I carried these through to the front-end and also did the front-end for the home page and navbar. The front-end was deployed via Netlify, and the backend via Heroku.',
    link: 'https://vegan-products.netlify.app/',
    link_text: 'Vegan Products'
  },
  {
    label: 'Explore Makeup - Project-2',
    description: project2,
    about:
      'This project was a paired project. We had 48h to create a React.js application using a public API. This was the first experience working with multiple people on the same repository, and dividing the tasks up in order to complete the brief within the time frame. I focused on the ProductIndex, ProductCard, API and the spinner. We used Sass, Bulma, React.js, and for version control we used Git and GitHub, and other programs included Postman. This was deployed via Netlify.',
    link: 'https://exploremakeup.netlify.app/',
    link_text: 'Explore Makeup'
  },
  {
    label: 'Frog Games - Project-1',
    description: project1,
    about:
      'This project brief was to create a game individually using HTML, CSS, and JavaScript. For version control I used Git and GitHub. I had a week to complete this project.',
    link: 'https://ermaitland.github.io/ga-project-1/',
    link_text: 'Frog Games'
  }
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className='Projects' id='projects'>
      <Box sx={{ maxWidth: 400, flexGrow: 1, height: 600 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: '#57a0c5',
            ml: 2
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
          <section className='internal-text-projects'>
            <img
              src={steps[activeStep].description}
              alt={steps[activeStep].label}
              className='projectImage'
            />
            <section className='project-desctiption'>
              <p>{steps[activeStep].about}</p>
              <a href={steps[activeStep].link} target='blank' className='link'>
                {steps[activeStep].link_text}
              </a>
            </section>
          </section>
        </Box>
        <MobileStepper
          className='project-buttons'
          variant='text'
          steps={maxSteps}
          sx={{
            mt: 40,
            alignContent: 'center',
            ml: 2,
            backgroundColor: '#607d8b'
          }}
          position='static'
          activeStep={activeStep}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: 'white' }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: 'white' }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </section>
  );
}
