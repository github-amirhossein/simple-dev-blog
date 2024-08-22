import coffee from './../assets/images/coffee.svg';

export function MemberBio({ imgSrc, onOpenMoreInfo, memberName = 'Omid' }) {
  return (
    <div
      onClick={onOpenMoreInfo}
      className='grid grid-cols-3 border-2 rounded-3xl over p-2 text-sm'
    >
      <div className='col-span-1 flex items-center rounded-full overflow-hidden'>
        <img className='h-full' src={imgSrc} alt={`${memberName} image`} />
      </div>

      <div className='col-span-2 pl-4 flex flex-col justify-between'>
        <h3 className='border-l-2 border-yellow bg-gray p-1 rounded-se-2xl'>
          {memberName}
        </h3>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          quisquam vel!
        </p>

        <div className='flex justify-between h-8'>
          <button className='bg-yellow text-blue px-5 rounded-lg'>
            more info
          </button>
          <button className='size-8 self-center bg-white overflow-hidden rounded-lg'>
            <img className='scale-150' src={coffee} alt='buy me a coffe' />
          </button>
        </div>
      </div>
    </div>
  );
}
