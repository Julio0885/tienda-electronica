import React, { useState } from 'react'
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
    name: "Agregar Producto",
    link: "/#blog",
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  }
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 mx-auto md:mx-auto '>
      <div className='py-4'>
        <div className='container flex justify-between items-center'>
            {/* Logo and Links section*/ }
            <div className='flex ml-10 md:ml-15 items-center gap-4'>
                <button 
                className="primary font-semibold tracking-widest text-2xl
                uppercase sm:text-3xl flex items-center"
                onClick={() => setOpenMenu(!openMenu)} 
                >eShop
                 <FaCaretDown className={`ml-2 transition-transform ${openMenu ? "rotate-180" : ""}`} />
                </button>
                {/* Mobile submenu */}
                {openMenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg lg:hidden z-50">
                <ul className="flex flex-col">
                  {MenuLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 shadow-red-300 dark:hover:bg-gray-800"
                        onClick={() => setOpenMenu(false)}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
                {/* Menu Items for desktop */}
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
                      {/* Dropdown Links */}
                      <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md
                      dark:bg-gray-900 p-2 dark:text-white'>
                        <ul className='space-y-2'>
                          {DropdownLinks.map((data, index) => (
                            <li key={data.id}>
                              <a 
                              className='text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-red-400/20 
                              rounded-md font-semibold'
                              href={data.link}
                              >
                                {data.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>   
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

