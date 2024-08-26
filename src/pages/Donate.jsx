import coffee from './../assets/images/Teacup.svg';

export default function Donate() {
  return (
    <section className='w-full flex flex-col pt-20 justify-center items-center'>
      <h1 className='text-yellow font-bold text-2xl md:text-3xl mb-2'>
        Donate me a Coffee!
      </h1>
      <img className='size-16 block' src={coffee} alt='coffe icon' />

      <div className='p-3 my-7 flex justify-center items-center flex-col'>
        <DonateItem type='Espresso' worth={70000} />
        <DonateItem type='Cuppuccino' worth={80000} />
        <DonateItem type='Latte' worth={90000} />

        <button className='bg-yellow text-black py-4 mt-4 w-full justify-stretch rounded-2xl text-lg font-medium'>
          Payment
        </button>
      </div>
    </section>
  );
}

function DonateItem({ type, worth }) {
  return (
    <div className='grid grid-cols-5 items-center gap-4 mt-6 cursor-pointer'>
      <p className='col-span-2'>{type}</p>
      <img className='size-12 col-span-1' src={coffee} alt='coffee icon' />
      <p className='rounded-2xl col-span-2 text-center bg-lightGray dark:bg-darkGray py-2'>
        {worth}
      </p>
    </div>
  );
}
