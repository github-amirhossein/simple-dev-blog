import Box from './Box';

export default function Section1(){
  return (
    <section>
      <Box className='bg-gray text-yellow'>
        <span>Creating the Future</span>
        <h2>Innovative AI Developer Team</h2>
        <p>
          AI is revolutionizing the future of technology, and our team of
          developers is motivated to push the boundaries of whats possible with
          this incredible tool
        </p>
      </Box>

      <Box className='bg-pink text-white'>
        <h2>Transform </h2>
        <p>Rethinking business models</p>
      </Box>

      <Box className='bg-blue text-white'>
        <h2>Automate</h2>
        <p>Deploying robotics and other automation tools</p>
      </Box>

      <Box className='bg-white text-pink'>
        <h2>Innovate</h2>
        <p>
          Achieved through a variety of methods, including experimentation,
          creative problem-solving
        </p>
      </Box>
    </section>
  );
}
