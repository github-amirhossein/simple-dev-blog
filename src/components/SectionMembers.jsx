import { useState } from 'react';
import noImage from './../assets/images/no-image-available.jpg';
import { MemberBio } from './MemberBio';

export default function Section2() {
  const [currentBio, setCurrentBio] = useState(null);

  function handleOpenMoreInfo() {
    setCurrentBio(1);
  }

  function handleCloseMoreInfo() {
    setCurrentBio(null);
  }

  return (
    <section className='items-between relative'>
      <h2 className='text-xl text-center pb-1'>Code Club Members</h2>
      <div className='grid py-4 pb-16 gap-4 grid-cols-1 md:grid-cols-2 m-auto'>
        <MemberBio
          onOpenMoreInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Amir'
        />

        <MemberBio
          onOpenMoreInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Hooman'
        />

        <MemberBio
          onOpenMoreInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Hossein'
        />

        <MemberBio
          onOpenMoreInfo={handleOpenMoreInfo}
          imgSrc={noImage}
          memberName='Omid'
        />
      </div>

      {currentBio && (
        <div className='absolute w-full h-full border-2 border-yellow bg-black top-0 z-20 left-0 p-8'>
          <button className='text-3xl p-4 border' onClick={handleCloseMoreInfo}>
            x
          </button>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            possimus nesciunt! Ducimus maiores quaerat obcaecati aut itaque sit
            harum. Libero illo voluptates et aut aperiam perspiciatis quia
            explicabo sit adipisci?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            iure sunt dolorem odit quos aliquam, natus accusamus animi
            consectetur doloremque. Vitae eaque dignissimos officiis veniam
            nihil. Laboriosam dolorum provident et!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consectetur aspernatur veritatis repudiandae tenetur expedita
            officiis unde quidem eum quam impedit assumenda, dolores ipsa beatae
            id eius distinctio quibusdam officia.
          </p>
        </div>
      )}
    </section>
  );
}
