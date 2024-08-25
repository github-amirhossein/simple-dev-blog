import { useState } from 'react';

export default function Join() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseText, setResponseText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes('@')) return setResponseText('email is incorrect');
    if (phoneNumber.length !== 11)
      return setResponseText('phone number should have 11 character');

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    async function postUserData(api) {
      try {
        const response = fetch(api, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const postedData = response.json();
        console.log(postedData);
      } catch (err) {
        console.log(err);
      }
    }

    // postUserData function need to invoke here with real api endpoint!
  }

  return (
    <section className='min-h-[calc(100vh-210px)] grid grid-col-1 items-center'>
      <form
        action=''
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-4'
      >
        <div className='relative grid grid-cols-3'>
          <label
            className='absolute top-0 left-4 -translate-y-1/2 bg-black px-4 text-sm'
            htmlFor='firstName'
          >
            first name
          </label>
          <input
            className='col-span-3 bg-black border-2 border-light py-2 px-4 rounded-full text-xl'
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='relative grid grid-cols-3'>
          <label
            className='absolute top-0 left-4 -translate-y-1/2 bg-black px-4 text-sm'
            htmlFor='lastName'
          >
            lastName
          </label>
          <input
            className='col-span-3 bg-black border-2 border-light py-2 px-4 rounded-full text-xl'
            type='text'
            id='lastName'
            name='last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className='relative grid grid-cols-3'>
          <label
            className='absolute top-0 left-4 -translate-y-1/2 bg-black px-4 text-sm'
            htmlFor='email'
          >
            e-mail
          </label>
          <input
            className='col-span-3 bg-black border-2 border-light py-2 px-4 rounded-full text-xl'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='relative grid grid-cols-3'>
          <label
            className='absolute top-0 left-4 -translate-y-1/2 bg-black px-4 text-sm'
            htmlFor='phoneNumber'
          >
            phone number
          </label>
          <input
            className='col-span-3 bg-black border-2 border-light py-2 px-4 rounded-full text-xl'
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(Number(e.target.value))}
          />
        </div>

        <input
          type='submit'
          value='submit'
          className='block mx-auto border-2 border-yellow py-2 w-40 text-center rounded-full my-4'
        />

        <p className='text-[#ff0000] text-center'>{responseText}</p>
      </form>
    </section>
  );
}
