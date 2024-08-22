import { useState } from 'react';
import noImage from './../assets/images/no-image-available.jpg';
import { MemberBio } from './MemberBio';

export default function Section2() {
  const [currentBio, setCurrentBio] = useState(1);

  function handleOpenMoreInfo() {
    setCurrentBio(1);
  }

  function handleCloseMoreInfo() {
    setCurrentBio(null);
  }

  return (
    <section className='items-between relative'>
      <h2 className='text-xl text-center pb-1'>Code Club Members Biograghie</h2>
      <div className='grid grid-rows-subgrid gap-1 grid-cols-1'>
        <MemberBio
          onOpenMorInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Amir'
        />

        <MemberBio
          onOpenMorInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Hooman'
        />

        <MemberBio
          onOpenMorInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Hossein'
        />

        <MemberBio
          onOpenMorInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Omid'
        />
      </div>

      {currentBio && (
        <div className='absolute w-full h-5/6 border-2 border-yellow bg-black top-16 z-40 left-0'>
          <button onClick={handleCloseMoreInfo}>x</button>
        </div>
      )}
    </section>
  );
}
