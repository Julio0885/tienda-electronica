import React from 'react'
import Button from '../Shared/Button'

export default function ProductCard({ data }) {
    return (
        <div className='mb-10 ml-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
      gap-5 place-items-center'>
                {/* card section */}
                {data.map((data) => (
                        <div className="group" key={data.id}>
                            <div className='relative'>
                                <img
                                    className='h-[180px] w-[260px] object-cover rounded-md'
                                    src={data.img} alt="" />
                                {/* hover button */}
                                <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center
                                bg-black/10  justify-center items-center duration-200 rounded-md'>
                                    <Button
                                    text={"Add to Cart"}
                                    bgcolor={"bg-red-400"}
                                    textColor={"text-white"}/>
                                </div>
                            </div>
                            <div className='leading-7'>
                                <h2 className='font-semibold'>{data.title}</h2>
                                <h2 className='font-bold'>${data.price}</h2>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

