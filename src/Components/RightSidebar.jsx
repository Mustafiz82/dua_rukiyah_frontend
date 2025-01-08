import Image from 'next/image';
import React from 'react';
import { IoMdClose } from "react-icons/io";


const RightSidebar = ({ handleToggle }) => {
    return (
        <div className='bg-white p-5   rounded-[32px] h-[calc(100vh-130px)] min-w-[330px]'>

            <div className='flex justify-between pr-5 items-center 2xl:justify-center'>
                <h1 className='text-[#393939]  text-xl font-bold text-center'>Setting</h1>
                <IoMdClose onClick={handleToggle} className=' 2xl:hidden text-xl cursor-pointer'/>
            </div>
            <div className='mt-5 w-fit space-y-4'>
                <div className='flex bg-[#F7F8FA] p-[14px] rounded-[5px] items-center gap-3'>
                    <div className='w-10 h-10  bg-[#E8F0F5] rounded-full flex justify-center  items-center '>
                        <Image width={1000} height={1000} alt={"languge"} src={"/icons/language.svg"} className=' w-[15px]  ' />

                    </div>
                    <h2 className='text-[#868686]'>Language Settings</h2>
                </div>
                <div className='flex bg-[#F7F8FA] p-[14px] rounded-[5px] items-center gap-3'>
                    <div className='w-10 h-10  bg-[#E8F0F5] rounded-full flex justify-center  items-center '>
                        <Image width={1000} height={1000} alt={"languge"} src={"/icons/setting.svg"} className=' w-[15px]  ' />

                    </div>
                    <h2 className='text-[#868686]'>General Settings</h2>
                </div>
                <div className='flex bg-[#F7F8FA] p-[14px] rounded-[5px] items-center gap-3'>
                    <div className='w-10 h-10  bg-[#E8F0F5] rounded-full flex justify-center  items-center '>
                        <Image width={1000} height={1000} alt={"languge"} src={"/icons/menu.svg"} className=' w-[15px]  ' />

                    </div>
                    <h2 className='text-[#868686]'>Font Settings</h2>
                </div>
                <div className='flex border-l-primary border-l-[5px] bg-[#F7F8FA] p-[14px] rounded-[5px] items-center gap-3'>
                    <div className='w-10 h-10  bg-[#E8F0F5] rounded-full flex justify-center  items-center '>
                        <Image width={1000} height={1000} alt={"languge"} src={"/icons/menu-green.svg"} className=' w-[15px]  ' />

                    </div>
                    <h2 className='text-primary'>Appearance Settings</h2>
                </div>
            </div>

            <div className='mt-8 mr-2  flex px-1 justify-between items-center'>
                <h2>Night Mode</h2>
                <div className="cl-toggle-switch">
                    <label className="cl-switch">
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;