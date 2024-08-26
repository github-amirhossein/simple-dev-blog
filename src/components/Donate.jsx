import coffee from '../assets/images/'




export default function Donate() {
    return(
        <>
        <div className=" h-full w-full fixed bg-black flex flex-col pt-10 justify-center items-center">
          <h1 className="text-yellow-300 font-bold h-10 text-2xl md:text-3xl block mb-2 " >Donate me a Coffee!</h1>
          <img className='w-16 h-16 block' src={coffee} alt="" />
          <div className='w-80 sm:w-96 p-3 h-72 mt-7 flex justify-center items-center flex-col'>
      
          <div className="grid grid-cols-5 gap-4 w-full ">
            <p className='text-slate-400 float-left pt-2 col-span-2 ml-7'>Espresso</p>
            <button><img className='w-12 h-12 float-left col-span-1 hover:scale-110' src={coffee} alt="" /></button>
          <div className='bg-slate-800 w-28 h-10 float-left rounded-2xl col-span-2 text-center p-2 mt-1'><p className='text-slate-400'>70000</p></div>
          </div>
      
          <div className="grid grid-cols-5 gap-4 mt-6 w-full ">
            <p className='text-slate-400 float-left pt-2 col-span-2 ml-4'>Cuppuccino</p>
            <button><img className='w-12 h-12 float-left col-span-1 hover:scale-110' src={coffee} alt="" /></button>
          <div className='bg-slate-800 w-28 h-10 float-left rounded-2xl col-span-2 text-center p-2 mt-1'><p className='text-slate-400'>80000</p></div>
          </div>
      
          <div className="grid grid-cols-5 gap-4 mt-6 w-full ">
            <p className='text-slate-400 float-left pt-2 col-span-2 ml-10'>Latte</p>
            <button><img className='w-12 h-12 float-left col-span-1 hover:scale-110' src={coffee} alt="" /></button>
          <div className='bg-slate-800 w-28 h-10 float-left rounded-2xl col-span-2 text-center p-2 mt-1'><p className='text-slate-400'>90000</p></div>
          </div>
      
          </div>
      
          <button className='bg-yellow-400 w-52 h-12 rounded-2xl text-lg font-medium hover:scale-110'>Payment</button>
      
      
      
      
      
        </div>
          </>
        
        
        
        
        
        
        
    
    )
}