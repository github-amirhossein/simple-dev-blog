import OptionButton from './OptionButton';

export default function Section6() {
  return (
    <section>
      <h2>
        Do you have a question or a project you need help with? Contact us!
      </h2>
      <hr />

      <div className='flex flex-wrap justify-around gap-y-1'>
        <OptionButton icon='logout'>LinkedIn</OptionButton>
        <OptionButton icon='logout'>E-mail</OptionButton>
        <OptionButton icon='logout'>Instagram</OptionButton>
      </div>
    </section>
  );
}
