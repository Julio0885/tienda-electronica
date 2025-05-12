import React from 'react'
import { IoMdSearch } from 'react-icons/io';
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
]

export default function Navbar() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between items-center'>
            {/* Logo and Links section*/ }
            <div className='flex items-center gap-4'>
                <a className="primary font-semibold tracking-widest text-2xl
                uppercase sm:text-3xl"href="#">Eshop</a>
                {/* Menu Items */}
                <div className='hidden lg:block'>
                  <ul className='flex items-center gap-4'>
                    {
                      MenuLinks.map((data, index) => (
                        <li key={index}>
                            <a 
                            href={data.link}
                            className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-gray-400
                            dark:hover:text-white duration-200'> {" "} {data.name}</a>
                        </li>
                      ))
                    }
                    {/* Dropdown*/}
                    <li className='relative cursor-pointer group'>
                      <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>Quick Links
                        <span>
                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                        </span>
                      </a>
                      
                    </li>
                  </ul>
                </div>
            </div>

            {/* Navbar Right section*/ }
            <div className='flex justify-between items-center gap-4'>
              {/* Search Bar section*/}
              <div className='relative group hidden sm:block'>
                <input type="text" placeholder='Search'
                className='w-0 group-hover:w-[300px] transition-all duration-300
                rounded-full group-hover:border group-hover:border-gray-500
                px-3 py-1 focus:outline-none focus:border-1 dark:border-gray-800 dark:bg-gray-900
              group-hover:dark:bg-gray-800'/>
                <IoMdSearch className='text-xl text-gray-600 group-hover:primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2
                right-3 duration-200'/>
              </div>

              {/* Order-button section */}
              <button className='relative p-3'>
                <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'/>
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0
                right-0 flex items-center justify-center text-xs'>
                  4
                </div>
              </button>
              {/* Dark Mode section*/}
              <div>
                <DarkMode />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

