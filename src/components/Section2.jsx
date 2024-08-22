import noImage from './../assets/images/no-image-available.jpg';
import { MemberBio } from './MemberBio';

export default function Section2() {
  return (
    <section className='grid grid-rows-subgrid grid-cols-1'>
      <MemberBio imgSrc={noImage} memberName='Amir' />
      <MemberBio imgSrc={noImage} memberName='Hooman' />
      <MemberBio imgSrc={noImage} memberName='Hossein' />
      <MemberBio imgSrc={noImage} memberName='Omid'/>
    </section>
  );
}
