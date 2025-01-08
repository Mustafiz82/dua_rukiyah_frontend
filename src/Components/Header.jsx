import Image from 'next/image';
import React from 'react';
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";


const Header = ({ handleToggle , back , handleBack}) => {

    return (
        <div className='flex lg:bg-transparent bg-white px-4 lg:px-0  justify-between items-center'>
            <IoChevronBackOutline onClick={handleBack} className={`${back && "hidden"} lg:hidden text-2xl` }/>
            <h1 className='font-semibold text-2xl font-poppins'>Dua Page</h1>
            <div className='lg:flex justify-end hidden w-3/4'>
                <div className='bg-white  rounded-[6px] w-[370px] p-1 flex justify-between items-center border'>
                    <input type="text" className='py-2 w-full px-3 outline-none focus:outline-none' placeholder='Search by Dua Name' />
                    <IoIosSearch className='bg-[#F3F4F6] w-[54px] h-[54px] rounded-[6px] text-4xl p-3' />


                </div>
            </div>

            <div className='flex  items-center gap-2'>
            <IoIosSearch className='lg:hidden bg-[#F3F4F6] w-[54px] h-[54px] rounded-[6px] text-4xl p-3' />
                <Image src={"/images/profile.png"} width={100} height={100} className='w-10 h-10' alt='profile' />
                <IoMdArrowDropdown className='text-xl' />
                <IoMdSettings onClick={handleToggle} className='text-2xl text-primary 2xl:hidden' />
            </div>
        </div>
    );
};

export default Header;