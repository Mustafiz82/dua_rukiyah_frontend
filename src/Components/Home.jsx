"use client"
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Main from './Main';

const Home = ({ data }) => {

    const { categories, subCategories, dua } = data

    const [openSetting, setOpenSetting] = useState(false);
    const [back, setBack] = useState(true)
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(1);
    const [sectionName, setSectionName] = useState(categories[0]?.cat_name_en);


    const handleToggle = () => {
        setOpenSetting(!openSetting);
    };

    const handleBack = () => {
        setBack(!back)
    }

    return (
        <div className="relative font-inter letter h-screen lg:h-auto overflow-hidden flex lg:gap-5 lg:m-5">
            <Sidebar />

            <div className="w-full pl-2 lg:pl-0">
                <Header
                    handleBack={handleBack}
                    back={back}
                    handleToggle={handleToggle}
                />

                <div className="relative w-full mt-5 flex gap-5">
                    <div className="lg:hidden w-full">
                        <div className={!back ? "hidden " : "min-w-full block"}>
                            <LeftSidebar
                                categories={categories}
                                subCategories={subCategories}
                                handleBack={handleBack}
                                back={back}
                                setSelectedSubCategoryId={setSelectedSubCategoryId}
                                selectedSubCategoryId={selectedSubCategoryId}
                                setSelectedCategoryId={setSelectedCategoryId}
                                selectedCategoryId={selectedCategoryId}
                                setSectionName={setSectionName}
                            />
                        </div>
                        <div className={back ? "hidden " : "min-w-full block"}>
                            <Main
                            dua={dua}
                            selectedCategoryId={selectedCategoryId}
                            selectedSubCategoryId={selectedSubCategoryId}
                            sectionName={sectionName}
                             />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <LeftSidebar 
                        categories={categories}
                        subCategories={subCategories}
                        setSelectedSubCategoryId={setSelectedSubCategoryId}
                        selectedSubCategoryId={selectedSubCategoryId}
                        setSelectedCategoryId={setSelectedCategoryId}
                        selectedCategoryId={selectedCategoryId}
                        setSectionName={setSectionName}
                         />
                    </div>
                    <div className="hidden w-full  lg:block">
                        <Main
                        dua={dua} 
                        selectedCategoryId={selectedCategoryId}
                        selectedSubCategoryId={selectedSubCategoryId}
                        sectionName={sectionName}
                        />
                    </div>

                    <div
                        className={`fixed top-0 right-0 z-30 h-full bg-white  2xl:bg-transparent shadow-lg 2xl:shadow-none transform transition-transform duration-500 w-[300px] ${openSetting ? "translate-x-0 " : "2xl:translate-x-0 translate-x-full"
                            } 2xl:static`}
                    >
                        <RightSidebar handleToggle={handleToggle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;