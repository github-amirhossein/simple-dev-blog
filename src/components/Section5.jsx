import { colorPalm } from '../utilities';
import Box from './Box';
import cube3d from './../assets/images/cube3d.svg';

export default function Section5() {
  return (
    <section>
      <Box className={colorPalm['gray']}>
        <p>Overview of how we work</p>
        <img src={cube3d} alt='cube 3d' />
        <h2>
          We pride ourselves on our transparency, communication, and commitment
          to quality
        </h2>
      </Box>

      <Box className={colorPalm['blue']}>
        <img src='' alt='shape' />
        <p>Deploying robotics and other automation tools</p>
      </Box>

      <Box className={colorPalm['white']}>
        <img src='' alt='shape' />
        <p>Rethinking business models</p>
      </Box>

      <Box className={colorPalm['yellow']}>
        <img src='' alt='shape' />
        <p>Achieved through a variety of methods</p>
      </Box>
    </section>
  );
}
