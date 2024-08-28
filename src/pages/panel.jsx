import { useState } from 'react'
import arrow from '../assets/images/down-arrow.png'
import close from '../assets/images/close.png '


export default function Panel() {
    const [name , setname]=useState("amir")
    const [surname , setsurname]=useState("reza**")
    const [email , setemail]=useState("amir***@gmail.com")


    /*hidden*/
    const row=()=>{
       { document.getElementById('box')?.classList.replace('hidden','block')};
       { document.getElementById('flash')?.classList.replace('block','hidden')};

    }
    const hidden=()=>{
        { document.getElementById('box')?.classList.replace('block','hidden')};
        { document.getElementById('flash')?.classList.replace('hidden','block')};
 
     }
     


    return(
        <>
        <div className="bg-black w-full h-full fixed px-5 pt-0 overflow-auto ">
        <div className="w-full h-20 px-0 py-3">
            <div className="h-10 w-1/12 bg-yellow-400 rounded-xl text-center p-1 float-left "><p className="text-stone-800 text-lg font-medium">No.</p></div>
            <div className="w-11/12 h-full float-left grid grid-cols-3 gap-2 pl-2">
            <div className="h-10 col-span-1 bg-yellow-400 rounded-xl text-center p-1  "><p className="text-stone-800 text-lg font-medium">Name</p></div>
            <div className="h-10 col-span-1  bg-yellow-400 rounded-xl text-center p-1  "><p className="text-stone-800 text-lg font-medium">SurName</p></div>
            <div className="h-10 col-span-1 bg-yellow-400 rounded-xl text-center p-1  "><p className="text-stone-800 text-lg font-medium">Email</p></div>
            </div>
        </div>

        <div className="w-full h-auto float-left ">
        <div className="w-full h-16 px-0 pt-3">
            <div className="h-10 w-1/12 bg-slate-600 rounded-xl text-center p-1 float-left "><p className="text-white text-lg font-medium w-16 float-left text-right">1</p> <button onClick={()=>{row()}} id='flash' className='w-5 float-left mt-2 ml-2 block' ><img src={arrow} alt="" /></button> </div>
            <div className="w-11/12 h-full float-left grid grid-cols-3 gap-2 pl-2">
            <div className="h-10 col-span-1 bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{name}</p></div>
            <div className="h-10 col-span-1  bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{surname}</p></div>
            <div className="h-10 col-span-1 bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{email}</p></div>
            </div>
        </div>
        <div id='box' className="w-full hidden h-52 rounded-xl bg-slate-600 relative">
        <button onClick={()=>{hidden()}} className='w-5 absolute top-2 left-2'><img src={close} alt="" /></button>
        </div>
        </div>


        <div className="w-full h-auto float-left ">
        <div className="w-full h-16 px-0 pt-3">
            <div className="h-10 w-1/12 bg-slate-600 rounded-xl text-center p-1 float-left "><p className="text-white text-lg font-medium w-16 float-left text-right">2</p> <button className='w-5 float-left mt-2 ml-2'><img src={arrow} alt="" /></button> </div>
            <div className="w-11/12 h-full float-left grid grid-cols-3 gap-2 pl-2">
            <div className="h-10 col-span-1 bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{name}</p></div>
            <div className="h-10 col-span-1  bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{surname}</p></div>
            <div className="h-10 col-span-1 bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{email}</p></div>
            </div>
        </div>
        <div className="w-full h-52 rounded-xl bg-slate-600">

        </div>
        </div>

        <div className="w-full h-auto float-left ">
        <div className="w-full h-16 px-0 pt-3">
            <div className="h-10 w-1/12 bg-slate-600 rounded-xl text-center p-1 float-left "><p className="text-white text-lg font-medium w-16 float-left text-right">3</p> <button className='w-5 float-left mt-2 ml-2'><img src={arrow} alt="" /></button> </div>
            <div className="w-11/12 h-full float-left grid grid-cols-3 gap-2 pl-2">
            <div className="h-10 col-span-1 bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{name}</p></div>
            <div className="h-10 col-span-1  bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{surname}</p></div>
            <div className="h-10 col-span-1 bg-slate-600 rounded-xl text-center p-1  "><p className="text-white text-lg font-light">{email}</p></div>
            </div>
        </div>
        <div className="w-full h-52 rounded-xl bg-slate-600">

        </div>
        </div>

        



        </div>
        </>
    )
}