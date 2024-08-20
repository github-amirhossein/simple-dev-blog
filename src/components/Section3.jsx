import { colorPalm } from '../utilities';
import Box from './Box';

export default function Section3() {
  return (
    <section>
      <Box className={colorPalm['gray']}>
        <p>Case Study</p>
      </Box>

      <Box className={colorPalm['yellow']}>
        <span>33%</span>
        <span>Insurance</span>
        <h2>Revolutionizing the Insurance Industry</h2>
        <p>How an AI-Powered Chat Increased Sales by 33%</p>
      </Box>

      <Box className={colorPalm['blue']}>
        <span>15%</span>
        <span>Retail</span>
        <h2>Enhancing Retail with AI</h2>
        <p>Store Boosted Sales by 15% Using Personalized Recommendations</p>
      </Box>

      <Box className={colorPalm['pink']}>
        <span>40%</span>
        <span>Hospital</span>
        <h2>Revolutionizing the Insurance Industry</h2>
        <p>Hospital Reduced Wait Times by 40%</p>
      </Box>
    </section>
  );
}
