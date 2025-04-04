import HatLogo from "@/components/templates/mainPage/HatLogo";
import FancyCard from "@/components/module/courses/FancyCard";
import Footer from "@/components/templates/mainPage/Footer";
import FilterSide from "@/components/templates/course/allCourse/FilterSide";
import AllCoursesSort from "@/components/templates/course/allCourse/AllCoursesSort";
import CourseModule from "@/models/Courses";
import ConnectToDB from "@/utils/ConnectToDB";
import Navbar from "@/components/templates/mainPage/Navbar";
async function page() { 
  ConnectToDB();
  const res = await CourseModule.find({})?.populate("teacher");
  return (
    <>
    <Navbar isLogin={true} />
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
            {res.map((course) => (
              <div className="mb-5" key={course._id} >
                <FancyCard key={course.id} data={JSON.parse(JSON.stringify(course))} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
    </>

  );
}

export default page;
