import React from 'react';
import Image1 from "/assets/category/gaming.png";
import Image2 from "/assets/category/vr.png";
import Image3 from "/assets/category/speaker.png";
import Button from "../Shared/Button"

export default function Category2() {
    return (
        <>
        <div className='py-8 ml-10  '>
              <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* first col */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300 to-gray-100 text-white rounded-3xl relative
                    h-[320px] flex items-end '>
                        <div className='bg-gradient-to-br from-gray-300 to-gray-100'>
                           <div className='bg-gradient-to-br from-gray-300 to-gray-100 text-white'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gaming</p>
                            <Button
                            text="Buy"
                            textColor="text-red-500"
                            bgcolor="bg-white"/>
                           </div> 
                        </div>
                        <img className="w-50 md:w-[350px] absolute top-1/2 -translate-y-1/2 -right-0" src={Image1} alt="" />
                    </div>
                    {/* second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-green-500 to-green-200 text-white rounded-3xl relative
                    h-[320px] flex items-start'>
                        <div className='bg-gradient-to-br from-green-500 to-green-200'>
                           <div className='bg-gradient-to-br from-green-500 to-green-200 text-white '>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Virtual</p>
                            <Button
                            text="Buy"
                            textColor="text-white"
                            bgcolor="bg-red-400"/>
                           </div> 
                        </div>
                        <img className="w-[250px] absolute bottom-0 right-0" src={Image2} alt="" />
                    </div>
                    {/* third col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-amber-500 to-amber-300 text-white rounded-3xl relative
                    h-[320px] flex items-start '>
                        <div>
                           <div className='bg-gradient-to-br from-amber-500 to-amber-300 text-white'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>                       
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Speaker</p>
                            <Button
                            text="Buy"
                            textColor="text-amber-500"
                            bgcolor="bg-white"/>
                           </div> 
                        </div>
                        <img className="w-[250px] absolute bottom-0 -right-8 lg:top-[40px]" src={Image3} alt="" />
                    </div>
                </div>
              </div>
            </div>

        </>
       
  )
}

