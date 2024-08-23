export default function Join() {
  return (
    <form action='' className='grid grid-cols-1 gap-4'>
      <div className='grid grid-cols-3'>
        <label className='col-span-1' htmlFor='firstName'>
          first name:
        </label>
        <input
          className='col-span-2'
          type='text'
          id='firstName'
          name='firstName'
        />
      </div>

      <div className='grid grid-cols-3'>
        <label className='col-span-1' htmlFor='lastName'>
          lastName:
        </label>
        <input
          className='col-span-2'
          type='text'
          id='lastName'
          name='last name'
        />
      </div>

      <div className='grid grid-cols-3'>
        <label className='col-span-1' htmlFor='email'>
          e-mail:
        </label>
        <input className='col-span-2' type='email' id='email' name='email' />
      </div>

      <div className='grid grid-cols-3'>
        <label className='col-span-1' htmlFor='phoneNumber'>
          phone number:
        </label>
        <input
          className='col-span-2'
          type='tel'
          id='phoneNumber'
          name='phoneNumber'
        />
      </div>
    </form>
  );
}
