import React from 'react'
import Image1 from "/assets/category/earphone.png";
import Image2 from "/assets/category/watch.png";
import Image3 from "/assets/category/macbook.png";
import Button from '../Shared/Button';

 function Category() {
  return (
    <div className='py-8 ml-10  '>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* first col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative
            h-[320px] flex items-end'>
                <div>
                   <div className='bg-gradient-to-br from-black/90 to-black/70 text-white '>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                    <Button
                    text="Buy"
                    textColor="text-white"
                    bgcolor="bg-red-400"/>
                   </div> 
                </div>
                <img className="w-[320px] absolute bottom-0" src={Image1} alt="" />
            </div>
            {/* second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-amber-500 to-amber-300 text-white rounded-3xl relative
            h-[320px] flex items-end '>
                <div>
                   <div className='bg-gradient-to-br from-amber-500 to-amber-300 text-white'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Watch</p>
                    <Button
                    text="Buy"
                    textColor="text-amber-500"
                    bgcolor="bg-white"/>
                   </div> 
                </div>
                <img className="w-[320px] absolute -right-8 md:-right-16 top-8 lg:top-[40px]" src={Image2} alt="" />
            </div>
            {/* third col */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-3xl relative
            h-[320px] flex items-end '>
                <div className=''>
                   <div className='bg-gradient-to-br from-red-700 to-red-600 text-white'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                    <Button
                    text="Buy"
                    textColor="text-red-500"
                    bgcolor="bg-white"/>
                   </div> 
                </div>
                <img className="w-70 md:w-[350px] absolute top-1/2 -translate-y-1/2 -right-0" src={Image3} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category;