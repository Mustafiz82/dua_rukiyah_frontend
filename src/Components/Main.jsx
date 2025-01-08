import Image from 'next/image';
import React from 'react';
import { IoMdPlay } from "react-icons/io";


const Main = ({ selectedSubCategoryId, selectedCategoryId, dua }) => {

    const filteredDua = dua.filter(item =>
        item.subcat_id === selectedSubCategoryId && item.cat_id === selectedCategoryId
    );



    console.log(dua);
    console.log(filteredDua);
    return (
        <div className='h-[calc(100vh-130px)]  min-w-full'>
            <h1 className='font-medium py-[17px] rounded-[10px] bg-white  px-7'><span className='text-primary'>Section: </span>The servant is dependent on his Lord</h1>

            <div className='h-[calc(100vh-200px)] overflow-y-auto  rounded-[10px] px-5 lg:px-[30px] py-4 bg-white mt-[10px]'>
                <div className='space-y-10'>
                    {
                        filteredDua?.map((item, idx) => <div key={item?.id}>
                            <div className='flex  items-center gap-2'>
                                <Image src={"/icons/ayat-logo.svg"} alt='Ayat' width={1000} height={1000} className='w-9 h-9' />
                                <h2 className='text-primary font-medium '>{idx + 1}. {item?.dua_name_en}</h2>
                            </div>

                            <p className='mt-5'>{item?.top_en}</p>

                            <h1 className='font-poppins font-normal text-2xl text-right leading-[71px] my-7'>{
                                item?.dua_arabic}</h1>

                            {
                                item?.transliteration_en ? <p className='italic'><span className=' not-italic font-bold '>Transliteration: </span> {item?.transliteration_en}</p> : ""
                            }

                            {
                                item?.translation_en ? <p className='my-3'><span className=' not-italic font-bold '>Translation:  </span>{item?.translation_en}</p> : ""
                            }
                            {
                                item?.refference_en ? <div className='font-semibold mt-7'>
                                    <h3 className='text-primary'>Reference:</h3>
                                    <p>{item?.refference_en}</p>
                                </div>                                    : ""
                            }

                            <div className='mt-7 flex justify-between items-center'>
                                <IoMdPlay className=' cursor-pointer text-4xl text-white rounded-full bg-primary p-2' />

                                <div className='flex flex-1 justify-end gap-3 lg:gap-10'>
                                    <Image src={"/icons/copy.svg"} alt='copy' width={100} height={100} className='w-6 h-6 cursor-pointer' />
                                    <Image src={"/icons/bookmark.svg"} alt='bookmark' width={100} height={100} className='w-6 h-6 cursor-pointer' />
                                    <Image src={"/icons/memorize.svg"} alt='memorize' width={100} height={100} className='w-6 h-6 cursor-pointer' />
                                    <Image src={"/icons/share.svg"} alt='share' width={100} height={100} className='w-6 h-6 cursor-pointer' />
                                    <Image src={"/icons/report.svg"} alt='report' width={100} height={100} className='w-6 h-6 cursor-pointer' />
                                </div>

                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Main;