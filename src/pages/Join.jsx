import { useState } from 'react';

export default function Join() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    firstName
      ? setFirstNameError(null)
      : setFirstNameError('first name should be filled');

    lastName
      ? setLastNameError(null)
      : setLastNameError('last name should be filled');

    email.includes('@')
      ? setEmailError(null)
      : setEmailError('email should have @ sign');

    phoneNumber.length === 11
      ? setPhoneNumberError(null)
      : setPhoneNumberError('phone number should have 11 character');

    if (
      !firstName ||
      !lastName ||
      !email.includes('@') ||
      phoneNumber.length !== 11
    )
      return;

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
    postUserData;
  }

  return (
    <section className='min-h-[calc(100vh-210px)] grid grid-col-1 items-center'>
      <form
        action=''
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-4'
      >
        <InputJoin
          state={firstName}
          setterFunction={setFirstName}
          label='first name'
          id='first-name'
          errorState={firstNameError}
        />

        <InputJoin
          state={lastName}
          setterFunction={setLastName}
          label='last name'
          id='last-name'
          errorState={lastNameError}
        />

        <InputJoin
          state={email}
          setterFunction={setEmail}
          type='email'
          label='e-mail'
          id='user-email'
          errorState={emailError}
        />

        <InputJoin
          state={phoneNumber}
          setterFunction={setPhoneNumber}
          type='tel'
          label='first name'
          id='first-name'
          errorState={phoneNumberError}
        />

        <input
          type='submit'
          value='submit'
          className='block mx-auto border-2 border-yellow py-2 w-40 text-center rounded-full my-4'
        />
      </form>
    </section>
  );
}

function InputJoin({
  state,
  setterFunction,
  type = 'text',
  label,
  id,
  errorState,
}) {
  return (
    <div className='relative grid grid-cols-1'>
      <label
        className='absolute top-0 left-4 -translate-y-1/2 bg-white dark:bg-black px-4 text-sm'
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className='bg-white dark:bg-black border-2 border-gray dark:border-light py-2 px-4 rounded-full text-xl'
        type={type}
        id={id}
        name='last name'
        value={state}
        onChange={(e) => setterFunction(e.target.value)}
      />

      {errorState && <ErrorText>{errorState}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }) {
  return <p className='text-[#ff0000]'>{children}</p>;
}
