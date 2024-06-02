import Landing from "@/components/mainPage/models/Landing";
import Testimonial from "@/components/mainPage/models/Testimonial";
import WhyUs from "@/components/mainPage/models/WhyUs";
import LastCourses from "@/components/mainPage/models/lastCourses";
import Footer from "@/components/Footer";
import CourseModule from "@/models/Courses";
import ConnectToDB from "@/utils/ConnectToDB";
const Home = async ()=> {

  ConnectToDB();

  const courses = await CourseModule.find({}).populate("teacher")
  const allCourses = JSON.parse(JSON.stringify(courses))
  
  return (
   <div className="max-w-7xl mx-auto px-4 font-mainFont">
        <Landing/>
        <WhyUs/>
        <LastCourses data={allCourses}/>
        <Testimonial/>
        <Footer/>
   </div>
  );
}
  export default Home; 