import OptionButton from './OptionButton';

export default function Section2() {
  return (
    <section>
      <h3>We offer a range of innovative solutions </h3>
      <p>
        Our solutions can help our clients to automate their operations,
        optimize their workflows, and transform their businesses.
      </p>
      <hr />

      <div className='flex flex-wrap justify-around'>
        <OptionButton>AI development</OptionButton>
        <OptionButton>Deep learning</OptionButton>
        <OptionButton>Industry 4.0</OptionButton>
        <OptionButton>Big data</OptionButton>
        <OptionButton>Neural networks</OptionButton>
        <OptionButton>Predictive analytics</OptionButton>
      </div>
    </section>
  );
}
