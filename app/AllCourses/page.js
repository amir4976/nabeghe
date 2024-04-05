import Navbar from "@/components/mainPage/models/Navbar";
import React from "react";
import HatLogo from "@/components/HatLogo";
import FancyCard from "@/components/FancyCard";
import Footer from "@/components/Footer";
import FilterSide from "@/components/allCourse/FilterSide";
import AllCoursesSort from "@/components/allCourse/AllCoursesSort";

function page() {
  return (
    <div className="max-w-7xl mx-auto p-4 font-mainFont">
      <div className="page-title flex w-full  ">
        <HatLogo />
        <div className="flex flex-col  justify-center  gap-1 mr-2 ">
          <span className="font-bold text-2xl text-primary-color">
            دوره های اموزشی
          </span>
          <span> دوره ببین یادبگیر برنامه نویس شو</span>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full max-xl:flex">
        {/* Sidebar */}
        <FilterSide />

        {/* Main Content */}
        <div className="md:col-span-9    w-full">
          <AllCoursesSort/>

          <div className="courses grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
            <div className="mb-10">
              <FancyCard />
            </div>
            <div className="mb-10">
              <FancyCard />
            </div>
            <div className="mb-10">
              <FancyCard />
            </div>
            <div className="mb-10">
              <FancyCard />
            </div>
            <div className="mb-10">
              <FancyCard />
            </div>
            <div className="mb-10">
              <FancyCard />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default page;
