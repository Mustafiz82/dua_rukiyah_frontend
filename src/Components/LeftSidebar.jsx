import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';

const LeftSidebar = ({
    handleBack,
    categories,
    subCategories,
    selectedCategoryId,
    setSelectedCategoryId,
    selectedSubCategoryId,
    setSelectedSubCategoryId,
    setSectionName
}) => {


    const handleCategoryClick = (id , section) => {

        if (selectedCategoryId === id) {
            setSelectedCategoryId(null);
            setSelectedSubCategoryId(null);
        } else {
            setSelectedCategoryId(id);
            setSelectedSubCategoryId(subCategories.find(sub => sub.cat_id === id)?.id);
            setSectionName(section)
        }
    };

    const handleSubCategoryClick = (id) => {
        setSelectedSubCategoryId(id);
    };

    const filteredSubCategories = subCategories.filter(item => item?.cat_id === selectedCategoryId);

    return (
        <div className="min-w-full lg:min-w-[420px] rounded-[10px] h-[calc(100vh-130px)] bg-white">
            <h1 className="w-full p-4 text-center bg-primary text-white text-[17px] font-semibold font-inter">Categories</h1>
            <div className="bg-white box-border m-4 p-3 rounded-[6px] flex items-center border gap-2">
                <IoIosSearch className="rounded-[6px] text-black/50 text-xl" />
                <input type="text" className="w-full outline-none focus:outline-none" placeholder="Search by Categories" />
            </div>
            <div className="h-[calc(100vh-280px)] overflow-y-scroll">
                {categories?.map((item, idx) => (
                    <div key={idx}>
                        <div
                            onClick={() => handleCategoryClick(item?.cat_id , item?.cat_name_en)}
                            className={`p-[10px] m-4 mb-0 rounded-[10px] flex gap-4 ${selectedCategoryId === item?.cat_id ? "bg-[#D1E8F0]" : "bg-[#E8F0F5]"}`}
                        >
                            <Image alt='logo' src={"/images/005-fever.svg"} width={100} height={100} className="w-[60px] p-[10px] h-[60px] rounded-[10px] bg-[#CFE0E5]" />
                            <div className="flex flex-1 justify-between">
                                <div>
                                    <h1 className="font-semibold  text-primary">{item?.cat_name_en}</h1>
                                    <p className="text-sm  text-black/50 mt-1">Subcategory: {item?.no_of_subcat}</p>
                                </div>
                                <div className="text-center">
                                    <h1 className="font-semibold font-poppins">{item?.no_of_dua}</h1>
                                    <p className="text-sm text-black/50 mt-1">Duas</p>
                                </div>
                            </div>
                        </div>

                        {/* Show subcategories only if this categori is selected */}
                        {selectedCategoryId === item?.cat_id && filteredSubCategories?.length > 0 && (
                            <div className="border-l-2 border-dashed border-primary p-3 mx-10">
                                {filteredSubCategories.map((subItem, subIdx) => (
                                    <div onClick={() => handleSubCategoryClick(subItem?.id)} key={subIdx}>
                                        <h2
                                            onClick={handleBack}
                                            className={`circle cursor-pointer py-2 font-semibold ${subItem?.id === selectedSubCategoryId ? "text-primary " : "text-[#373737]"}`}
                                        >
                                            {subItem?.subcat_name_en}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftSidebar;
