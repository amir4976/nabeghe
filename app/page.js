
import Landing from "@/components/mainPage/models/Landing";
import Testimonial from "@/components/mainPage/models/Testimonial";
import WhyUs from "@/components/mainPage/models/WhyUs";
import LastCourses from "@/components/mainPage/models/lastCourses";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <div className="max-w-7xl mx-auto px-4 font-mainFont">
        <Landing/>
        <WhyUs/>
        <LastCourses/>
        <Testimonial/>
        <Footer/>
   </div>
  );
}