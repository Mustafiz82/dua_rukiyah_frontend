import Image from 'next/image';
import React from 'react';

const Sidebar = () => {

    const icons = [
        { path: "/icons/home.svg", title: "Home" },
        { path: "/icons/menu.svg", title: "Menu" },
        { path: "/icons/memorize.svg", title: "Memories" },
        { path: "/icons/bookmark.svg", title: "Bookmark" },
        { path: "/icons/ruqyah 1.svg", title: "Ruqyah" },
        { path: "/icons/message.svg", title: "Dua Q&A" },
        { path: "/icons/book.svg", title: "Books" },
    ]
    return (
        <div className='bg-white px-2 lg:px-0 w-[50px] lg:w-[120px] flex flex-col items-center justify-between  min-h-[calc(100vh-100px)] '>
            <Image width={1000} height={1000} alt='pray' src={"/images/pray.svg"} className='w-fit' />
            <div className='space-y-3'>
                {
                    icons?.map((item , idx) => <div key={idx} title={item?.title} className='w-10 h-10 mx-auto  bg-[#E8F0F5] rounded-full flex justify-center items-center '>
                         <Image width={1000} height={1000} alt={item?.title} src={item?.path} className=' w-[15px] m-5 ' />
                    </div> )
                }
            </div>
            <Image width={1000} height={1000} alt='pray' src={"/images/support.svg"} className='w-fit' />
        </div>
    );
};

export default Sidebar;