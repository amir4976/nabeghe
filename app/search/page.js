import ConnectToDB from '@/utils/ConnectToDB';
import React from 'react'
import courseModel from '@/models/Courses'
import Navbar from '@/components/templates/mainPage/Navbar';
import Footer from '@/components/templates/mainPage/Footer';
import Bradcramp from '@/components/templates/search/Bradcramp';
import MainPageTitle from '@/components/templates/mainPage/MainPageTitle';
import { FaSearch } from 'react-icons/fa';
import FancyCard from '@/components/module/courses/FancyCard';
async function page({searchParams}) {
  const {search} = searchParams;
  ConnectToDB()
  const searchCourses = await courseModel.find({
    $or:[
      {title:{$regex:search, $options:"i"}},
      {description:{$regex:search, $options:"i"}},
      {category:{$regex:search, $options:"i"}},
      {courseName:{$regex:search, $options:"i"}},
    ]
  })
  return (

    <div>
        <Navbar/>
        <Bradcramp search={search}/>
        <div className="w-full max-w-7xl mx-auto px-11 py-10  font-mainFont">
                <MainPageTitle title=' جستجو' desc={search} icon={<FaSearch/>}/>
                {
                  !searchCourses && (
                      <div className="w-full h-full flex justify-center items-center">
                            <span className="text-light-color text-xl">محتوای مورد نظر یافت نشد</span>
                        </div>
                     )
                }
                <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                {
                searchCourses.map((course,index)=>(
                      <FancyCard key={index+1} data={course}/>
                    ))
                }
            </div>
               
        </div>
        <Footer/>
    </div>
  )
}

export default page
