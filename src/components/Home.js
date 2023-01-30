import Typewriter from 'typewriter-effect';
import '../styles/Home.scss';

export default function Home() {
  return (
    <section className='Home'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Eleanor Maitland ')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2000)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .pauseFor(1000)
            .typeString('Software Engineer.')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .start();
        }}
      />
    </section>
  );
}
