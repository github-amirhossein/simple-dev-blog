import coffee from './../assets/images/coffee.svg';

export function MemberBio({ imgSrc, onOpenMoreInfo, memberName = 'Omid' }) {
  return (
    <div className='grid grid-cols-12 bg-light dark:bg-gray rounded-3xl over p-2 text-sm'>
      <div className='col-span-4 md:col-span-5 flex items-center justify-center rounded-full overflow-hidden self-center justify-self-center'>
        <img className='' src={imgSrc} alt={`${memberName} image`} />
      </div>

      <div className='col-span-8 md:col-span-7 pl-4 flex flex-col justify-between'>
        <h3 className='border-l-2 border-yellow p-2'>
          {memberName}
        </h3>
        <p className='text-justify my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          quisquam vel!
        </p>

        <div className='flex justify-between h-8'>
          <button
            onClick={onOpenMoreInfo}
            className='underline rounded-full text-yellow px-5 hover:bg-yellow hover:text-black'
          >
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
