import OptionButton from './OptionButton';

export default function Section4() {
  return (
    <section>
      <h3>
        At our AI developer company, we strive to deliver the most innovative
        and effective solutions to our clients
      </h3>

      <p>
        We begin each project with a consultation, during which we work with our
        clients to identify their needs, goals, and pain points. This allows us
        to develop a customized plan that meets their specific requirements
      </p>
      <hr />

      <div className='flex flex-wrap justify-around gap-y-1'>
        <OptionButton>Consultation</OptionButton>
        <OptionButton>Design</OptionButton>
        <OptionButton>Testing</OptionButton>
        <OptionButton>Development</OptionButton>
      </div>
    </section>
  );
}
